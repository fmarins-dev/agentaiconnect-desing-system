"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlatformPreviewCard } from "@/components/create-post/platform-preview-card"
import { PLATFORM_OPTIONS } from "@/lib/create-post-constants"
import type { Platform, AIReviewData } from "@/lib/create-post-types"

const MAX_REGENERATE = 3

interface StepAIReviewProps {
  platforms: Platform[]
  data: AIReviewData
  onRegenerate: () => void
}

export function StepAIReview({ platforms, data, onRegenerate }: StepAIReviewProps) {
  const platformOptions = PLATFORM_OPTIONS.filter((p) => platforms.includes(p.value))
  const canRegenerate = data.regenerateCount < MAX_REGENERATE

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>AI-Generated Content</CardTitle>
            <CardDescription>
              Review and refine the content generated for each platform.
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onRegenerate}
            disabled={!canRegenerate}
          >
            Regenerate
            {canRegenerate && (
              <span className="ml-1.5 text-xs text-muted-foreground">
                ({MAX_REGENERATE - data.regenerateCount} left)
              </span>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {platformOptions.length === 1 ? (
          <PlatformPreviewCard
            platformLabel={platformOptions[0].label}
            platformIcon={platformOptions[0].icon}
            content={data.content[platformOptions[0].value]}
          />
        ) : (
          <Tabs defaultValue={platforms[0]}>
            <TabsList variant="line" className="mb-4">
              {platformOptions.map((p) => (
                <TabsTrigger key={p.value} value={p.value}>
                  <p.icon className="size-4" />
                  <span>{p.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {platformOptions.map((p) => (
              <TabsContent key={p.value} value={p.value}>
                <PlatformPreviewCard
                  platformLabel={p.label}
                  platformIcon={p.icon}
                  content={data.content[p.value]}
                />
              </TabsContent>
            ))}
          </Tabs>
        )}
      </CardContent>
    </Card>
  )
}
