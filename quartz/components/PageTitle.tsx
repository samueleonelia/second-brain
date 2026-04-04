import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href="/">
        <span class="page-title-main">notes</span>
        <span class="page-title-sub">samuele onelia</span>
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
.page-title a {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}
.page-title-main {
  font-weight: 600;
  font-size: 1.2rem;
}
.page-title-sub {
  font-weight: 300;
  font-size: 0.75rem;
  opacity: 0.7;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
