import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlatformToggle } from "@/components/create-post/platform-toggle"
import { PLATFORM_OPTIONS } from "@/lib/create-post-constants"
import type { Platform } from "@/lib/create-post-types"

interface StepPlatformsProps {
  selected: Platform[]
  onToggle: (platform: Platform) => void
  error?: string
}

export function StepPlatforms({ selected, onToggle, error }: StepPlatformsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Where will you publish this post?</CardTitle>
        <CardDescription>Select all platforms you want to post to. You can select multiple.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {PLATFORM_OPTIONS.map((option) => (
            <PlatformToggle
              key={option.value}
              platform={option.value}
              label={option.label}
              icon={option.icon}
              selected={selected.includes(option.value)}
              onToggle={() => onToggle(option.value)}
            />
          ))}
        </div>
        {error && <p className="text-destructive text-sm">{error}</p>}
      </CardContent>
    </Card>
  )
}
