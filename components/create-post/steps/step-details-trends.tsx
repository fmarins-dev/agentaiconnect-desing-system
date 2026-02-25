"use client"

import { useState, useEffect } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { ArticleCard } from "@/components/create-post/article-card"
import { US_STATES } from "@/lib/create-post-constants"
import { MOCK_ARTICLES } from "@/lib/create-post-mock-data"
import type { TrendsData } from "@/lib/create-post-types"

interface StepDetailsTrendsProps {
  data: TrendsData
  onChange: (data: Partial<TrendsData>) => void
  errors: Record<string, string>
}

export function StepDetailsTrends({ data, onChange, errors }: StepDetailsTrendsProps) {
  const [loading, setLoading] = useState(false)
  const [articles, setArticles] = useState<typeof MOCK_ARTICLES>([])

  useEffect(() => {
    if (!data.state) {
      setArticles([])
      return
    }
    setLoading(true)
    setArticles([])
    const timer = setTimeout(() => {
      setArticles(MOCK_ARTICLES)
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [data.state])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trends & News</CardTitle>
        <CardDescription>Select your region and choose an article to base your post on.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="trends-state">State / Region</FieldLabel>
            <Select
              value={data.state}
              onValueChange={(value) => onChange({ state: value, selectedArticleId: null })}
            >
              <SelectTrigger id="trends-state">
                <SelectValue placeholder="Select a state..." />
              </SelectTrigger>
              <SelectContent>
                {US_STATES.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.state && <FieldError>{errors.state}</FieldError>}
          </Field>
        </FieldGroup>

        {data.state && (
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium">Select an article</p>
            {loading ? (
              <div className="flex flex-col gap-3">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-28 w-full rounded-xl" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {articles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    selected={data.selectedArticleId === article.id}
                    onSelect={() => onChange({ selectedArticleId: article.id })}
                  />
                ))}
              </div>
            )}
            {errors.selectedArticleId && (
              <p className="text-destructive text-sm">{errors.selectedArticleId}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
