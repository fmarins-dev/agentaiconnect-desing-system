import { cn } from "@/lib/utils"
import { PREDEFINED_TOPICS } from "@/lib/create-post-constants"
import type { CustomTopicMode } from "@/lib/create-post-types"

interface TopicSelectorProps {
  mode: CustomTopicMode
  selectedTopic: string
  onSelect: (topic: string) => void
}

export function TopicSelector({ mode, selectedTopic, onSelect }: TopicSelectorProps) {
  if (mode !== "predefined") return null

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {PREDEFINED_TOPICS.map((topic) => (
        <button
          key={topic}
          type="button"
          aria-pressed={selectedTopic === topic}
          onClick={() => onSelect(topic)}
          className={cn(
            "rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-all cursor-pointer",
            "ring-1 ring-foreground/10 hover:bg-muted/50",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            selectedTopic === topic
              ? "ring-primary ring-2 bg-primary/5 text-primary"
              : "text-foreground"
          )}
        >
          {topic}
        </button>
      ))}
    </div>
  )
}
