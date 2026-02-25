import type { ElementType } from "react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { PlatformContent } from "@/lib/create-post-types"

interface PlatformPreviewCardProps {
  platformLabel: string
  platformIcon: ElementType
  content: PlatformContent
}

export function PlatformPreviewCard({
  platformLabel,
  platformIcon: Icon,
  content,
}: PlatformPreviewCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-muted/20 p-5">
      <div className="flex items-center gap-2">
        <Icon className="size-5 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">{platformLabel} Preview</span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-lg leading-snug">{content.headline}</h3>
        <p className="text-sm text-foreground/80 whitespace-pre-line leading-relaxed">{content.body}</p>

        {content.hashtags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {content.hashtags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {content.supportText && (
          <p className="text-xs text-muted-foreground italic">{content.supportText}</p>
        )}

        <div className="mt-1 rounded-lg border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-medium text-primary">
          {content.cta}
        </div>
      </div>
    </div>
  )
}
