import { cn } from "@/lib/utils"
import { FORMAT_OPTIONS } from "@/lib/create-post-constants"
import type { PostFormat } from "@/lib/create-post-types"

interface FormatSelectorProps {
  selected: PostFormat
  onSelect: (format: PostFormat) => void
}

export function FormatSelector({ selected, onSelect }: FormatSelectorProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {FORMAT_OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-pressed={selected === option.value}
          aria-checked={selected === option.value}
          onClick={() => onSelect(option.value)}
          className={cn(
            "flex flex-col items-center justify-center gap-2 rounded-xl px-4 py-5 text-sm transition-all cursor-pointer",
            "ring-1 ring-foreground/10 hover:bg-muted/50",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            selected === option.value
              ? "ring-primary ring-2 bg-primary/5 text-primary"
              : "text-foreground"
          )}
        >
          <span className="font-semibold">{option.title}</span>
          <span
            className={cn(
              "text-xs text-center",
              selected === option.value ? "text-primary/80" : "text-muted-foreground"
            )}
          >
            {option.description}
          </span>
        </button>
      ))}
    </div>
  )
}
