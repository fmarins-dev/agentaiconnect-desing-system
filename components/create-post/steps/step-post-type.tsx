import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PostTypeCard } from "@/components/create-post/post-type-card"
import { POST_TYPE_OPTIONS } from "@/lib/create-post-constants"
import type { PostType } from "@/lib/create-post-types"

interface StepPostTypeProps {
  selected: PostType | null
  onSelect: (type: PostType) => void
  error?: string
}

export function StepPostType({ selected, onSelect, error }: StepPostTypeProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>What type of post do you want to create?</CardTitle>
        <CardDescription>Choose the content format that best fits your goal.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {POST_TYPE_OPTIONS.map((option) => (
            <PostTypeCard
              key={option.value}
              title={option.title}
              description={option.description}
              icon={option.icon}
              selected={selected === option.value}
              onClick={() => onSelect(option.value)}
            />
          ))}
        </div>
        {error && <p className="text-destructive text-sm">{error}</p>}
      </CardContent>
    </Card>
  )
}
