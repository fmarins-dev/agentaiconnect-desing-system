import * as React from "react"
import { cn } from "@/lib/utils"

function V2Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="v2-card"
      className={cn(
        "bg-white rounded-xl border border-[var(--v2-border)] shadow-sm p-8 font-[family-name:var(--font-manrope)]",
        className
      )}
      {...props}
    />
  )
}

function V2CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="v2-card-header"
      className={cn("flex flex-col gap-1 mb-6", className)}
      {...props}
    />
  )
}

function V2CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="v2-card-title"
      className={cn("text-lg font-semibold text-[var(--v2-text-dark)]", className)}
      {...props}
    />
  )
}

function V2CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="v2-card-description"
      className={cn("text-sm text-[var(--v2-text-medium)]", className)}
      {...props}
    />
  )
}

function V2CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="v2-card-content"
      className={cn("", className)}
      {...props}
    />
  )
}

export { V2Card, V2CardHeader, V2CardTitle, V2CardDescription, V2CardContent }
