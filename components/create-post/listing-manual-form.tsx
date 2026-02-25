"use client"

import { useRef } from "react"
import { IconUpload, IconX } from "@tabler/icons-react"

import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ListingData } from "@/lib/create-post-types"

interface ListingManualFormProps {
  data: ListingData
  onChange: (data: Partial<ListingData>) => void
  errors: Record<string, string>
}

export function ListingManualForm({ data, onChange, errors }: ListingManualFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? [])
    const combined = [...data.photos, ...files].slice(0, 15)
    onChange({ photos: combined })
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  const removePhoto = (index: number) => {
    const updated = data.photos.filter((_, i) => i !== index)
    onChange({ photos: updated })
  }

  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="listing-address">Address</FieldLabel>
        <Input
          id="listing-address"
          placeholder="123 Main St, Miami, FL 33101"
          value={data.address}
          onChange={(e) => onChange({ address: e.target.value })}
        />
        {errors.address && <FieldError>{errors.address}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="listing-description">Property Description</FieldLabel>
        <Textarea
          id="listing-description"
          placeholder="Describe the property: bedrooms, bathrooms, highlights, neighborhood..."
          rows={4}
          value={data.description}
          onChange={(e) => onChange({ description: e.target.value })}
        />
        {errors.description && <FieldError>{errors.description}</FieldError>}
      </Field>

      <Field>
        <FieldLabel>Photos (optional, max 15)</FieldLabel>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          onChange={handleFilesChange}
        />
        <div className="flex flex-wrap gap-2">
          {data.photos.map((file, i) => (
            <div key={i} className="relative size-20 rounded-lg overflow-hidden border border-border">
              <img
                src={URL.createObjectURL(file)}
                alt={`Photo ${i + 1}`}
                className="size-full object-cover"
              />
              <button
                type="button"
                onClick={() => removePhoto(i)}
                className="absolute top-0.5 right-0.5 flex size-5 items-center justify-center rounded-full bg-destructive text-destructive-foreground hover:opacity-90"
                aria-label="Remove photo"
              >
                <IconX className="size-3" />
              </button>
            </div>
          ))}
          {data.photos.length < 15 && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className={cn(
                "flex size-20 flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-border",
                "hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer text-muted-foreground"
              )}
            >
              <IconUpload className="size-4" />
              <span className="text-xs">Add</span>
            </button>
          )}
        </div>
      </Field>
    </FieldGroup>
  )
}
