import {
  IconBriefcase,
  IconHeart,
  IconDiamond,
  IconShieldCheck,
  IconBolt,
  IconHeartHandshake,
  IconCrown,
  IconInfoCircle,
  IconStar,
  IconMoodSmile,
} from "@tabler/icons-react"
import type { ElementType } from "react"

export interface VoiceToneOption {
  id: string
  title: string
  icon: ElementType
}

export const voiceToneOptions: VoiceToneOption[] = [
  { id: "professional", title: "Professional", icon: IconBriefcase },
  { id: "friendly", title: "Friendly", icon: IconHeart },
  { id: "luxurious", title: "Luxurious", icon: IconDiamond },
  { id: "trustworthy", title: "Trustworthy", icon: IconShieldCheck },
  { id: "energetic", title: "Energetic", icon: IconBolt },
  { id: "empathetic", title: "Empathetic", icon: IconHeartHandshake },
  { id: "authoritative", title: "Authoritative", icon: IconCrown },
  { id: "informative", title: "Informative", icon: IconInfoCircle },
  { id: "inspiring", title: "Inspiring", icon: IconStar },
  { id: "casual", title: "Casual", icon: IconMoodSmile },
]

export interface FontOption {
  id: string
  label: string
  googleFont: string
}

export const fontOptions: FontOption[] = [
  { id: "playfair-display", label: "Playfair Display", googleFont: "Playfair+Display" },
  { id: "montserrat", label: "Montserrat", googleFont: "Montserrat" },
  { id: "lato", label: "Lato", googleFont: "Lato" },
  { id: "raleway", label: "Raleway", googleFont: "Raleway" },
  { id: "merriweather", label: "Merriweather", googleFont: "Merriweather" },
  { id: "nunito", label: "Nunito", googleFont: "Nunito" },
  { id: "poppins", label: "Poppins", googleFont: "Poppins" },
  { id: "libre-baskerville", label: "Libre Baskerville", googleFont: "Libre+Baskerville" },
  { id: "source-sans-3", label: "Source Sans 3", googleFont: "Source+Sans+3" },
  { id: "cormorant-garamond", label: "Cormorant Garamond", googleFont: "Cormorant+Garamond" },
]

export const ONBOARDING_STEPS = [
  { label: "Profile" },
  { label: "Colors" },
  { label: "Voice" },
  { label: "Font" },
  { label: "Compliance" },
]
