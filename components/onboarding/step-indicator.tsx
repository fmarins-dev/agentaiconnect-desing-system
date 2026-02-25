import { cn } from "@/lib/utils"
import { ONBOARDING_STEPS } from "@/lib/onboarding-constants"

interface StepIndicatorProps {
  currentStep: number
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full">
      {/* Desktop: numbered circles with labels */}
      <div className="hidden sm:flex items-center justify-center">
        {ONBOARDING_STEPS.map((step, index) => {
          const stepNumber = index + 1
          const isCompleted = stepNumber < currentStep
          const isCurrent = stepNumber === currentStep

          return (
            <div key={stepNumber} className="flex items-center">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={cn(
                    "flex size-8 items-center justify-center rounded-full text-sm font-medium transition-all",
                    isCompleted && "bg-primary text-primary-foreground",
                    isCurrent && "ring-primary ring-2 bg-primary/10 text-primary",
                    !isCompleted && !isCurrent && "bg-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <svg
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    stepNumber
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium",
                    isCurrent ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {step.label}
                </span>
              </div>

              {index < ONBOARDING_STEPS.length - 1 && (
                <div
                  className={cn(
                    "mb-5 mx-2 h-px w-12 transition-colors",
                    isCompleted ? "bg-primary" : "bg-border"
                  )}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile: simple "Step X of 5" */}
      <div className="flex sm:hidden flex-col items-center gap-2">
        <p className="text-sm text-muted-foreground">
          Step <span className="font-medium text-foreground">{currentStep}</span> of{" "}
          {ONBOARDING_STEPS.length}
        </p>
        <div className="flex gap-1">
          {ONBOARDING_STEPS.map((_, index) => {
            const stepNumber = index + 1
            return (
              <div
                key={stepNumber}
                className={cn(
                  "h-1 rounded-full transition-all",
                  stepNumber <= currentStep ? "bg-primary w-6" : "bg-border w-3"
                )}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
