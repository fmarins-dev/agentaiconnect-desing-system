import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { ListingManualForm } from "@/components/create-post/listing-manual-form"
import { cn } from "@/lib/utils"
import type { ListingData, ListingInputMode } from "@/lib/create-post-types"

interface StepDetailsListingProps {
  data: ListingData
  onChange: (data: Partial<ListingData>) => void
  errors: Record<string, string>
}

export function StepDetailsListing({ data, onChange, errors }: StepDetailsListingProps) {
  const setMode = (mode: ListingInputMode) => onChange({ mode })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Details</CardTitle>
        <CardDescription>Provide the listing information to generate your post.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {/* Mode toggle */}
        <div className="flex rounded-lg border border-border p-1 gap-1 w-fit">
          {(["url", "manual"] as ListingInputMode[]).map((mode) => (
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
              {mode === "url" ? "Paste URL" : "Enter Manually"}
            </button>
          ))}
        </div>

        {data.mode === "url" ? (
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="listing-url">Zillow / MLS URL</FieldLabel>
              <Input
                id="listing-url"
                type="url"
                placeholder="https://www.zillow.com/homedetails/..."
                value={data.url}
                onChange={(e) => onChange({ url: e.target.value })}
              />
              {errors.url && <FieldError>{errors.url}</FieldError>}
            </Field>
          </FieldGroup>
        ) : (
          <ListingManualForm data={data} onChange={onChange} errors={errors} />
        )}
      </CardContent>
    </Card>
  )
}
