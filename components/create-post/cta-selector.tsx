import { cn } from "@/lib/utils"
import { CTA_OPTIONS } from "@/lib/create-post-constants"

interface CTASelectorProps {
  selected: string
  onSelect: (cta: string) => void
  error?: string
}

export function CTASelector({ selected, onSelect, error }: CTASelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {CTA_OPTIONS.map((cta) => (
          <button
            key={cta}
            type="button"
            aria-pressed={selected === cta}
            onClick={() => onSelect(cta)}
            className={cn(
              "rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-all cursor-pointer",
              "ring-1 ring-foreground/10 hover:bg-muted/50",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              selected === cta
                ? "ring-primary ring-2 bg-primary/5 text-primary"
                : "text-foreground"
            )}
          >
            {cta}
          </button>
        ))}
      </div>
      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  )
}
