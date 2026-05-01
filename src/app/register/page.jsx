"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Form, Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { FaGoogle, FaEraser } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const router = useRouter();

  // ✅ Register Handler (SAFE)
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") || "";
    const image = formData.get("image") || "";
    const email = formData.get("email") || "";
    const password = formData.get("password") || "";

    // 🔍 Debug (optional)
    console.log({ name, image, email, password });

    // ✅ Basic validation
    if (!email || !password || !name) {
      toast.error("Please fill all required fields!");
      return;
    }

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });

      if (error) {
        toast.error(error.message || "Registration failed!");
        return;
      }

      toast.success("Registration successful!");

      setTimeout(() => {
        router.push("/login");
      }, 1500);

    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  // ✅ Google Login
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
    <div className="min-h-screen flex items-center justify-center bg-[#fdfdfd] p-4">

      {/* Toast */}
      <ToastContainer position="top-center" />

      <Card className="max-w-[500px] w-full p-8 rounded-[2rem]">

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-800">Create Account</h1>
          <p className="text-slate-400 mt-2 italic">
            Start your journey with{" "}
            <span className="text-orange-500 font-bold">Book Borro</span>
          </p>
        </div>

        {/* Form */}
        <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <div className="space-y-4 w-full">

            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-slate-700">
                Full Name
              </label>
              <Input
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Image */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-slate-700">
                Photo URL
              </label>
              <Input
                name="image"
                placeholder="Photo link here"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-slate-700">
                Email Address
              </label>
              <Input
                name="email"
                type="email"
                placeholder="example@mail.com"
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-slate-700">
                Password
              </label>
              <Input
                name="password"
                type="password"
                placeholder="••••••••"
                required
                minLength={8}
                pattern="(?=.*\d)(?=.*[A-Z]).{8,}"
                title="Must be at least 8 characters, include 1 uppercase letter and 1 number"
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Button
              type="submit"
              className="bg-orange-500 text-white font-bold h-12 rounded-xl"
            >
              <Check /> Register Now
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

        {/* Google */}
        <Button
          onClick={handleGoogleLogin}
          variant="bordered"
          className="w-full h-12 font-bold rounded-xl gap-3"
        >
          <FaGoogle className="text-red-500" />
          Sign up with Google
        </Button>

        {/* Login link */}
        <div className="text-center mt-8">
          <p className="text-slate-500">
            Already have an account?
            <Link
              href="/login"
              className="text-orange-500 font-bold hover:underline ml-1"
            >
              Login here
            </Link>
          </p>
        </div>

      </Card>
    </div>
  );
}