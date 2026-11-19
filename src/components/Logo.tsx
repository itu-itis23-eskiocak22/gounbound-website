/** Unbound işareti (uygulamadaki assets/brand/logo-mark.png ile aynı biçim), renk currentColor'dan gelir. */
export function LogoMark({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 66" className={className} fill="currentColor" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2 H49 L31 25 V64 H13 Z" />
      <path d="M69 2 H88 V64 H48 L69 39 Z" />
    </svg>
  );
}

export function Logo({
  size = "default",
  color = "forest",
  showText = true,
}: {
  size?: "small" | "default" | "large";
  color?: "forest" | "white";
  showText?: boolean;
}) {
  const s = {
    small: { icon: "h-6 w-auto", text: "text-lg" },
    default: { icon: "h-7 w-auto", text: "text-xl" },
    large: { icon: "h-10 w-auto", text: "text-3xl" },
  }[size];
  return (
    <span className={`flex items-center gap-2.5 ${color === "white" ? "text-paper" : "text-ink"}`} aria-label="Unbound">
      <LogoMark className={s.icon} />
      {showText && <span className={`font-bold ${s.text} tracking-[0.22em]`}>UNBOUND</span>}
    </span>
  );
}
