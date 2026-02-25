import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { FieldError } from "@/components/ui/field"
import { OptionCard } from "@/components/onboarding/option-card"
import { voiceToneOptions } from "@/lib/onboarding-constants"
import type { OnboardingStep3Data } from "@/lib/onboarding-types"

interface StepVoiceToneProps {
  data: OnboardingStep3Data
  onChange: (data: Partial<OnboardingStep3Data>) => void
  errors: Record<string, string>
}

export function StepVoiceTone({ data, onChange, errors }: StepVoiceToneProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Brand Voice & Tone</CardTitle>
        <CardDescription>
          Select the communication style that best represents how you engage with clients.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          role="radiogroup"
          aria-label="Voice and tone options"
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {voiceToneOptions.map((option) => (
            <OptionCard
              key={option.id}
              title={option.title}
              icon={option.icon}
              selected={data.voiceTone === option.id}
              onClick={() => onChange({ voiceTone: option.id })}
            />
          ))}
        </div>
        {errors.voiceTone && (
          <div className="mt-3">
            <FieldError errors={[{ message: errors.voiceTone }]} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
