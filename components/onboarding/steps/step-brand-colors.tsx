import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field"
import { ColorPicker } from "@/components/onboarding/color-picker"
import type { OnboardingStep2Data } from "@/lib/onboarding-types"

interface StepBrandColorsProps {
  data: OnboardingStep2Data
  onChange: (data: Partial<OnboardingStep2Data>) => void
  errors: Record<string, string>
}

export function StepBrandColors({ data, onChange, errors }: StepBrandColorsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Brand Colors</CardTitle>
        <CardDescription>
          Choose the primary and secondary colors that represent your brand.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field>
              <FieldLabel>Primary Color</FieldLabel>
              <FieldDescription>
                Your main brand color, used for headings and key elements.
              </FieldDescription>
              <ColorPicker
                value={data.primaryColor}
                onChange={(color) => onChange({ primaryColor: color })}
                label="Primary Color"
              />
              {errors.primaryColor && (
                <FieldError errors={[{ message: errors.primaryColor }]} />
              )}
            </Field>

            <Field>
              <FieldLabel>Secondary Color</FieldLabel>
              <FieldDescription>
                An accent color used for highlights and supporting elements.
              </FieldDescription>
              <ColorPicker
                value={data.secondaryColor}
                onChange={(color) => onChange({ secondaryColor: color })}
                label="Secondary Color"
              />
              {errors.secondaryColor && (
                <FieldError errors={[{ message: errors.secondaryColor }]} />
              )}
            </Field>
          </div>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
