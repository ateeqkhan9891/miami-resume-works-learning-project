import Logo from "@/components/navigation/Logo";

export default function AuthHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
        <Logo />
      </div>
    </header>
  );
}