import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot, resolveRelative } from "../util/path"

const SidebarNav: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)

  const archiveFiles = allFiles
    .filter((f) => f.slug?.startsWith("archive/") && f.slug !== "archive/index")
    .sort((a, b) => {
      const aTitle = a.frontmatter?.title?.toLowerCase() ?? ""
      const bTitle = b.frontmatter?.title?.toLowerCase() ?? ""
      return aTitle.localeCompare(bTitle)
    })

  const themeFiles = allFiles
    .filter((f) => f.slug?.startsWith("themes/") && f.slug !== "themes/index")
    .sort((a, b) => {
      const aTitle = a.frontmatter?.title?.toLowerCase() ?? ""
      const bTitle = b.frontmatter?.title?.toLowerCase() ?? ""
      return aTitle.localeCompare(bTitle)
    })

  return (
    <nav class="sidebar-nav">
      <a href={`${baseDir}/@Index`} class="sidebar-nav-item">
        <span class="sidebar-nav-icon">@</span> index
      </a>
      <div class="sidebar-nav-folder">
        <button class="sidebar-nav-toggle" data-folder="archive">
          <span class="sidebar-nav-arrow">›</span> archive
        </button>
        <ul class="sidebar-nav-list" data-folder="archive">
          {archiveFiles.map((file) => (
            <li>
              <a href={resolveRelative(fileData.slug!, file.slug!)} class="internal">
                {file.frontmatter?.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div class="sidebar-nav-folder">
        <button class="sidebar-nav-toggle" data-folder="themes">
          <span class="sidebar-nav-arrow">›</span> themes
        </button>
        <ul class="sidebar-nav-list" data-folder="themes">
          {themeFiles.map((file) => (
            <li>
              <a href={resolveRelative(fileData.slug!, file.slug!)} class="internal">
                {file.frontmatter?.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

SidebarNav.css = `
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 0.5rem;
}
.sidebar-nav-item {
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--darkgray);
  text-decoration: none;
  padding: 0.2rem 0;
}
.sidebar-nav-item:hover {
  color: var(--dark);
}
.sidebar-nav-icon {
  opacity: 0.5;
  margin-right: 0.2rem;
}
.sidebar-nav-folder {
  display: flex;
  flex-direction: column;
}
.sidebar-nav-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 300;
  font-family: inherit;
  color: var(--darkgray);
  padding: 0.2rem 0;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.2rem;
}
.sidebar-nav-toggle:hover {
  color: var(--dark);
}
.sidebar-nav-arrow {
  opacity: 0.5;
  display: inline-block;
  transition: transform 0.2s ease;
  width: 0.6em;
  text-align: center;
}
.sidebar-nav-toggle.open .sidebar-nav-arrow {
  transform: rotate(90deg);
}
.sidebar-nav-list {
  list-style: none;
  padding: 0 0 0 1.2rem;
  margin: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.sidebar-nav-list.open {
  max-height: 60vh;
  overflow-y: auto;
}
.sidebar-nav-list li {
  margin: 0.15rem 0;
}
.sidebar-nav-list a {
  font-size: 0.82rem;
  font-weight: 300;
  color: var(--darkgray);
  text-decoration: none;
  background: none !important;
  padding: 0 !important;
}
.sidebar-nav-list a:hover {
  color: var(--dark);
}
`

SidebarNav.afterDOMLoaded = `
function setupSidebarToggles() {
  document.querySelectorAll(".sidebar-nav-toggle").forEach(btn => {
    btn.replaceWith(btn.cloneNode(true))
  })
  document.querySelectorAll(".sidebar-nav-toggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      const list = btn.parentElement.querySelector(".sidebar-nav-list")
      btn.classList.toggle("open")
      list.classList.toggle("open")
    })
  })
}
setupSidebarToggles()
document.addEventListener("nav", () => setupSidebarToggles())
`

export default (() => SidebarNav) satisfies QuartzComponentConstructor
