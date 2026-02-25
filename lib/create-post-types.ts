export type PostType = "home-listing" | "trends-news" | "custom-topic"
export type Platform = "instagram" | "facebook" | "linkedin" | "x"
export type ListingInputMode = "url" | "manual"
export type CustomTopicMode = "free" | "predefined"
export type PostFormat = "single-image" | "carousel" | "video"

export interface ListingData {
  mode: ListingInputMode
  url: string
  address: string
  description: string
  photos: File[]
}

export interface TrendsData {
  state: string
  selectedArticleId: string | null
}

export interface CustomTopicData {
  mode: CustomTopicMode
  freeText: string
  predefinedTopic: string
  cta: string
}

export interface MediaFormatData {
  images: File[]
  format: PostFormat
  carouselCount: number
}

export interface PlatformContent {
  headline: string
  body: string
  hashtags: string[]
  supportText: string
  cta: string
}

export interface AIReviewData {
  content: Record<Platform, PlatformContent>
  regenerateCount: number
}

export interface CreatePostFormData {
  postType: PostType | null
  platforms: Platform[]
  listing: ListingData
  trends: TrendsData
  customTopic: CustomTopicData
  mediaFormat: MediaFormatData
  aiReview: AIReviewData
}

export const defaultFormData: CreatePostFormData = {
  postType: null,
  platforms: [],
  listing: {
    mode: "url",
    url: "",
    address: "",
    description: "",
    photos: [],
  },
  trends: {
    state: "",
    selectedArticleId: null,
  },
  customTopic: {
    mode: "free",
    freeText: "",
    predefinedTopic: "",
    cta: "",
  },
  mediaFormat: {
    images: [],
    format: "single-image",
    carouselCount: 3,
  },
  aiReview: {
    content: {} as Record<Platform, PlatformContent>,
    regenerateCount: 0,
  },
}
