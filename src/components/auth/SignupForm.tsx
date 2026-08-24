"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
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

    // console.log("AUTH DATA:", authData);
    // console.log("AUTH ERROR:", error);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    // User already exists & enumeration protection is ON (identities is empty or null)
    if (
      authData?.user &&
      (!authData.user.identities || authData.user.identities.length === 0)
    ) {
      setErrorMessage("An account with this email already exists. Please sign in instead.");
      return;
    }

    //  Fresh, new account created
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
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen w-full max-w-md items-center justify-center px-6 py-12">
        <div className="w-full">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-950">
              Create your account
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Start building professional resumes with MiamiResume.
            </p>
          </div>

          {/* Sign Up Card */}
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader className="space-y-1">
              <h2 className="text-lg font-semibold text-slate-950">
                Sign Up
              </h2>

              <p className="text-sm text-slate-500">
                Create your account to get started.
              </p>
            </CardHeader>

            <CardContent>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    Full Name
                  </Label>

                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Miami Wazir"
                    autoComplete="name"
                    {...register("fullName")}
                  />

                  {errors.fullName && (
                    <p className="text-sm text-red-600">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Enter Email
                  </Label>

                  <Input
                    id="email"
                    type="email"
                    placeholder="miami123@gmail.com"
                    autoComplete="email"
                    {...register("email")}
                  />

                  {errors.email && (
                    <p className="text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">
                    Enter Password
                  </Label>

                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      autoComplete="new-password"
                      className="pr-10"
                      {...register("password")}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((current) => !current)
                      }
                      className="absolute right-0 top-0 flex h-full w-10 cursor-pointer items-center justify-center text-slate-400 transition-colors hover:text-slate-600"
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
                    <p className="text-sm text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">
                    Confirm Password
                  </Label>

                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Confirm your password"
                      autoComplete="new-password"
                      className="pr-10"
                      {...register("confirmPassword")}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          (current) => !current
                        )
                      }
                      className="absolute right-0 top-0 flex h-full w-10 cursor-pointer items-center justify-center text-slate-400 transition-colors hover:text-slate-600"
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
                    <p className="text-sm text-red-600">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Terms */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Controller
                      name="terms"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="terms"
                          className="mt-0.5"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />

                    <Label
                      htmlFor="terms"
                      className="text-sm font-normal leading-5 text-slate-600"
                    >
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="font-medium text-slate-950 underline underline-offset-4 hover:text-emerald-600"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="font-medium text-slate-950 underline underline-offset-4 hover:text-emerald-600"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </Label>
                  </div>

                  {errors.terms && (
                    <p className="text-sm text-red-600">
                      {errors.terms.message}
                    </p>
                  )}
                </div>

                {successMessage && (
                  <div
                    role="status"
                    className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700"
                  >
                    {successMessage}
                  </div>
                )}

                {errorMessage && (
                  <div
                    role="alert"
                    className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
                  >
                    {errorMessage}
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isLoading || !!successMessage}
                  className="h-11 w-full cursor-pointer bg-emerald-600 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  {isLoading
                    ? "Creating account..."
                    : successMessage
                    ? "Account created"
                    : "Create account"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-emerald-600 transition-colors hover:text-emerald-700"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}