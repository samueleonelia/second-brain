import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const StackedNotes: QuartzComponent = (_props: QuartzComponentProps) => {
  return null
}

StackedNotes.afterDOMLoaded = `
// Stacked Notes - dual pane navigation with slip
const MOBILE_BREAKPOINT = 800
let stackState = "SINGLE"
let stackSlipSlug = ""
let stackSlipTitle = ""

function stackIsMobile() {
  return window.innerWidth <= MOBILE_BREAKPOINT
}

function stackGetElements() {
  return {
    container: document.getElementById("stacked-notes-container"),
    paneLeft: document.getElementById("pane-left"),
    paneRight: document.getElementById("pane-right"),
    slip: document.getElementById("stacked-slip"),
    slipTitleEl: document.querySelector("#stacked-slip .slip-title"),
  }
}

function stackExtractContent(html) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, "text/html")
  const center = doc.querySelector(".center")
  const slug = doc.body?.getAttribute("data-slug") || ""
  const h1 = doc.querySelector("article h1")
  const title = h1 ? h1.textContent : (doc.title || slug)
  return { content: center ? center.innerHTML : "", slug, title }
}

function stackGetPaneTitle(pane) {
  if (!pane) return ""
  const h1 = pane.querySelector("article h1")
  return h1 ? h1.textContent : (pane.getAttribute("data-slug") || "")
}

async function stackFetchPage(url) {
  try {
    const fullUrl = (url instanceof URL) ? url : new URL(url, window.location.href)
    console.log("[StackedNotes] fetching:", fullUrl.href)
    const response = await window.fetchCanonical(fullUrl)
    const html = await response.text()
    return stackExtractContent(html)
  } catch (e) {
    console.error("[StackedNotes] fetch failed:", url, e)
    return null
  }
}

function stackUpdateUrl() {
  const { paneLeft, paneRight } = stackGetElements()
  const leftSlug = paneLeft?.getAttribute("data-slug") || ""
  const rightSlug = paneRight?.getAttribute("data-slug") || ""

  let url
  if (stackState === "DUAL" && rightSlug) {
    url = "/" + leftSlug + "?stack=" + encodeURIComponent(rightSlug)
  } else {
    url = "/" + leftSlug
  }

  history.pushState(
    { stackState, leftSlug, rightSlug, slipSlug: stackSlipSlug, slipTitle: stackSlipTitle },
    "",
    url
  )
}

async function stackHandleNav(url) {
  console.log("[StackedNotes] navigating to:", url.toString())
  const els = stackGetElements()
  if (!els.paneLeft || !els.paneRight || !els.slip || !els.slipTitleEl) {
    console.error("[StackedNotes] missing DOM elements")
    return
  }

  const data = await stackFetchPage(url)
  if (!data) {
    console.error("[StackedNotes] fetch returned null for:", href)
    return
  }

  console.log("[StackedNotes] state:", stackState, "got slug:", data.slug)

  if (stackState === "SINGLE") {
    els.paneRight.querySelector(".pane-content").innerHTML = data.content
    els.paneRight.setAttribute("data-slug", data.slug)
    els.paneLeft.classList.remove("single")
    els.paneLeft.classList.add("dual")
    els.paneRight.classList.remove("hidden")
    els.paneRight.classList.add("dual", "slide-in-right")
    setTimeout(() => els.paneRight.classList.remove("slide-in-right"), 400)
    stackState = "DUAL"
    stackUpdateUrl()

  } else if (stackState === "DUAL") {
    stackSlipTitle = stackGetPaneTitle(els.paneLeft)
    stackSlipSlug = els.paneLeft.getAttribute("data-slug") || ""
    els.slipTitleEl.textContent = stackSlipTitle
    els.slip.setAttribute("data-slug", stackSlipSlug)
    els.slip.classList.remove("hidden")

    const rightContent = els.paneRight.querySelector(".pane-content").innerHTML
    const rightSlug = els.paneRight.getAttribute("data-slug") || ""
    els.paneLeft.querySelector(".pane-content").innerHTML = rightContent
    els.paneLeft.setAttribute("data-slug", rightSlug)

    els.paneRight.querySelector(".pane-content").innerHTML = data.content
    els.paneRight.setAttribute("data-slug", data.slug)
    els.paneRight.classList.add("slide-in-right")
    setTimeout(() => els.paneRight.classList.remove("slide-in-right"), 400)

    stackState = "DUAL"
    stackUpdateUrl()
  }
}

function stackSlipClick() {
  const els = stackGetElements()
  if (!els.paneLeft || !els.paneRight || !els.slip) return

  const slugToLoad = els.slip.getAttribute("data-slug")
  if (!slugToLoad) return

  stackFetchPage("/" + slugToLoad).then(data => {
    if (!data) return
    els.paneLeft.querySelector(".pane-content").innerHTML = data.content
    els.paneLeft.setAttribute("data-slug", data.slug)
    els.paneRight.classList.add("hidden")
    els.paneRight.classList.remove("dual")
    els.paneRight.querySelector(".pane-content").innerHTML = ""
    els.paneRight.setAttribute("data-slug", "")
    els.slip.classList.add("hidden")
    els.slip.setAttribute("data-slug", "")
    els.paneLeft.classList.remove("dual")
    els.paneLeft.classList.add("single")
    stackSlipSlug = ""
    stackSlipTitle = ""
    stackState = "SINGLE"
    stackUpdateUrl()
  })
}

// Click interceptor - capturing phase, fires before SPA router
function stackClickHandler(e) {
  if (stackIsMobile()) return

  if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return

  const anchor = e.target?.closest?.("a")
  if (!anchor) return
  if (!anchor.classList.contains("internal")) return
  if (anchor.dataset?.routerIgnore !== undefined) return

  const rawHref = anchor.getAttribute("href")
  if (!rawHref || rawHref.startsWith("#")) return

  // Use anchor.href for fully resolved URL
  const resolvedUrl = new URL(anchor.href)
  console.log("[StackedNotes] intercepted click:", rawHref, "->", resolvedUrl.href)
  e.preventDefault()
  e.stopImmediatePropagation()

  stackHandleNav(resolvedUrl)
}

document.addEventListener("click", stackClickHandler, true)

document.getElementById("stacked-slip")?.addEventListener("click", () => stackSlipClick())

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && stackState === "DUAL" && !stackIsMobile()) {
    const els = stackGetElements()
    if (!els.paneLeft || !els.paneRight) return
    els.paneRight.classList.add("hidden")
    els.paneRight.classList.remove("dual")
    els.paneLeft.classList.remove("dual")
    els.paneLeft.classList.add("single")
    if (els.slip) {
      els.slip.classList.add("hidden")
      stackSlipSlug = ""
      stackSlipTitle = ""
    }
    stackState = "SINGLE"
    stackUpdateUrl()
  }
})

console.log("[StackedNotes] initialized")
`

export default (() => StackedNotes) satisfies QuartzComponentConstructor
