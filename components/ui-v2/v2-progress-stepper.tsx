import * as React from "react"
import { cn } from "@/lib/utils"

interface V2ProgressStepperProps {
  currentStep: number
  totalSteps: number
  title: string
  description?: string
  className?: string
}

export function V2ProgressStepper({
  currentStep,
  totalSteps,
  title,
  description,
  className,
}: V2ProgressStepperProps) {
  const percent = Math.round((currentStep / totalSteps) * 100)

  return (
    <div
      data-slot="v2-progress-stepper"
      className={cn(
        "bg-white rounded-xl border border-[var(--v2-border)] shadow-sm p-6 font-[family-name:var(--font-manrope)]",
        className
      )}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-medium text-[var(--v2-text-medium)] uppercase tracking-wide">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-xs font-semibold text-[var(--v2-progress)]">
          {percent}% Complete
        </span>
      </div>

      <h2 className="text-base font-semibold text-[var(--v2-text-dark)] mb-3">{title}</h2>

      <div className="h-2 w-full rounded-full bg-[var(--v2-bg-surface)] overflow-hidden">
        <div
          className="h-full rounded-full bg-[var(--v2-progress)] transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      {description && (
        <p className="mt-3 text-sm text-[var(--v2-text-medium)]">{description}</p>
      )}
    </div>
  )
}
