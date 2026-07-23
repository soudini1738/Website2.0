import type { ReactNode } from "react"

import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from "@/lib/constants"

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

const CONTACT_PATTERN = new RegExp(
  `(${escapeRegExp(CONTACT_EMAIL)}|${escapeRegExp(CONTACT_PHONE)})`,
  "gi"
)

// Turns any occurrence of the ORBYTH email or phone number inside plain
// translation copy into a real mailto:/tel: link, so legal body text stays a
// single readable sentence in the dictionaries instead of being pre-split
// into structured fields.
export function linkifyContact(text: string): ReactNode[] {
  return text.split(CONTACT_PATTERN).map((part, i) => {
    if (part.toLowerCase() === CONTACT_EMAIL.toLowerCase()) {
      return (
        <a key={i} href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline-offset-4 hover:underline">
          {part}
        </a>
      )
    }
    if (part === CONTACT_PHONE) {
      return (
        <a key={i} href={CONTACT_PHONE_TEL} className="font-medium underline-offset-4 hover:underline">
          {part}
        </a>
      )
    }
    return part
  })
}
