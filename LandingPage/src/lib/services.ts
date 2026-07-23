// Single source of truth linking a Services card to its modal content. `key`
// indexes `t.serviceDetails.items[key]`; `cardIndex` matches the order of
// `home.services.items`.
export const SERVICE_PAGES = [
  { key: "administratie", cardIndex: 0 },
  { key: "data", cardIndex: 1 },
  { key: "followUps", cardIndex: 2 },
  { key: "reporting", cardIndex: 3 },
  { key: "finance", cardIndex: 4 },
] as const

export type ServiceKey = (typeof SERVICE_PAGES)[number]["key"]

// Quick lookup from a Services card index to its page config (undefined if the
// card has no detail page).
export function servicePageForCard(cardIndex: number) {
  return SERVICE_PAGES.find((page) => page.cardIndex === cardIndex)
}
