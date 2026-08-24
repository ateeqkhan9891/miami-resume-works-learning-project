"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import{loginSchema,type LoginFormData,} from "@/lib/validations/auth";


import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import {useRouter} from "next/navigation";






export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");

  const supabase = createClient();

  const {
    register,handleSubmit,formState: {errors,isSubmitting},} = 
    useForm<LoginFormData>({resolver: zodResolver(loginSchema),
      defaultValues:{
        email: "",
        password: "",
      },
    });

    const router = useRouter();
    const onSubmit = async (data: LoginFormData) => {
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setErrorMessage("Invalid email or password.");
      return;
    }
    console.log("LOGIN SUCCESS — REDIRECTING");
    router.push("/dashboard");
  };






  


  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen w-full max-w-md items-center justify-center px-6 py-12">
        <div className="w-full">

          {/* Heading */}
          <div className="mb-8 text-center">
               

                <h1 className="text-2xl font-semibold tracking-tight text-slate-950">
                    Welcome back
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                    Sign in to continue to your account.
                </p>
            </div>

          {/* Login Card */}
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader className="space-y-1">
              <h2 className="text-lg font-semibold text-slate-950">
                Sign in
              </h2>

              <p className="text-sm text-slate-500">
                Enter your email and password below.
              </p>
            </CardHeader>

            <CardContent>
              <form 
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5">

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email address
                  </Label>

                  <Input
                    id="email"
                    type="email"
                    placeholder="kyliejenner@gmail.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                    className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                    

                  />

                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}




                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">
                    Password
                  </Label>

                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className={`pr-10 ${
                        errors.password? "border-red-500 focus-visible:ring-red-500":
                        ""
                      }`}
                      aria-invalid={!!errors.password}
                      {...register("password")}
                      
                    />

                   

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((current) => !current)
                      }
                      className="absolute right-0 top-0 flex h-full w-10 items-center justify-center text-slate-400 transition-colors hover:text-slate-600"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
  
                  </div>

                      {errors.password && (
                        <p className="text-sm text-red-500">
                          {errors.password.message}
                        </p>
                    )}
                      
                </div>

                {/* Forgot Password */}
                <div className="flex items-center justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 w-full cursor-pointer bg-emerald-600 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  {isSubmitting ? "Signing in...." : "Sign in"}

                  
                </Button>

                <div className="relative py-2">
                    <Separator />

                    <span  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-slate-400">
                    or continue with</span>

                </div>

                <Button
                    type="button"
                    variant="outline"
                    className="relative h-11 cursor-pointer w-full border-slate-200 bg-white text-sm font-medium text-slate-700 shadow-none hover:bg-slate-50"
                    >
                    <span className="absolute left-25 text-base font-semibold">
                        G
                    </span>

                    Continue with Google
                </Button>
            
              </form>
            </CardContent>
          </Card>

          {errorMessage && (
                <div
                  role="alert"
                  className="rounded-md border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-600"
                >
                  {errorMessage}
                </div>
              )}

          <div  className="mt-6 text-center text-sm text-slate-500">
              Don't have an account?{" "}
            <Link href="/signup"
             className="font-medium text-emerald-600 transition-colors hover:text-emerald-700">
                Sign up
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}