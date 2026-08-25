import type { ReactNode } from "react";

interface BackgroundPatternProps {
  children: ReactNode;
}

export default function BackgroundPattern({
  children,
}: BackgroundPatternProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Soft ambient color blobs */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-violet-200/25 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl" />

        {/* Colorful dot grid */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(16,185,129,0.38) 1.5px, transparent 1.5px),
              radial-gradient(circle at center, rgba(139,92,246,0.25) 1.5px, transparent 1.5px),
              radial-gradient(circle at center, rgba(6,182,212,0.25) 1.5px, transparent 1.5px)
            `,
            backgroundSize: "28px 28px, 42px 42px, 56px 56px",
            backgroundPosition: "0 0, 14px 14px, 28px 28px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
        />

        {/* Very subtle white fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/80" />
      </div>

      {/* Page content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}