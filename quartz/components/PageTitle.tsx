import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href="/">
        <span class="page-title-text">{title}</span>
        <svg class="page-title-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="12" cy="12" r="2" />
          <line x1="8" y1="7.5" x2="10.5" y2="10.5" />
          <line x1="13.5" y1="10.5" x2="16" y2="7.5" />
          <line x1="13.5" y1="13.5" x2="16" y2="16.5" />
          <line x1="8" y1="16.5" x2="10.5" y2="13.5" />
        </svg>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
.page-title-icon {
  display: none;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
