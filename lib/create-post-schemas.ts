import { z } from "zod"
import type { PostType } from "./create-post-types"

export const step1Schema = z.object({
  postType: z.string({ required_error: "Please select a post type" }).min(1, "Please select a post type"),
})

export const step2Schema = z.object({
  platforms: z.array(z.string()).min(1, "Please select at least one platform"),
})

export const step3ListingSchema = z.discriminatedUnion("mode", [
  z.object({
    mode: z.literal("url"),
    url: z.string().min(1, "Please enter a property URL"),
  }),
  z.object({
    mode: z.literal("manual"),
    address: z.string().min(1, "Address is required"),
    description: z.string().min(10, "Description must be at least 10 characters"),
  }),
])

export const step3TrendsSchema = z.object({
  state: z.string().min(1, "Please select a state"),
  selectedArticleId: z.string({ required_error: "Please select an article" }).min(1, "Please select an article"),
})

export const step3CustomSchema = z.discriminatedUnion("mode", [
  z.object({
    mode: z.literal("free"),
    freeText: z.string().min(5, "Please enter at least 5 characters").max(500, "Maximum 500 characters"),
    cta: z.string().min(1, "Please select a CTA"),
  }),
  z.object({
    mode: z.literal("predefined"),
    predefinedTopic: z.string().min(1, "Please select a topic"),
    cta: z.string().min(1, "Please select a CTA"),
  }),
])

export const step4Schema = z.object({
  format: z.string().min(1, "Please select a format"),
})

export function getStep3Schema(postType: PostType | null) {
  switch (postType) {
    case "home-listing":
      return step3ListingSchema
    case "trends-news":
      return step3TrendsSchema
    case "custom-topic":
      return step3CustomSchema
    default:
      return z.object({})
  }
}
