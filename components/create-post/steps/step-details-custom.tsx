import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import { TopicSelector } from "@/components/create-post/topic-selector"
import { CTASelector } from "@/components/create-post/cta-selector"
import { cn } from "@/lib/utils"
import type { CustomTopicData, CustomTopicMode } from "@/lib/create-post-types"

interface StepDetailsCustomProps {
  data: CustomTopicData
  onChange: (data: Partial<CustomTopicData>) => void
  errors: Record<string, string>
}

export function StepDetailsCustom({ data, onChange, errors }: StepDetailsCustomProps) {
  const setMode = (mode: CustomTopicMode) => onChange({ mode })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Custom Topic</CardTitle>
        <CardDescription>Write your own topic or pick from our suggestions.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {/* Mode toggle */}
        <div className="flex rounded-lg border border-border p-1 gap-1 w-fit">
          {(["free", "predefined"] as CustomTopicMode[]).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setMode(mode)}
              className={cn(
                "rounded-md px-4 py-1.5 text-sm font-medium transition-all",
                data.mode === mode
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {mode === "free" ? "Write Your Own" : "Choose a Topic"}
            </button>
          ))}
        </div>

        {data.mode === "free" ? (
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="custom-free-text">Your Topic</FieldLabel>
              <div className="relative">
                <Textarea
                  id="custom-free-text"
                  placeholder="Describe what you want to write about..."
                  rows={5}
                  maxLength={500}
                  value={data.freeText}
                  onChange={(e) => onChange({ freeText: e.target.value })}
                />
                <span className="absolute bottom-2 right-3 text-xs text-muted-foreground">
                  {data.freeText.length}/500
                </span>
              </div>
              {errors.freeText && <FieldError>{errors.freeText}</FieldError>}
            </Field>
          </FieldGroup>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Choose a Topic</p>
            <TopicSelector
              mode={data.mode}
              selectedTopic={data.predefinedTopic}
              onSelect={(topic) => onChange({ predefinedTopic: topic })}
            />
            {errors.predefinedTopic && (
              <p className="text-destructive text-sm">{errors.predefinedTopic}</p>
            )}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">Call to Action</p>
          <CTASelector
            selected={data.cta}
            onSelect={(cta) => onChange({ cta })}
            error={errors.cta}
          />
        </div>
      </CardContent>
    </Card>
  )
}
