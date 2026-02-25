"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { StepIndicator } from "@/components/onboarding/step-indicator"
import { StepProfile } from "@/components/onboarding/steps/step-profile"
import { StepProfileV2 } from "@/components/onboarding/steps/step-profile-v2"
import { StepBrandColors } from "@/components/onboarding/steps/step-brand-colors"
import { StepVoiceTone } from "@/components/onboarding/steps/step-voice-tone"
import { StepFont } from "@/components/onboarding/steps/step-font"
import { StepCompliance } from "@/components/onboarding/steps/step-compliance"
import { defaultFormData } from "@/lib/onboarding-types"
import { schemas } from "@/lib/onboarding-schemas"
import type { OnboardingFormData } from "@/lib/onboarding-types"
import { V2NavHeader } from "@/components/ui-v2/v2-nav-header"
import { V2ProgressStepper } from "@/components/ui-v2/v2-progress-stepper"
import { V2FooterBar } from "@/components/ui-v2/v2-footer-bar"

const TOTAL_STEPS = 5

function getStepData(step: number, formData: OnboardingFormData) {
  switch (step) {
    case 1: return formData.step1
    case 2: return formData.step2
    case 3: return formData.step3
    case 4: return formData.step4
    case 5: return formData.step5
    default: return {}
  }
}

function FloatingViewToggle({
  viewMode,
  onChange,
}: {
  viewMode: "v1" | "v2"
  onChange: (mode: "v1" | "v2") => void
}) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="rounded-xl border border-border bg-white/90 shadow-lg backdrop-blur-sm px-1 py-1">
        <ToggleGroup
          value={[viewMode]}
          onValueChange={(vals: string[]) => {
            if (vals.length > 0) onChange(vals[0] as "v1" | "v2")
          }}
          variant="outline"
        >
          <ToggleGroupItem value="v1">Claude Code</ToggleGroupItem>
          <ToggleGroupItem value="v2">Google Stitch</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<OnboardingFormData>(defaultFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [viewMode, setViewMode] = useState<"v1" | "v2">("v1")

  const updateStep1 = (data: Partial<OnboardingFormData["step1"]>) =>
    setFormData((prev) => ({ ...prev, step1: { ...prev.step1, ...data } }))

  const updateStep2 = (data: Partial<OnboardingFormData["step2"]>) =>
    setFormData((prev) => ({ ...prev, step2: { ...prev.step2, ...data } }))

  const updateStep3 = (data: Partial<OnboardingFormData["step3"]>) =>
    setFormData((prev) => ({ ...prev, step3: { ...prev.step3, ...data } }))

  const updateStep4 = (data: Partial<OnboardingFormData["step4"]>) =>
    setFormData((prev) => ({ ...prev, step4: { ...prev.step4, ...data } }))

  const updateStep5 = (data: Partial<OnboardingFormData["step5"]>) =>
    setFormData((prev) => ({ ...prev, step5: { ...prev.step5, ...data } }))

  const validate = (): boolean => {
    const schema = schemas[currentStep - 1]
    const stepData = getStepData(currentStep, formData)
    const result = schema.safeParse(stepData)

    if (!result.success) {
      const newErrors: Record<string, string> = {}
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string
        if (field && !newErrors[field]) {
          newErrors[field] = issue.message
        }
      })
      setErrors(newErrors)
      return false
    }

    setErrors({})
    return true
  }

  const handleContinue = () => {
    if (!validate()) return
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1)
    } else {
      router.push("/dashboard")
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setErrors({})
      setCurrentStep((prev) => prev - 1)
    }
  }

  const isLastStep = currentStep === TOTAL_STEPS

  // V2 view — only for step 1
  if (currentStep === 1 && viewMode === "v2") {
    return (
      <div className="flex min-h-screen flex-col bg-[var(--v2-bg-page)] pb-24">
        <V2NavHeader />

        <div className="flex flex-1 flex-col items-center px-4 py-8">
          {/* Progress Stepper */}
          <div className="mb-6 w-full max-w-2xl">
            <V2ProgressStepper
              currentStep={1}
              totalSteps={TOTAL_STEPS}
              title="Profile Setup"
              description="Upload your photo and logos so your AI agent can represent your brand visually."
            />
          </div>

          {/* Step Content */}
          <div className="w-full max-w-2xl">
            <StepProfileV2 data={formData.step1} onChange={updateStep1} errors={errors} />
          </div>

          {/* Navigation */}
          <div className="mt-6 flex w-full max-w-2xl items-center justify-between font-[family-name:var(--font-manrope)]">
            <button
              type="button"
              disabled
              className="rounded-lg px-5 py-2.5 text-sm font-medium text-[var(--v2-text-medium)] opacity-40 cursor-not-allowed"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleContinue}
              className="rounded-lg bg-[var(--v2-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--v2-primary-fg)] hover:opacity-90 transition-opacity"
            >
              Continue
            </button>
          </div>
        </div>

        <V2FooterBar />

        <FloatingViewToggle viewMode={viewMode} onChange={setViewMode} />
      </div>
    )
  }

  // V1 view (default)
  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-10 pb-24">
      {/* Header */}
      <div className="mb-8 flex flex-col items-center gap-2">
        <Image src="/logo.png" alt="Agent AI Connect" width={180} height={48} className="h-10 w-auto object-contain" priority />
        <p className="text-muted-foreground text-sm">
          Let&apos;s set up your brand in just a few steps
        </p>
      </div>

      {/* Step Indicator */}
      <div className="mb-8 w-full max-w-2xl">
        <StepIndicator currentStep={currentStep} />
      </div>

      {/* Step Content */}
      <div className="w-full max-w-2xl">
        {currentStep === 1 && (
          <StepProfile data={formData.step1} onChange={updateStep1} errors={errors} />
        )}
        {currentStep === 2 && (
          <StepBrandColors data={formData.step2} onChange={updateStep2} errors={errors} />
        )}
        {currentStep === 3 && (
          <StepVoiceTone data={formData.step3} onChange={updateStep3} errors={errors} />
        )}
        {currentStep === 4 && (
          <StepFont data={formData.step4} onChange={updateStep4} errors={errors} />
        )}
        {currentStep === 5 && (
          <StepCompliance data={formData.step5} onChange={updateStep5} errors={errors} />
        )}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex w-full max-w-2xl items-center justify-between">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentStep === 1}
        >
          Back
        </Button>

        <Button onClick={handleContinue}>
          {isLastStep ? "Complete Setup" : "Continue"}
        </Button>
      </div>

      {currentStep === 1 && (
        <FloatingViewToggle viewMode={viewMode} onChange={setViewMode} />
      )}
    </div>
  )
}
