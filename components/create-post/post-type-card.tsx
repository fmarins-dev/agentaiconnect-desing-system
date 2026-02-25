import type { ElementType } from "react"

import { cn } from "@/lib/utils"

interface PostTypeCardProps {
  title: string
  description: string
  icon: ElementType
  selected: boolean
  onClick: () => void
}

export function PostTypeCard({
  title,
  description,
  icon: Icon,
  selected,
  onClick,
}: PostTypeCardProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-pressed={selected}
      aria-checked={selected}
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-xl px-4 py-6 text-sm transition-all cursor-pointer",
        "ring-1 ring-foreground/10 hover:bg-muted/50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        selected
          ? "ring-primary ring-2 bg-primary/5 text-primary"
          : "text-foreground"
      )}
    >
      <Icon className="size-8" />
      <div className="flex flex-col items-center gap-1">
        <span className="font-semibold text-base">{title}</span>
        <span
          className={cn(
            "text-xs text-center leading-relaxed",
            selected ? "text-primary/80" : "text-muted-foreground"
          )}
        >
          {description}
        </span>
      </div>
    </button>
  )
}
