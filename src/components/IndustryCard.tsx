import { type LucideIcon } from "lucide-react";

interface IndustryCardProps {
  title: string;
  description: string;
  solutions: string[];
  icon: LucideIcon;
}

export function IndustryCard({ title, description, solutions, icon: Icon }: IndustryCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-muted-foreground leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {solutions.map((solution) => (
          <span
            key={solution}
            className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
          >
            {solution}
          </span>
        ))}
      </div>
    </div>
  );
}
