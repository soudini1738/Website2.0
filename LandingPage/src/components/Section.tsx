import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Reveal } from "@/components/Reveal"

// Section header: kicker + display heading + standfirst, in a one-shot reveal.
export function SectionHeading({
  kicker,
  title,
  standfirst,
  className,
}: {
  kicker: string
  title: string
  standfirst?: string
  className?: string
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      <p className="kicker">{kicker}</p>
      <h2 className="font-display mt-5 text-3xl font-semibold text-balance md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {standfirst && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{standfirst}</p>
      )}
    </Reveal>
  )
}

// Standard section: hairline top rule + kicker (orbit glyph) + display heading + standfirst.
export function Section({
  id,
  kicker,
  title,
  standfirst,
  className,
  children,
}: {
  id?: string
  kicker: string
  title: string
  standfirst?: string
  className?: string
  children?: ReactNode
}) {
  return (
    <section id={id} className={cn("border-t border-line scroll-mt-20", className)}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          kicker={kicker}
          title={title}
          standfirst={standfirst}
          className="mb-14 md:mb-20"
        />
        {children}
      </div>
    </section>
  )
}
