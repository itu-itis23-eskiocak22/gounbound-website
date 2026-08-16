import Image from "next/image";

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
    small: { icon: "h-8 w-auto", text: "text-2xl" },
    default: { icon: "h-10 w-auto", text: "text-3xl" },
    large: { icon: "h-12 w-auto", text: "text-4xl" },
  };

  const colors = {
    forest: "text-forest",
    white: "text-white",
  };

  const s = sizes[size];
  const c = colors[color];

  return (
    <div className="flex items-center gap-3 cursor-pointer" aria-label="UNBOUND Home">
      <img
        src="/logo.png"
        alt="UNBOUND Logo"
        className={`${s.icon} rounded-sm`}
      />
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
