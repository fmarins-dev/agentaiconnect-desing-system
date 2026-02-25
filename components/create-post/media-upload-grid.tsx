"use client"

import { useRef } from "react"
import { IconUpload, IconX } from "@tabler/icons-react"

import { cn } from "@/lib/utils"

interface MediaUploadGridProps {
  files: File[]
  onChange: (files: File[]) => void
  maxFiles?: number
}

export function MediaUploadGrid({ files, onChange, maxFiles = 15 }: MediaUploadGridProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files ?? [])
    const combined = [...files, ...newFiles].slice(0, maxFiles)
    onChange(combined)
    if (inputRef.current) inputRef.current.value = ""
  }

  const removeFile = (index: number) => {
    onChange(files.filter((_, i) => i !== index))
  }

  return (
    <div className="flex flex-col gap-3">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="sr-only"
        onChange={handleFilesChange}
      />

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
        {files.map((file, i) => (
          <div
            key={i}
            className="relative aspect-square rounded-lg overflow-hidden border border-border bg-muted"
          >
            <img
              src={URL.createObjectURL(file)}
              alt={`Image ${i + 1}`}
              className="size-full object-cover"
            />
            <button
              type="button"
              onClick={() => removeFile(i)}
              className="absolute top-1 right-1 flex size-5 items-center justify-center rounded-full bg-destructive text-destructive-foreground hover:opacity-90"
              aria-label="Remove image"
            >
              <IconX className="size-3" />
            </button>
          </div>
        ))}

        {files.length < maxFiles && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className={cn(
              "flex aspect-square flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-border",
              "hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer text-muted-foreground"
            )}
          >
            <IconUpload className="size-5" />
            <span className="text-xs">Add</span>
          </button>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        {files.length} / {maxFiles} images added
      </p>
    </div>
  )
}
