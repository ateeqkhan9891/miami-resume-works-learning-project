"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  Loader2 
} from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createClient } from "@/lib/supabase/client";
import {
  signupSchema,
  type SignupFormData,
} from "@/lib/validations/auth";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUp() {
  const supabase = createClient();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true);

    try {
      const { data: authData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.fullName,
          },
        },
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      if (
        authData?.user &&
        (!authData.user.identities || authData.user.identities.length === 0)
      ) {
        setErrorMessage("An account with this email already exists. Please sign in instead.");
        return;
      }

      setSuccessMessage(
        "Account created successfully. Please check your email to verify your account."
      );
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-slate-50/60 overflow-hidden flex items-center justify-center px-4 py-12 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Ambient background decoration */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div className="h-[420px] w-[500px] rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="h-[300px] w-[350px] rounded-full bg-slate-200/50 blur-2xl" />
      </div>

      <div className="w-full max-w-[440px]">
        {/* Brand Icon & Heading */}
        <div className="mb-8 text-center">
          <div className="inline-flex size-11 items-center justify-center rounded-xl bg-emerald-600 shadow-lg shadow-emerald-600/20 text-white mb-4 ring-4 ring-emerald-50">
            <FileText className="size-5" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Create your account
          </h1>
          <p className="mt-1.5 text-sm text-slate-500">
            Start building professional resumes with <span className="font-medium text-slate-700">MiamiResume</span>.
          </p>
        </div>

        {/* Card Container */}
        <Card className="border border-slate-200/80 bg-white/95 shadow-xl shadow-slate-200/40 backdrop-blur-md rounded-2xl">
          <CardHeader className="space-y-1 pb-4 pt-6 px-6 sm:px-8 border-b border-slate-100">
            <h2 className="text-base font-semibold text-slate-900">
              Get Started
            </h2>
            <p className="text-xs text-slate-500">
              Enter your information below to register your account.
            </p>
          </CardHeader>

          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <Label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Miami Wazir"
                    autoComplete="name"
                    className="h-10.5 pl-10 rounded-lg border-slate-200 bg-slate-50/40 text-sm focus-visible:bg-white focus-visible:ring-emerald-600 focus-visible:border-emerald-600 transition-all"
                    {...register("fullName")}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-red-500 font-medium pl-0.5">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="miami123@gmail.com"
                    autoComplete="email"
                    className="h-10.5 pl-10 rounded-lg border-slate-200 bg-slate-50/40 text-sm focus-visible:bg-white focus-visible:ring-emerald-600 focus-visible:border-emerald-600 transition-all"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 font-medium pl-0.5">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    autoComplete="new-password"
                    className="h-10.5 pl-10 pr-10 rounded-lg border-slate-200 bg-slate-50/40 text-sm focus-visible:bg-white focus-visible:ring-emerald-600 focus-visible:border-emerald-600 transition-all"
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute right-0 top-0 flex h-full w-10 cursor-pointer items-center justify-center text-slate-400 transition-colors hover:text-slate-600 focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-500 font-medium pl-0.5">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword" className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Repeat password"
                    autoComplete="new-password"
                    className="h-10.5 pl-10 pr-10 rounded-lg border-slate-200 bg-slate-50/40 text-sm focus-visible:bg-white focus-visible:ring-emerald-600 focus-visible:border-emerald-600 transition-all"
                    {...register("confirmPassword")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((current) => !current)}
                    className="absolute right-0 top-0 flex h-full w-10 cursor-pointer items-center justify-center text-slate-400 transition-colors hover:text-slate-600 focus:outline-none"
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500 font-medium pl-0.5">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="pt-1">
                <div className="flex items-start gap-2.5">
                  <Controller
                    name="terms"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id="terms"
                        className="mt-0.5 rounded data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label
                    htmlFor="terms"
                    className="text-xs font-normal leading-relaxed text-slate-500 cursor-pointer"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="font-medium text-slate-800 underline underline-offset-4 hover:text-emerald-600 transition-colors"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="font-medium text-slate-800 underline underline-offset-4 hover:text-emerald-600 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </Label>
                </div>
                {errors.terms && (
                  <p className="text-xs text-red-500 font-medium mt-1">
                    {errors.terms.message}
                  </p>
                )}
              </div>

              {/* Feedback Alerts */}
              {successMessage && (
                <div
                  role="status"
                  className="flex items-start gap-2.5 rounded-lg border border-emerald-200/80 bg-emerald-50/80 p-3 text-xs text-emerald-800"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                  <div className="leading-snug">{successMessage}</div>
                </div>
              )}

              {errorMessage && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 rounded-lg border border-red-200/80 bg-red-50/80 p-3 text-xs text-red-800"
                >
                  <AlertCircle className="size-4 shrink-0 text-red-600 mt-0.5" />
                  <div className="leading-snug">{errorMessage}</div>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading || !!successMessage}
                className="h-11 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] font-medium text-white shadow-md shadow-emerald-600/15 transition-all text-sm mt-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="size-4 animate-spin" />
                    <span>Creating account...</span>
                  </div>
                ) : successMessage ? (
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4" />
                    <span>Account created</span>
                  </div>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer Login Link */}
        <p className="mt-6 text-center text-xs text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-emerald-600 transition-colors hover:text-emerald-700 hover:underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}