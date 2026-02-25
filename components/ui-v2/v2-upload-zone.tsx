"use client"

import { useRef, useState, useEffect } from "react"
import { IconUpload, IconX } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

interface V2UploadZoneProps {
  value: File | null
  onChange: (file: File | null) => void
  title: string
  helperText?: string
  buttonLabel?: string
  className?: string
}

export function V2UploadZone({
  value,
  onChange,
  title,
  helperText,
  buttonLabel = "Choose File",
  className,
}: V2UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!value) {
      setPreviewUrl(null)
      return
    }
    const url = URL.createObjectURL(value)
    setPreviewUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [value])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    onChange(file)
    if (inputRef.current) inputRef.current.value = ""
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    onChange(null)
  }

  return (
    <div
      data-slot="v2-upload-zone"
      className={cn("font-[family-name:var(--font-manrope)]", className)}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={handleFileChange}
        aria-label={title}
      />

      {previewUrl ? (
        <div className="relative flex items-center gap-4 rounded-xl border-2 border-[var(--v2-border)] bg-[var(--v2-bg-surface)] p-4">
          <img
            src={previewUrl}
            alt={title}
            className="h-16 w-24 rounded-lg object-contain"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-[var(--v2-text-dark)]">{value?.name}</p>
            <p className="text-xs text-[var(--v2-text-light)]">
              {value ? `${(value.size / 1024).toFixed(1)} KB` : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="rounded-full p-1 text-[var(--v2-text-medium)] hover:bg-[var(--v2-border)] transition-colors"
            aria-label="Remove file"
          >
            <IconX className="size-4" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-[var(--v2-border)] bg-[var(--v2-bg-surface)] p-8 text-center">
          <div className="rounded-full bg-white p-3 shadow-sm">
            <IconUpload className="size-5 text-[var(--v2-text-medium)]" />
          </div>
          {helperText && (
            <p className="text-xs text-[var(--v2-text-light)]">{helperText}</p>
          )}
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="rounded-lg border border-[var(--v2-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--v2-text-dark)] shadow-sm hover:bg-[var(--v2-bg-surface)] transition-colors"
          >
            {buttonLabel}
          </button>
        </div>
      )}
    </div>
  )
}
