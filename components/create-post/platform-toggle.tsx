import type { ElementType } from "react"

import { cn } from "@/lib/utils"
import type { Platform } from "@/lib/create-post-types"

interface PlatformToggleProps {
  platform: Platform
  label: string
  icon: ElementType
  selected: boolean
  onToggle: () => void
}

export function PlatformToggle({
  label,
  icon: Icon,
  selected,
  onToggle,
}: PlatformToggleProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onToggle}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-xl px-3 py-4 text-sm font-medium transition-all cursor-pointer",
        "ring-1 ring-foreground/10 hover:bg-muted/50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        selected
          ? "ring-primary ring-2 bg-primary/5 text-primary"
          : "text-foreground"
      )}
    >
      <Icon className="size-6" />
      <span>{label}</span>
    </button>
  )
}
