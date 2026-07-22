// Single source of truth linking a Services card to its detail route and i18n copy.
// `slug` is language-independent and lives here (not in the dictionaries); `key`
// indexes `t.serviceDetails.items[key]` and `t.meta.services[key]`; `cardIndex`
// matches the order of `home.services.items`.
export const SERVICE_PAGES = [
  { slug: "administratie", key: "administratie", cardIndex: 0 },
  { slug: "data", key: "data", cardIndex: 1 },
  { slug: "follow-ups", key: "followUps", cardIndex: 2 },
  { slug: "rapportering", key: "reporting", cardIndex: 3 },
  { slug: "facturatie", key: "finance", cardIndex: 4 },
] as const

export type ServiceKey = (typeof SERVICE_PAGES)[number]["key"]

// Quick lookup from a Services card index to its page config (undefined if the
// card has no detail page).
export function servicePageForCard(cardIndex: number) {
  return SERVICE_PAGES.find((page) => page.cardIndex === cardIndex)
}
