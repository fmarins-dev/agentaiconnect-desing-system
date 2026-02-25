export interface OnboardingStep1Data {
  profilePhoto: File | null
  brokerageLogo: File | null
  agentLogo: File | null
}

export interface OnboardingStep2Data {
  primaryColor: string
  secondaryColor: string
}

export interface OnboardingStep3Data {
  voiceTone: string
}

export interface OnboardingStep4Data {
  font: string
}

export interface OnboardingStep5Data {
  complianceDisclaimer: string
  website: string
  displayLicenseNumber: boolean
}

export interface OnboardingFormData {
  step1: OnboardingStep1Data
  step2: OnboardingStep2Data
  step3: OnboardingStep3Data
  step4: OnboardingStep4Data
  step5: OnboardingStep5Data
}

export const defaultFormData: OnboardingFormData = {
  step1: {
    profilePhoto: null,
    brokerageLogo: null,
    agentLogo: null,
  },
  step2: {
    primaryColor: "7c3aed",
    secondaryColor: "a78bfa",
  },
  step3: {
    voiceTone: "",
  },
  step4: {
    font: "",
  },
  step5: {
    complianceDisclaimer: "",
    website: "",
    displayLicenseNumber: false,
  },
}
