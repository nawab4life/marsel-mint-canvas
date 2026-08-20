import { type LucideIcon } from "lucide-react";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export function ProcessStep({
  step,
  title,
  description,
  icon: Icon,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative flex gap-4">
      {!isLast && (
        <div className="absolute left-6 top-14 h-full w-px bg-border" aria-hidden="true" />
      )}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <div className="pb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Step {step}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
