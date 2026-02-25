"use client"

import { IconBuilding, IconUser, IconShield } from "@tabler/icons-react"
import { V2Card, V2CardHeader, V2CardTitle, V2CardContent } from "@/components/ui-v2/v2-card"
import { V2Badge } from "@/components/ui-v2/v2-badge"
import { V2UploadZone } from "@/components/ui-v2/v2-upload-zone"
import type { OnboardingStep1Data } from "@/lib/onboarding-types"

interface StepProfileV2Props {
  data: OnboardingStep1Data
  onChange: (data: Partial<OnboardingStep1Data>) => void
  errors: Record<string, string>
}

export function StepProfileV2({ data, onChange, errors }: StepProfileV2Props) {
  return (
    <div className="flex flex-col gap-4">
      {/* Brokerage Logo */}
      <V2Card>
        <V2CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[var(--v2-bg-surface)]">
                <IconBuilding className="size-5 text-[var(--v2-primary)]" />
              </div>
              <V2CardTitle>Brokerage Logo</V2CardTitle>
            </div>
            <V2Badge variant="required">Required</V2Badge>
          </div>
        </V2CardHeader>
        <V2CardContent>
          <V2UploadZone
            value={data.brokerageLogo}
            onChange={(file) => onChange({ brokerageLogo: file })}
            title="Brokerage logo"
            helperText="PNG, JPG or SVG. Max 5MB recommended."
            buttonLabel="Choose File"
          />
          {errors.brokerageLogo && (
            <p className="mt-2 text-xs text-[var(--v2-badge-req-text)] font-[family-name:var(--font-manrope)]">
              {errors.brokerageLogo}
            </p>
          )}
        </V2CardContent>
      </V2Card>

      {/* Agent Profile Photo */}
      <V2Card>
        <V2CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[var(--v2-bg-surface)]">
                <IconUser className="size-5 text-[var(--v2-primary)]" />
              </div>
              <V2CardTitle>Agent Profile Photo</V2CardTitle>
            </div>
            <V2Badge variant="optional">Optional</V2Badge>
          </div>
        </V2CardHeader>
        <V2CardContent>
          <V2UploadZone
            value={data.profilePhoto}
            onChange={(file) => onChange({ profilePhoto: file })}
            title="Agent profile photo"
            helperText="A professional headshot or portrait. PNG or JPG."
            buttonLabel="Choose File"
          />
        </V2CardContent>
      </V2Card>

      {/* Personal Agent / Team Logo */}
      <V2Card>
        <V2CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[var(--v2-bg-surface)]">
                <IconShield className="size-5 text-[var(--v2-primary)]" />
              </div>
              <V2CardTitle>Personal Agent / Team Logo</V2CardTitle>
            </div>
            <V2Badge variant="optional">Optional</V2Badge>
          </div>
        </V2CardHeader>
        <V2CardContent>
          <V2UploadZone
            value={data.agentLogo}
            onChange={(file) => onChange({ agentLogo: file })}
            title="Agent or team logo"
            helperText="Your personal agent logo, if you have one."
            buttonLabel="Choose File"
          />
        </V2CardContent>
      </V2Card>
    </div>
  )
}
