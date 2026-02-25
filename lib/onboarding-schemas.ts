import { z } from "zod"

export const step1Schema = z.object({
  profilePhoto: z.any().refine((val) => val !== null && val !== undefined, {
    message: "Agent profile photo is required",
  }),
  brokerageLogo: z.any().refine((val) => val !== null && val !== undefined, {
    message: "Brokerage logo is required",
  }),
  agentLogo: z.any().optional(),
})

export const step2Schema = z.object({
  primaryColor: z
    .string()
    .min(1, "Primary color is required")
    .regex(/^[0-9a-fA-F]{6}$/, "Enter a valid 6-character HEX color"),
  secondaryColor: z
    .string()
    .min(1, "Secondary color is required")
    .regex(/^[0-9a-fA-F]{6}$/, "Enter a valid 6-character HEX color"),
})

export const step3Schema = z.object({
  voiceTone: z.string().min(1, "Please select a voice & tone"),
})

export const step4Schema = z.object({
  font: z.string().min(1, "Please select a font"),
})

export const step5Schema = z.object({
  complianceDisclaimer: z.string().optional(),
  website: z.string().optional(),
  displayLicenseNumber: z.boolean().optional(),
})

export const schemas = [
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
]
