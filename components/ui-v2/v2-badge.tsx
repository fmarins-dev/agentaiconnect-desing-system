import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const v2BadgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium font-[family-name:var(--font-manrope)]",
  {
    variants: {
      variant: {
        required: "bg-[var(--v2-badge-req-bg)] text-[var(--v2-badge-req-text)]",
        optional: "bg-[var(--v2-badge-opt-bg)] text-[var(--v2-badge-opt-text)]",
      },
    },
    defaultVariants: {
      variant: "optional",
    },
  }
)

interface V2BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof v2BadgeVariants> {}

function V2Badge({ className, variant, ...props }: V2BadgeProps) {
  return (
    <span
      data-slot="v2-badge"
      className={cn(v2BadgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { V2Badge, v2BadgeVariants }
