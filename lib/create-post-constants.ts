import {
  IconHome2,
  IconTrendingUp,
  IconBulb,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react"
import type { ElementType } from "react"
import type { PostType, Platform, PostFormat } from "./create-post-types"

export interface PostTypeOption {
  value: PostType
  title: string
  description: string
  icon: ElementType
}

export const POST_TYPE_OPTIONS: PostTypeOption[] = [
  {
    value: "home-listing",
    title: "Home Listing",
    description: "Showcase a property for sale or rent with AI-generated compelling copy.",
    icon: IconHome2,
  },
  {
    value: "trends-news",
    title: "Trends & News",
    description: "Share the latest real estate market insights and news from your region.",
    icon: IconTrendingUp,
  },
  {
    value: "custom-topic",
    title: "Custom Topic",
    description: "Write about any topic relevant to your audience or choose from suggestions.",
    icon: IconBulb,
  },
]

export interface PlatformOption {
  value: Platform
  label: string
  icon: ElementType
}

export const PLATFORM_OPTIONS: PlatformOption[] = [
  { value: "instagram", label: "Instagram", icon: IconBrandInstagram },
  { value: "facebook", label: "Facebook", icon: IconBrandFacebook },
  { value: "linkedin", label: "LinkedIn", icon: IconBrandLinkedin },
  { value: "x", label: "X (Twitter)", icon: IconBrandX },
]

export const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
]

export const PREDEFINED_TOPICS = [
  "Tips for First-Time Homebuyers",
  "How to Stage Your Home to Sell Faster",
  "Understanding Mortgage Rates in 2025",
  "Top Neighborhoods for Families",
  "Investment Properties: What to Look For",
  "Renting vs. Buying: Which Is Right for You?",
  "How to Increase Your Home's Value",
  "The Home Inspection Process Explained",
  "Navigating a Seller's Market",
  "Down Payment Assistance Programs",
]

export const CTA_OPTIONS = [
  "Schedule a Free Consultation",
  "View All Listings",
  "Get a Home Valuation",
  "Contact Me Today",
  "Learn More",
  "Book a Showing",
]

export interface FormatOption {
  value: PostFormat
  title: string
  description: string
}

export const FORMAT_OPTIONS: FormatOption[] = [
  {
    value: "single-image",
    title: "Single Image",
    description: "One striking visual with your caption.",
  },
  {
    value: "carousel",
    title: "Carousel",
    description: "Multiple slides to tell your story.",
  },
  {
    value: "video",
    title: "Video / Slides",
    description: "Animated slideshow or video format.",
  },
]

export const CREATE_POST_STEPS = [
  { label: "Post Type" },
  { label: "Platforms" },
  { label: "Details" },
  { label: "Media" },
  { label: "Review" },
]
