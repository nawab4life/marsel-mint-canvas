export function MarselLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-sm">
        M
      </div>
      <span className="font-semibold tracking-tight text-foreground">
        Marsel<span className="text-primary">Tech</span>
      </span>
    </div>
  );
}
