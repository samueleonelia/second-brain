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

// Re-initialize popovers and other nav-dependent scripts for new content
function stackNotifyContent() {
  const slug = document.body.getAttribute("data-slug") || ""
  const event = new CustomEvent("nav", { detail: { url: slug } })
  document.dispatchEvent(event)
}

async function stackHandleNav(url) {
  const els = stackGetElements()
  if (!els.paneLeft || !els.paneRight || !els.slip || !els.slipTitleEl) return

  const data = await stackFetchPage(url)
  if (!data) return

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
    stackNotifyContent()

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
    stackNotifyContent()
  }
}

// Reset to single pane showing a specific page
async function stackResetToPage(url) {
  const els = stackGetElements()
  if (!els.paneLeft || !els.paneRight || !els.slip) return

  const data = await stackFetchPage(url)
  if (!data) return

  els.paneLeft.querySelector(".pane-content").innerHTML = data.content
  els.paneLeft.setAttribute("data-slug", data.slug)
  els.paneLeft.classList.remove("dual")
  els.paneLeft.classList.add("single")
  els.paneRight.classList.add("hidden")
  els.paneRight.classList.remove("dual")
  els.paneRight.querySelector(".pane-content").innerHTML = ""
  els.paneRight.setAttribute("data-slug", "")
  els.slip.classList.add("hidden")
  els.slip.setAttribute("data-slug", "")
  stackSlipSlug = ""
  stackSlipTitle = ""
  stackState = "SINGLE"
  stackUpdateUrl()
  stackNotifyContent()
}

// Load the home dual view: Now (left) + Index (right)
async function stackLoadHomeDual() {
  const els = stackGetElements()
  if (!els.paneLeft || !els.paneRight || !els.slip) return

  const [nowData, indexData] = await Promise.all([
    stackFetchPage("/now"),
    stackFetchPage("/"),
  ])
  if (!nowData || !indexData) return

  els.paneLeft.querySelector(".pane-content").innerHTML = nowData.content
  els.paneLeft.setAttribute("data-slug", nowData.slug)
  els.paneLeft.classList.remove("single")
  els.paneLeft.classList.add("dual")
  els.paneRight.querySelector(".pane-content").innerHTML = indexData.content
  els.paneRight.setAttribute("data-slug", indexData.slug)
  els.paneRight.classList.remove("hidden")
  els.paneRight.classList.add("dual")
  els.slip.classList.add("hidden")
  els.slip.setAttribute("data-slug", "")
  stackSlipSlug = ""
  stackSlipTitle = ""
  stackState = "DUAL"
  history.replaceState(
    { stackState: "DUAL", leftSlug: "now", rightSlug: indexData.slug, slipSlug: "", slipTitle: "" },
    "",
    "/"
  )
  stackNotifyContent()
}

function stackSlipClick() {
  const els = stackGetElements()
  if (!els.paneLeft || !els.paneRight || !els.slip || !els.slipTitleEl) return
  const slugToLoad = els.slip.getAttribute("data-slug")
  if (!slugToLoad) return

  stackFetchPage("/" + slugToLoad).then(data => {
    if (!data || !els.paneLeft || !els.paneRight || !els.slip || !els.slipTitleEl) return

    // Current left becomes the new slip
    stackSlipTitle = stackGetPaneTitle(els.paneLeft)
    stackSlipSlug = els.paneLeft.getAttribute("data-slug") || ""
    els.slipTitleEl.textContent = stackSlipTitle
    els.slip.setAttribute("data-slug", stackSlipSlug)

    // Right pane moves to left
    const rightContent = els.paneRight.querySelector(".pane-content").innerHTML
    const rightSlug = els.paneRight.getAttribute("data-slug") || ""
    els.paneLeft.querySelector(".pane-content").innerHTML = rightContent
    els.paneLeft.setAttribute("data-slug", rightSlug)

    // Slip note goes into right pane
    els.paneRight.querySelector(".pane-content").innerHTML = data.content
    els.paneRight.setAttribute("data-slug", data.slug)
    els.paneRight.classList.add("slide-in-right")
    setTimeout(() => els.paneRight.classList.remove("slide-in-right"), 400)

    stackState = "DUAL"
    stackUpdateUrl()
    stackNotifyContent()
  })
}

// Check if a URL is local
function stackIsLocal(href) {
  try {
    const url = new URL(href, window.location.origin)
    return url.origin === window.location.origin
  } catch (e) {
    return false
  }
}

// Mobile: single pane navigation with slip
async function stackMobileNav(url) {
  const els = stackGetElements()
  if (!els.paneLeft || !els.slip || !els.slipTitleEl) return

  const data = await stackFetchPage(url)
  if (!data) return

  // Current page title becomes the slip
  const currentTitle = stackGetPaneTitle(els.paneLeft)
  const currentSlug = els.paneLeft.getAttribute("data-slug") || ""
  if (currentTitle && currentSlug) {
    stackSlipTitle = currentTitle
    stackSlipSlug = currentSlug
    els.slipTitleEl.textContent = stackSlipTitle
    els.slip.setAttribute("data-slug", stackSlipSlug)
    els.slip.classList.remove("hidden")
  }

  // Load new content into the single pane
  els.paneLeft.querySelector(".pane-content").innerHTML = data.content
  els.paneLeft.setAttribute("data-slug", data.slug)

  history.pushState(
    { stackState: "SINGLE", leftSlug: data.slug, rightSlug: "", slipSlug: stackSlipSlug, slipTitle: stackSlipTitle },
    "",
    "/" + data.slug
  )
  stackNotifyContent()
}

