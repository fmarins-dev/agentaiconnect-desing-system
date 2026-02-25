import * as React from "react"
import { cn } from "@/lib/utils"

interface V2FooterBarProps {
  children?: React.ReactNode
  className?: string
}

export function V2FooterBar({ children, className }: V2FooterBarProps) {
  return (
    <footer
      data-slot="v2-footer-bar"
      className={cn(
        "bg-[var(--v2-bg-surface)] border-t border-[var(--v2-border)] py-4 px-8 text-center font-[family-name:var(--font-manrope)]",
        className
      )}
    >
      <p className="text-xs text-[var(--v2-text-light)]">
        {children ?? "© 2025 Agent AI Connect. All rights reserved."}
      </p>
    </footer>
  )
}
