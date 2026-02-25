"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { CreatePostStepIndicator } from "@/components/create-post/create-post-step-indicator"
import { StepPostType } from "@/components/create-post/steps/step-post-type"
import { StepPlatforms } from "@/components/create-post/steps/step-platforms"
import { StepDetailsListing } from "@/components/create-post/steps/step-details-listing"
import { StepDetailsTrends } from "@/components/create-post/steps/step-details-trends"
import { StepDetailsCustom } from "@/components/create-post/steps/step-details-custom"
import { StepMediaFormat } from "@/components/create-post/steps/step-media-format"
import { StepAIReview } from "@/components/create-post/steps/step-ai-review"
import { defaultFormData } from "@/lib/create-post-types"
import {
  step1Schema,
  step2Schema,
  step4Schema,
  getStep3Schema,
} from "@/lib/create-post-schemas"
import { getMockAIContent } from "@/lib/create-post-mock-data"
import type { CreatePostFormData, PostType, Platform } from "@/lib/create-post-types"

const TOTAL_STEPS = 5

export default function CreatePostPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<CreatePostFormData>(defaultFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Typed updaters
  const updatePostType = (postType: PostType) =>
    setFormData((prev) => ({ ...prev, postType }))

  const togglePlatform = (platform: Platform) =>
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }))

  const updateListing = (data: Partial<CreatePostFormData["listing"]>) =>
    setFormData((prev) => ({ ...prev, listing: { ...prev.listing, ...data } }))

  const updateTrends = (data: Partial<CreatePostFormData["trends"]>) =>
    setFormData((prev) => ({ ...prev, trends: { ...prev.trends, ...data } }))

  const updateCustomTopic = (data: Partial<CreatePostFormData["customTopic"]>) =>
    setFormData((prev) => ({ ...prev, customTopic: { ...prev.customTopic, ...data } }))

  const updateMediaFormat = (data: Partial<CreatePostFormData["mediaFormat"]>) =>
    setFormData((prev) => ({ ...prev, mediaFormat: { ...prev.mediaFormat, ...data } }))

  // Validate current step
  const validate = (): boolean => {
    let result: { success: boolean; error?: { issues: Array<{ path: (string | number)[]; message: string }> } }

    switch (currentStep) {
      case 1:
        result = step1Schema.safeParse({ postType: formData.postType })
        break
      case 2:
        result = step2Schema.safeParse({ platforms: formData.platforms })
        break
      case 3: {
        const schema = getStep3Schema(formData.postType)
        const data =
          formData.postType === "home-listing"
            ? { mode: formData.listing.mode, url: formData.listing.url, address: formData.listing.address, description: formData.listing.description }
            : formData.postType === "trends-news"
            ? formData.trends
            : { mode: formData.customTopic.mode, freeText: formData.customTopic.freeText, predefinedTopic: formData.customTopic.predefinedTopic, cta: formData.customTopic.cta }
        result = schema.safeParse(data)
        break
      }
      case 4:
        result = step4Schema.safeParse({ format: formData.mediaFormat.format })
        break
      default:
        return true
    }

    if (!result.success && result.error) {
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

    if (currentStep === 4) {
      // Generate mock AI content on step 4 → 5 transition
      const content = getMockAIContent(formData.platforms, 0)
      setFormData((prev) => ({
        ...prev,
        aiReview: { content, regenerateCount: 0 },
      }))
    }

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

  const handleRegenerate = () => {
    const nextCount = formData.aiReview.regenerateCount + 1
    const content = getMockAIContent(formData.platforms, nextCount)
    setFormData((prev) => ({
      ...prev,
      aiReview: { content, regenerateCount: nextCount },
    }))
  }

  return (
    <>
      <SiteHeader title="Create Post" />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-col gap-6 px-4 py-6 lg:px-6">
          {/* Step Indicator */}
          <div className="w-full max-w-2xl mx-auto">
            <CreatePostStepIndicator currentStep={currentStep} />
          </div>

          {/* Step Content */}
          <div className="w-full max-w-2xl mx-auto">
            {currentStep === 1 && (
              <StepPostType
                selected={formData.postType}
                onSelect={updatePostType}
                error={errors.postType}
              />
            )}
            {currentStep === 2 && (
              <StepPlatforms
                selected={formData.platforms}
                onToggle={togglePlatform}
                error={errors.platforms}
              />
            )}
            {currentStep === 3 && formData.postType === "home-listing" && (
              <StepDetailsListing
                data={formData.listing}
                onChange={updateListing}
                errors={errors}
              />
            )}
            {currentStep === 3 && formData.postType === "trends-news" && (
              <StepDetailsTrends
                data={formData.trends}
                onChange={updateTrends}
                errors={errors}
              />
            )}
            {currentStep === 3 && formData.postType === "custom-topic" && (
              <StepDetailsCustom
                data={formData.customTopic}
                onChange={updateCustomTopic}
                errors={errors}
              />
            )}
            {currentStep === 4 && (
              <StepMediaFormat
                data={formData.mediaFormat}
                onChange={updateMediaFormat}
                errors={errors}
              />
            )}
            {currentStep === 5 && (
              <StepAIReview
                platforms={formData.platforms}
                data={formData.aiReview}
                onRegenerate={handleRegenerate}
              />
            )}
          </div>

          {/* Navigation */}
          <div className="flex w-full max-w-2xl mx-auto items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Back
            </Button>
            <Button onClick={handleContinue}>
              {currentStep === TOTAL_STEPS ? "Publish Post" : "Continue"}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