function stackMobileSlipClick() {
  const els = stackGetElements()
  if (!els.paneLeft || !els.slip || !els.slipTitleEl) return
  const slugToLoad = els.slip.getAttribute("data-slug")
  if (!slugToLoad) return

  // Swap: current pane becomes slip, slip content loads into pane
  const currentTitle = stackGetPaneTitle(els.paneLeft)
  const currentSlug = els.paneLeft.getAttribute("data-slug") || ""

  stackFetchPage("/" + slugToLoad).then(data => {
    if (!data || !els.paneLeft || !els.slip || !els.slipTitleEl) return

    // Update slip with current page
    stackSlipTitle = currentTitle
    stackSlipSlug = currentSlug
    els.slipTitleEl.textContent = stackSlipTitle
    els.slip.setAttribute("data-slug", stackSlipSlug)

    // Load slip note into pane
    els.paneLeft.querySelector(".pane-content").innerHTML = data.content
    els.paneLeft.setAttribute("data-slug", data.slug)

    history.pushState(
      { stackState: "SINGLE", leftSlug: data.slug, rightSlug: "", slipSlug: stackSlipSlug, slipTitle: stackSlipTitle },
      "",
      "/" + data.slug
    )
    stackNotifyContent()
  })
}

// Click interceptor - capturing phase, fires before SPA router
function stackClickHandler(e) {
  if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return

  const anchor = e.target?.closest?.("a")
  if (!anchor) return
  if (anchor.dataset?.routerIgnore !== undefined) return

  const rawHref = anchor.getAttribute("href")
  if (!rawHref || rawHref.startsWith("#")) return

  // Resolve relative URLs against the pane's slug, not the browser URL
  // (pushState changes the browser URL but pane content has links relative to its own page)
  const pane = anchor.closest(".stacked-pane")
  const paneSlug = pane ? pane.getAttribute("data-slug") : null
  let resolvedUrl
  if (paneSlug && (rawHref.startsWith("./") || rawHref.startsWith("../"))) {
    resolvedUrl = new URL(rawHref, window.location.origin + "/" + paneSlug)
  } else if (rawHref.startsWith("/")) {
    resolvedUrl = new URL(rawHref, window.location.origin)
  } else {
    resolvedUrl = new URL(anchor.href)
  }

  if (!stackIsLocal(resolvedUrl.href)) return

  // Check if this is a "home" link (page title / logo)
  const isHomeLink = anchor.closest(".page-title") !== null

  e.preventDefault()
  e.stopImmediatePropagation()

  if (stackIsMobile()) {
    if (isHomeLink) {
      stackMobileNav(new URL("/now", window.location.origin))
    } else {
      stackMobileNav(resolvedUrl)
    }
  } else {
    if (isHomeLink) {
      stackLoadHomeDual()
    } else {
      stackHandleNav(resolvedUrl)
    }
  }
}

document.addEventListener("click", stackClickHandler, true)

document.getElementById("stacked-slip")?.addEventListener("click", () => {
  if (stackIsMobile()) {
    stackMobileSlipClick()
  } else {
    stackSlipClick()
  }
})

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

// Defer setup until after SPA router is ready (fires "nav" event)
let stackInitDone = false
document.addEventListener("nav", function stackInit() {
  if (stackInitDone) return
  stackInitDone = true

  // Override spaNavigate for search results
  const originalSpaNavigate = window.spaNavigate
  window.spaNavigate = function(url, isBack) {
    if (isBack) return originalSpaNavigate(url, isBack)
    const resolved = url instanceof URL ? url : new URL(url, window.location.origin)
    if (stackIsMobile()) {
      stackMobileNav(resolved)
    } else {
      stackHandleNav(resolved)
    }
  }

  // On initial load of the homepage
  const initialSlug = document.body.getAttribute("data-slug") || ""
  if ((initialSlug === "index" || initialSlug === "now") && !new URLSearchParams(window.location.search).has("stack")) {
    if (stackIsMobile()) {
      // Mobile: show Index as page, Now as slip
      const els = stackGetElements()
      if (els.slip && els.slipTitleEl) {
        stackSlipTitle = "now"
        stackSlipSlug = "now"
        els.slipTitleEl.textContent = "now"
        els.slip.setAttribute("data-slug", "Now")
        els.slip.classList.remove("hidden")
      }
    } else {
      // Desktop: Now (left) + Index (right)
      stackLoadHomeDual()
    }
  }

  console.log("[StackedNotes] initialized")
})
`

export default (() => StackedNotes) satisfies QuartzComponentConstructor
