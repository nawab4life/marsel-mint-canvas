interface PartnerLogoProps {
  name: string;
  description: string;
  logo?: string;
}

export function PartnerLogo({ name, description, logo }: PartnerLogoProps) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
      <div className="mb-4 flex h-16 w-40 items-center justify-center rounded-lg bg-muted/40 px-4">
        {logo ? (
          <img
            src={logo}
            alt={`${name} logo`}
            loading="lazy"
            width={816}
            height={816}
            className="h-12 w-full object-contain"
          />
        ) : (
          <span className="text-lg font-bold text-foreground">{name}</span>
        )}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
