"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Form, Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { FaGoogle, FaEraser } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      toast.error("Please provide both email and password!");
      return;
    }

    // console.log(email,password);
    

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "Invalid email or password!");
        return;
      }

      toast.success("Login successful!");

      
      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1000);

    } catch (err) {
      toast.error("Something went wrong during login!");
    }
  };

 

  //  Google Social Login
  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error("Google login failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfdfd] p-4">
      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={2000} />

      <Card className="max-w-[500px] w-full p-8 rounded-[2rem]">
        
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-800">Welcome Back</h1>
          <p className="text-slate-400 mt-2 italic">
            Login to continue with <span className="text-orange-500 font-bold">Book Borro</span>
          </p>
        </div>

        {/* Login Form */}
        <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <div className="space-y-4 w-full">
            
            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-slate-700">Email Address</label>
              <Input
                name="email"
                type="email"
                placeholder="example@mail.com"
                required
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-slate-700">Password</label>
              <Input
                name="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <Button
              type="submit"
              className="bg-orange-500 text-white font-bold h-12 rounded-xl"
            >
              <Check /> Login Now
            </Button>

            <Button
              type="reset"
              variant="flat"
              className="font-bold rounded-xl h-12"
            >
              <FaEraser /> Clear Fields
            </Button>
          </div>
        </Form>

        {/* Divider */}
        <div className="relative my-8 text-center border-t border-slate-100">
          <span className="relative -top-3 bg-white px-4 text-xs text-slate-300 uppercase font-bold">
            Or continue with
          </span>
        </div>

        {/* Social Login Button */}
        <Button
          onClick={handleGoogleLogin}
          variant="outline"
          className="w-full h-12 font-bold rounded-xl gap-3 hover:bg-slate-50"
        >
          <FaGoogle className="text-red-500" />
          Login with Google
        </Button>

        {/* Register Link */}
        <div className="text-center mt-8">
          <p className="text-slate-500">
            Don't have an account?
            <Link
              href="/register"
              className="text-orange-500 font-bold hover:underline ml-1"
            >
              Register here
            </Link>
          </p>
        </div>

      </Card>
    </div>
  );
}