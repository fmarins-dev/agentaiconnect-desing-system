import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MediaUploadGrid } from "@/components/create-post/media-upload-grid"
import { FormatSelector } from "@/components/create-post/format-selector"
import type { MediaFormatData, PostFormat } from "@/lib/create-post-types"

interface StepMediaFormatProps {
  data: MediaFormatData
  onChange: (data: Partial<MediaFormatData>) => void
  errors: Record<string, string>
}

export function StepMediaFormat({ data, onChange, errors }: StepMediaFormatProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Media & Format</CardTitle>
        <CardDescription>Upload images and choose how your post will be presented.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">Images (optional)</p>
          <MediaUploadGrid
            files={data.images}
            onChange={(images) => onChange({ images })}
            maxFiles={15}
          />
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium">Post Format</p>
          <FormatSelector
            selected={data.format}
            onSelect={(format: PostFormat) => onChange({ format })}
          />
          {errors.format && <p className="text-destructive text-sm">{errors.format}</p>}
        </div>

        {data.format === "carousel" && (
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="carousel-count">Number of Slides</FieldLabel>
              <Select
                value={String(data.carouselCount)}
                onValueChange={(v) => onChange({ carouselCount: Number(v) })}
              >
                <SelectTrigger id="carousel-count" className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[2, 3, 4, 5].map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n} slides
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
        )}
      </CardContent>
    </Card>
  )
}
