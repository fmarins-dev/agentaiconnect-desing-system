"use client"

import { useRef } from "react"

import { cn } from "@/lib/utils"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

interface ColorPickerProps {
  value: string
  onChange: (color: string) => void
  label?: string
  className?: string
}

export function ColorPicker({ value, onChange, label, className }: ColorPickerProps) {
  const colorInputRef = useRef<HTMLInputElement>(null)

  const handleSwatchClick = () => {
    colorInputRef.current?.click()
  }

  const handleNativeColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value.replace("#", "")
    onChange(hex)
  }

  const handleHexInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9a-fA-F]/g, "").slice(0, 6)
    onChange(raw)
  }

  const displayColor = value.length === 6 ? `#${value}` : "#ffffff"

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <button
        type="button"
        onClick={handleSwatchClick}
        className="h-16 w-full rounded-lg border border-border transition-all hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        style={{ backgroundColor: displayColor }}
        aria-label={label ? `Pick ${label}` : "Pick color"}
      />

      <input
        ref={colorInputRef}
        type="color"
        value={displayColor}
        onChange={handleNativeColorChange}
        className="sr-only"
        aria-label={label ? `${label} color picker` : "Color picker"}
      />

      <InputGroup>
        <InputGroupAddon align="inline-start">#</InputGroupAddon>
        <InputGroupInput
          value={value}
          onChange={handleHexInput}
          placeholder="000000"
          maxLength={6}
          spellCheck={false}
          className="font-mono uppercase"
        />
      </InputGroup>
    </div>
  )
}
