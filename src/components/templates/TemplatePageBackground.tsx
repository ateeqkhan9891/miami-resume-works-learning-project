export default function TemplatePageBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafaf9]">
      {/* Soft ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="absolute right-[-180px] top-[420px] h-[420px] w-[420px] rounded-full bg-emerald-50/70 blur-3xl" />

        <div className="absolute bottom-[-200px] left-[-160px] h-[400px] w-[400px] rounded-full bg-slate-100/80 blur-3xl" />
      </div>

      {/* Colorful subtle dot texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(16, 185, 129, 0.28) 1.2px, transparent 1.2px),
            radial-gradient(circle, rgba(139, 92, 246, 0.18) 1.2px, transparent 1.2px),
            radial-gradient(circle, rgba(6, 182, 212, 0.18) 1.2px, transparent 1.2px)
          `,
          backgroundSize: "24px 24px, 36px 36px, 48px 48px",
          backgroundPosition: "0 0, 12px 12px, 24px 24px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      />

      {/* Page content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}