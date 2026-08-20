interface PartnerLogoProps {
  name: string;
  description: string;
}

export function PartnerLogo({ name, description }: PartnerLogoProps) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
      <div className="mb-4 flex h-16 w-32 items-center justify-center rounded-lg bg-muted/50 px-4">
        <span className="text-lg font-bold text-foreground">{name}</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
