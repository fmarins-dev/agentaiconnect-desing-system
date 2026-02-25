import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Setup Your Brand | Agent AI Connect",
  description: "Complete your onboarding to get started with Agent AI Connect",
}

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background min-h-screen">
      {children}
    </div>
  )
}
