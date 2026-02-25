import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface V2NavHeaderProps {
  className?: string
}

export function V2NavHeader({ className }: V2NavHeaderProps) {
  return (
    <header
      data-slot="v2-nav-header"
      className={cn(
        "flex items-center justify-between px-8 py-4 bg-white border-b border-[var(--v2-border)] font-[family-name:var(--font-manrope)]",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="Agent AI Connect"
        width={160}
        height={40}
        className="h-8 w-auto object-contain"
        priority
      />

      <div className="flex items-center gap-4">
        <a
          href="#"
          className="text-sm font-medium text-[var(--v2-primary)] hover:underline"
        >
          Need help?
        </a>
        <Avatar>
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
