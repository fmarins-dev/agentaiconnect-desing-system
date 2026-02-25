"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { StepIndicator } from "@/components/onboarding/step-indicator"
import { StepProfile } from "@/components/onboarding/steps/step-profile"
import { StepBrandColors } from "@/components/onboarding/steps/step-brand-colors"
import { StepVoiceTone } from "@/components/onboarding/steps/step-voice-tone"
import { StepFont } from "@/components/onboarding/steps/step-font"
import { StepCompliance } from "@/components/onboarding/steps/step-compliance"
import { defaultFormData } from "@/lib/onboarding-types"
import { schemas } from "@/lib/onboarding-schemas"
import type { OnboardingFormData } from "@/lib/onboarding-types"

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

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<OnboardingFormData>(defaultFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})

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

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-10">
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
          {currentStep === TOTAL_STEPS ? "Complete Setup" : "Continue"}
        </Button>
      </div>
    </div>
  )
}
