"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Eye, 
  EyeOff, 
  Lock, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Loader2 
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const router = useRouter();
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    setErrorMessage("");

    try {
      const { error } = await supabase.auth.updateUser({
        password: data.password,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      setIsSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 2500);
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again.");
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
            <ShieldCheck className="size-5" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Set new password
          </h1>
          <p className="mt-1.5 text-sm text-slate-500">
            Create a strong new password for your account.
          </p>
        </div>

        {/* Card Container */}
        <Card className="border border-slate-200/80 bg-white/95 shadow-xl shadow-slate-200/40 backdrop-blur-md rounded-2xl">
          <CardHeader className="space-y-1 pb-4 pt-6 px-6 sm:px-8 border-b border-slate-100">
            <h2 className="text-base font-semibold text-slate-900">
              Reset Password
            </h2>
            <p className="text-xs text-slate-500">
              {isSuccess
                ? "Your password has been changed."
                : "Enter and confirm your new password below."}
            </p>
          </CardHeader>

          <CardContent className="p-6 sm:p-8">
            {isSuccess ? (
              <div className="space-y-5 text-center">
                <div className="flex flex-col items-center justify-center rounded-lg border border-emerald-200/80 bg-emerald-50/70 p-4 text-emerald-900">
                  <CheckCircle2 className="size-8 text-emerald-600 mb-2" />
                  <p className="text-sm font-semibold">Password updated successfully</p>
                  <p className="text-xs text-emerald-700 mt-1 max-w-[280px]">
                    Redirecting you to the sign-in page in a moment...
                  </p>
                </div>

                <Link href="/login" className="block w-full">
                  <Button
                    type="button"
                    className="h-11 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 font-medium text-white shadow-md shadow-emerald-600/15 text-sm cursor-pointer"
                  >
                    Go to Sign In
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* New Password */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="password"
                    className="text-xs font-semibold uppercase tracking-wider text-slate-700"
                  >
                    New Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
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

                {/* Confirm New Password */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-xs font-semibold uppercase tracking-wider text-slate-700"
                  >
                    Confirm New Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      autoComplete="new-password"
                      className="h-10.5 pl-10 pr-10 rounded-lg border-slate-200 bg-slate-50/40 text-sm focus-visible:bg-white focus-visible:ring-emerald-600 focus-visible:border-emerald-600 transition-all"
                      {...register("confirmPassword")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((current) => !current)}
                      className="absolute right-0 top-0 flex h-full w-10 cursor-pointer items-center justify-center text-slate-400 transition-colors hover:text-slate-600 focus:outline-none"
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-xs text-red-500 font-medium pl-0.5">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Error Alert */}
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
                  disabled={isSubmitting}
                  className="h-11 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] font-medium text-white shadow-md shadow-emerald-600/15 transition-all text-sm mt-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="size-4 animate-spin" />
                      <span>Updating password...</span>
                    </div>
                  ) : (
                    "Update Password"
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Back to Sign In */}
        {!isSuccess && (
          <p className="mt-6 text-center text-xs text-slate-500">
            Remember your password?{" "}
            <Link
              href="/login"
              className="font-semibold text-emerald-600 transition-colors hover:text-emerald-700 hover:underline underline-offset-4"
            >
              Sign in
            </Link>
          </p>
        )}
      </div>
    </main>
  );
}