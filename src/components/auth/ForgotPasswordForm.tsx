"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  KeyRound, 
  ArrowLeft, 
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

const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setErrorMessage("");

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      setSubmittedEmail(data.email);
      setIsSubmitted(true);
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
            <KeyRound className="size-5" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Reset your password
          </h1>
          <p className="mt-1.5 text-sm text-slate-500">
            Enter your email and we'll send you a recovery link.
          </p>
        </div>

        {/* Card Container */}
        <Card className="border border-slate-200/80 bg-white/95 shadow-xl shadow-slate-200/40 backdrop-blur-md rounded-2xl">
          <CardHeader className="space-y-1 pb-4 pt-6 px-6 sm:px-8 border-b border-slate-100">
            <h2 className="text-base font-semibold text-slate-900">
              Forgot Password
            </h2>
            <p className="text-xs text-slate-500">
              {isSubmitted
                ? "Check your inbox for the reset link."
                : "Enter the email associated with your account."}
            </p>
          </CardHeader>

          <CardContent className="p-6 sm:p-8">
            {isSubmitted ? (
              <div className="space-y-5 text-center">
                <div className="flex flex-col items-center justify-center rounded-lg border border-emerald-200/80 bg-emerald-50/70 p-4 text-emerald-900">
                  <CheckCircle2 className="size-8 text-emerald-600 mb-2" />
                  <p className="text-sm font-semibold">Check your email</p>
                  <p className="text-xs text-emerald-700 mt-1 max-w-[280px]">
                    We've sent a password reset link to{" "}
                    <span className="font-semibold text-emerald-900">{submittedEmail}</span>.
                  </p>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  Didn't receive the email? Check your spam folder or{" "}
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="font-semibold text-emerald-600 hover:text-emerald-700 underline underline-offset-4"
                  >
                    try another email
                  </button>
                  .
                </p>

               <Link href="/login" className="block w-full">
                    <Button
                        type="button"
                        variant="outline"
                        className="h-11 w-full rounded-lg border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-medium cursor-pointer"
                    >
                        <ArrowLeft className="size-4 mr-2" />
                        Back to sign in
                    </Button>
                    </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Email Input */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-wider text-slate-700"
                  >
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
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

                {/* Error Message */}
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
                      <span>Sending link...</span>
                    </div>
                  ) : (
                    "Send Reset Link"
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        
            <Link
                href="/login"
                className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 cursor-pointer"
                >
                <ArrowLeft className="mr-2 size-4" />
                Back to sign in
            </Link>
      </div>
    </main>
  );
}