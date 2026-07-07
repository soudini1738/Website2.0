import { useEffect } from "react"

// Sets the document title and meta description per route, localized.
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    meta?.setAttribute("content", description)
  }, [title, description])
}
