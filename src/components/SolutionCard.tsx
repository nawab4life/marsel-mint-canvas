import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface SolutionCardProps {
  to: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function SolutionCard({ to, title, description, icon: Icon }: SolutionCardProps) {
  return (
    <Link
      to={to}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-muted-foreground leading-relaxed">{description}</p>
      <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">
        Explore {title.split(" ")[0]}
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
