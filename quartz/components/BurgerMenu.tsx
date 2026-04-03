import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const BurgerMenu: QuartzComponent = () => {
  return (
    <button class="burger-menu" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

BurgerMenu.afterDOMLoaded = `
function setupBurger() {
  document.querySelectorAll(".burger-menu").forEach(btn => {
    btn.replaceWith(btn.cloneNode(true))
  })
  document.querySelectorAll(".burger-menu").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      const nav = document.querySelector(".sidebar-nav")
      if (!nav) return
      nav.classList.add("mobile-open")

      // Add close button if not present
      if (!nav.querySelector(".mobile-overlay-close")) {
        const closeBtn = document.createElement("button")
        closeBtn.className = "mobile-overlay-close"
        closeBtn.setAttribute("aria-label", "Close menu")
        closeBtn.textContent = "\\u00d7"
        nav.insertBefore(closeBtn, nav.firstChild)
        closeBtn.addEventListener("click", () => {
          nav.classList.remove("mobile-open")
        })
      }
    })
  })
}
setupBurger()
document.addEventListener("nav", () => setupBurger())
`

export default (() => BurgerMenu) satisfies QuartzComponentConstructor
