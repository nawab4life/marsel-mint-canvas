export function MarselLogo({
  className = "",
  onDark = false,
}: { className?: string; onDark?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-sm">
        M
      </div>
      <span
        className={`font-semibold tracking-tight ${
          onDark ? "text-white" : "text-foreground"
        }`}
      >
        Marsel<span className="text-primary">Tech</span>
      </span>
    </div>
  );
}
