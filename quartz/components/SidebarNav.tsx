import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const SidebarNav: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  return (
    <nav class="sidebar-nav">
      <a href="/now" class="sidebar-nav-item">
        now
      </a>
      <a href="/" class="sidebar-nav-item">
        index
      </a>
    </nav>
  )
}

SidebarNav.css = `
.sidebar-nav {
  display: flex;
  gap: 0.4rem;
}
.sidebar-nav-item {
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--darkgray);
  text-decoration: none;
  padding: 0.2rem 0;
}
.sidebar-nav-item:hover {
  color: var(--dark);
}
`

export default (() => SidebarNav) satisfies QuartzComponentConstructor
