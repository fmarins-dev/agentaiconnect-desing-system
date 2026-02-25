"use client"

import { useRef, useState, useEffect } from "react"
import { IconUpload, IconX, IconPhoto } from "@tabler/icons-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface ImageUploadProps {
  shape?: "circle" | "rectangle"
  value: File | null
  onChange: (file: File | null) => void
  label?: string
  required?: boolean
  className?: string
}

export function ImageUpload({
  shape = "rectangle",
  value,
  onChange,
  label,
  required,
  className,
}: ImageUploadProps) {
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

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    onChange(file)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    onChange(null)
  }

  const isCircle = shape === "circle"

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={handleFileChange}
        aria-label={label}
      />

      {previewUrl ? (
        <div className="relative">
          {isCircle ? (
            <Avatar
              className="size-24 cursor-pointer"
              onClick={handleClick}
            >
              <AvatarImage src={previewUrl} alt={label ?? "Profile photo"} />
              <AvatarFallback>
                <IconPhoto className="size-8 text-muted-foreground" />
              </AvatarFallback>
            </Avatar>
          ) : (
            <div
              className="relative h-24 w-full overflow-hidden rounded-[18px] border-2 border-border cursor-pointer"
              onClick={handleClick}
            >
              <img
                src={previewUrl}
                alt={label ?? "Logo"}
                className="size-full object-contain"
              />
            </div>
          )}
          <Button
            variant="destructive"
            size="icon-xs"
            className="absolute -top-1 -right-1 z-10 rounded-full"
            onClick={handleRemove}
            aria-label="Remove image"
          >
            <IconX />
          </Button>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className={cn(
            "flex flex-col items-center justify-center gap-2 border-2 border-border rounded-[18px] transition-colors cursor-pointer",
            "hover:border-primary/50 hover:bg-primary/5",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            isCircle ? "size-24 rounded-full border-dashed" : "h-24 w-full"
          )}
        >
          <IconUpload className="size-5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground text-center px-2">
            {required ? "Upload" : "Upload (optional)"}
          </span>
        </button>
      )}

      {label && (
        <span className="text-xs text-muted-foreground text-center">{label}</span>
      )}
    </div>
  )
}
