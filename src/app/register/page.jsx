"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Form,
  Input,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { FaGoogle, FaEye, FaEyeSlash, FaEraser } from "react-icons/fa";

export default function RegisterPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (!error) {
      toast.success("Registration successful! Welcome.", {
        position: "top-center",
      });
      router.push("/login");
    } else {
      toast.error(error.message || "Failed to register. Please try again.", {
        position: "top-center",
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error("Google authentication failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfdfd] px-4 py-10">
      <Card className="max-w-[500px] w-full p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-[2rem] bg-white">

        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Create Account
          </h1>
          <p className="text-slate-400 mt-2 font-medium italic">
            Start your journey with <span className="text-orange-500 font-bold">Book Borro</span>
          </p>
        </div>

        <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <div className="space-y-5 w-full">
            
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
              <Input
                isRequired
                name="name"
                placeholder="Enter your full name"
                variant="bordered"
                classNames={{
                  inputWrapper: "rounded-xl border-slate-200 focus-within:!border-orange-500 h-12 transition-all",
                }}
              />
            </div>

            {/* Photo URL Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Profile Photo URL</label>
              <Input
                isRequired
                name="image"
                placeholder="https://example.com/photo.png"
                variant="bordered"
                classNames={{
                  inputWrapper: "rounded-xl border-slate-200 focus-within:!border-orange-500 h-12 transition-all",
                }}
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <Input
                isRequired
                name="email"
                type="email"
                placeholder="example@mail.com"
                variant="bordered"
                classNames={{
                  inputWrapper: "rounded-xl border-slate-200 focus-within:!border-orange-500 h-12 transition-all",
                }}
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
              <Input
                isRequired
                name="password"
                placeholder="••••••••"
                variant="bordered"
                description="Use 8+ characters for security"
                type={isVisible ? "text" : "password"}
                endContent={
                  <button 
                    className="focus:outline-none" 
                    type="button" 
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <FaEyeSlash className="text-xl text-slate-400 hover:text-orange-500 transition-colors" />
                    ) : (
                      <FaEye className="text-xl text-slate-400 hover:text-orange-500 transition-colors" />
                    )}
                  </button>
                }
                classNames={{
                  inputWrapper: "rounded-xl border-slate-200 focus-within:!border-orange-500 h-12 transition-all",
                }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <Button
              type="submit"
              className="bg-orange-500 text-white font-bold h-14 rounded-xl text-lg shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all"
            >
              <Check className="w-6 h-6" /> Register Now
            </Button>

            <Button
              type="reset"
              variant="flat"
              className="font-bold text-slate-500 rounded-xl h-12 hover:bg-slate-100 transition-all"
            >
              <FaEraser /> Clear Fields
            </Button>
          </div>
        </Form>

        {/* Divider */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-slate-300 font-bold tracking-[0.2em]">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login */}
        <Button
          onPress={handleGoogleLogin}
          variant="bordered"
          className="w-full h-14 font-bold border-2 border-slate-100 rounded-xl hover:bg-slate-50 transition-all gap-3"
        >
          <FaGoogle className="text-red-500 text-xl" />
          Sign up with Google
        </Button>

        {/* Bottom Link */}
        <div className="text-center mt-8">
          <p className="text-slate-500 font-medium">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-500 font-extrabold hover:underline ml-1">
              Login here
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}