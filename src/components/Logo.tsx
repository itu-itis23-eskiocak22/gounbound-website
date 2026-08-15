export function Logo({
  size = "default",
  color = "forest",
  showText = true,
}: {
  size?: "small" | "default" | "large";
  color?: "forest" | "white";
  showText?: boolean;
}) {
  const sizes = {
    small: { icon: "w-6 h-6", text: "text-lg" },
    default: { icon: "w-8 h-8", text: "text-xl" },
    large: { icon: "w-10 h-10", text: "text-2xl" },
  };

  const colors = {
    forest: "text-forest",
    white: "text-white",
  };

  const s = sizes[size];
  const c = colors[color];

  return (
    <div className="flex items-center gap-2.5 cursor-pointer" aria-label="UNBOUND Home">
      <svg
        viewBox="0 0 100 100"
        className={`${s.icon} ${c}`}
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Left vertical form */}
        <path d="M 15 10 L 50 10 L 50 20 L 32 20 L 32 80 L 50 80 L 50 90 L 15 90 Z" />
        {/* Right vertical form */}
        <path d="M 85 10 L 50 10 L 50 20 L 68 20 L 68 80 L 50 80 L 50 90 L 85 90 Z" />
        {/* Central compass diamond */}
        <path d="M 50 28 L 58 50 L 50 72 L 42 50 Z" opacity="0.9" />
      </svg>
      {showText && (
        <span
          className={`font-bold ${s.text} tracking-[0.18em] ${c} mt-0.5`}
          style={{ fontFamily: "var(--font-commissioner)" }}
        >
          UNBOUND
        </span>
      )}
    </div>
  );
}
