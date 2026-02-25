import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field"
import { ImageUpload } from "@/components/onboarding/image-upload"
import type { OnboardingStep1Data } from "@/lib/onboarding-types"

interface StepProfileProps {
  data: OnboardingStep1Data
  onChange: (data: Partial<OnboardingStep1Data>) => void
  errors: Record<string, string>
}

export function StepProfile({ data, onChange, errors }: StepProfileProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Setup</CardTitle>
        <CardDescription>
          Upload your photo and logos so your AI agent can represent your brand visually.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel>
              Agent Profile Photo <span className="text-destructive ml-0.5">*</span>
            </FieldLabel>
            <FieldDescription>
              A professional headshot or portrait used to represent you.
            </FieldDescription>
            <div className="pt-2 w-full">
              <ImageUpload
                value={data.profilePhoto}
                onChange={(file) => onChange({ profilePhoto: file })}
                label="Profile photo"
                required
                className="w-full"
              />
            </div>
            {errors.profilePhoto && (
              <FieldError errors={[{ message: errors.profilePhoto }]} />
            )}
          </Field>

          <Field>
            <FieldLabel>
              Brokerage Logo <span className="text-destructive ml-0.5">*</span>
            </FieldLabel>
            <FieldDescription>
              Your brokerage&apos;s official logo for brand consistency.
            </FieldDescription>
            <div className="pt-2 w-full">
              <ImageUpload
                value={data.brokerageLogo}
                onChange={(file) => onChange({ brokerageLogo: file })}
                label="Brokerage logo"
                required
                className="w-full"
              />
            </div>
            {errors.brokerageLogo && (
              <FieldError errors={[{ message: errors.brokerageLogo }]} />
            )}
          </Field>

          <Field>
            <FieldLabel>Agent Logo</FieldLabel>
            <FieldDescription>
              Your personal agent logo, if you have one.
            </FieldDescription>
            <div className="pt-2 w-full">
              <ImageUpload
                value={data.agentLogo}
                onChange={(file) => onChange({ agentLogo: file })}
                label="Agent logo"
                className="w-full"
              />
            </div>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
