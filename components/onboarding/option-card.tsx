import type { ElementType, CSSProperties } from "react"

import { cn } from "@/lib/utils"

interface OptionCardProps {
  title: string
  icon?: ElementType
  selected: boolean
  onClick: () => void
  style?: CSSProperties
  className?: string
}

export function OptionCard({
  title,
  icon: Icon,
  selected,
  onClick,
  style,
  className,
}: OptionCardProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-pressed={selected}
      aria-checked={selected}
      onClick={onClick}
      style={style}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-4 text-sm font-medium transition-all",
        "ring-1 ring-foreground/10 hover:bg-muted/50 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        selected
          ? "ring-primary ring-2 bg-primary/5 text-primary"
          : "text-foreground",
        className
      )}
    >
      {Icon && <Icon className="size-5" />}
      <span>{title}</span>
    </button>
  )
}
