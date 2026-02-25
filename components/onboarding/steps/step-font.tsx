"use client"

import { useEffect } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { FieldError } from "@/components/ui/field"
import { OptionCard } from "@/components/onboarding/option-card"
import { fontOptions } from "@/lib/onboarding-constants"
import type { OnboardingStep4Data } from "@/lib/onboarding-types"

interface StepFontProps {
  data: OnboardingStep4Data
  onChange: (data: Partial<OnboardingStep4Data>) => void
  errors: Record<string, string>
}

export function StepFont({ data, onChange, errors }: StepFontProps) {
  useEffect(() => {
    const families = fontOptions.map((f) => f.googleFont).join("&family=")
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = `https://fonts.googleapis.com/css2?family=${families}&display=swap`
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Font Selection</CardTitle>
        <CardDescription>
          Choose a font that reflects your brand personality. Each option is shown in its own style.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          role="radiogroup"
          aria-label="Font options"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {fontOptions.map((font) => (
            <OptionCard
              key={font.id}
              title={font.label}
              selected={data.font === font.id}
              onClick={() => onChange({ font: font.id })}
              style={{ fontFamily: `'${font.label}', sans-serif` }}
            />
          ))}
        </div>
        {errors.font && (
          <div className="mt-3">
            <FieldError errors={[{ message: errors.font }]} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
