import Link from "next/link";
import { Infinity } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-emerald-600"
    >
      <Infinity className="size-7" strokeWidth={2.5} />

      <span className="text-xl font-bold tracking-tight">
        MiamiResume
      </span>
    </Link>
  );
}