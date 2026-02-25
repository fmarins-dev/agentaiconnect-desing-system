import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel, FieldDescription, FieldError, FieldContent } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Checkbox } from "@/components/ui/checkbox"
import { IconWorld } from "@tabler/icons-react"
import type { OnboardingStep5Data } from "@/lib/onboarding-types"

interface StepComplianceProps {
  data: OnboardingStep5Data
  onChange: (data: Partial<OnboardingStep5Data>) => void
  errors: Record<string, string>
}

export function StepCompliance({ data, onChange, errors }: StepComplianceProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Compliance & Legal</CardTitle>
        <CardDescription>
          Add any required legal disclaimers and contact information for your AI agent.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel>Brokerage Compliance Disclaimer</FieldLabel>
            <FieldDescription>
              Legal disclaimer text that will appear in your agent&apos;s communications.
            </FieldDescription>
            <Textarea
              value={data.complianceDisclaimer}
              onChange={(e) => onChange({ complianceDisclaimer: e.target.value })}
              placeholder="e.g. Licensed Real Estate Agent. All information deemed reliable but not guaranteed..."
              rows={4}
            />
            {errors.complianceDisclaimer && (
              <FieldError errors={[{ message: errors.complianceDisclaimer }]} />
            )}
          </Field>

          <Field>
            <FieldLabel>Website</FieldLabel>
            <FieldDescription>Your professional website URL.</FieldDescription>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <IconWorld className="size-4" />
              </InputGroupAddon>
              <InputGroupInput
                type="url"
                value={data.website}
                onChange={(e) => onChange({ website: e.target.value })}
                placeholder="https://yourwebsite.com"
              />
            </InputGroup>
            {errors.website && (
              <FieldError errors={[{ message: errors.website }]} />
            )}
          </Field>

          <Field orientation="horizontal">
            <Checkbox
              id="display-license"
              checked={data.displayLicenseNumber}
              onCheckedChange={(checked) =>
                onChange({ displayLicenseNumber: checked === true })
              }
            />
            <FieldContent>
              <FieldLabel htmlFor="display-license">Display License Number</FieldLabel>
              <FieldDescription>
                Show your real estate license number in agent communications.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
