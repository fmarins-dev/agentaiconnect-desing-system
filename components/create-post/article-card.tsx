import { cn } from "@/lib/utils"
import type { MockArticle } from "@/lib/create-post-mock-data"

interface ArticleCardProps {
  article: MockArticle
  selected: boolean
  onSelect: () => void
}

export function ArticleCard({ article, selected, onSelect }: ArticleCardProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-pressed={selected}
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "flex flex-col items-start gap-2 rounded-xl p-4 text-left transition-all cursor-pointer w-full",
        "ring-1 ring-foreground/10 hover:bg-muted/50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        selected
          ? "ring-primary ring-2 bg-primary/5"
          : "bg-card"
      )}
    >
      <div className="flex items-start justify-between gap-2 w-full">
        <span className={cn("font-semibold text-sm leading-snug", selected ? "text-primary" : "text-foreground")}>
          {article.title}
        </span>
        {selected && (
          <span className="shrink-0 flex size-5 items-center justify-center rounded-full bg-primary">
            <svg className="size-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="font-medium">{article.source}</span>
        <span>·</span>
        <span>{new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{article.summary}</p>
    </button>
  )
}
