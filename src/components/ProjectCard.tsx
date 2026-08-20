import { Building2, type LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  sector: string;
  scope: string;
  icon?: LucideIcon;
}

export function ProjectCard({ title, sector, scope, icon: Icon = Building2 }: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{sector}</p>
      <h3 className="mt-1 text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{scope}</p>
    </div>
  );
}
