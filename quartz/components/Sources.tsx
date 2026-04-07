import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Sources: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const sources = fileData.frontmatter?.sources as string[] | undefined
  if (!sources || sources.length === 0) {
    return null
  }

  const linkSources = sources.filter(
    (s) => s && typeof s === "string" && (s.startsWith("http://") || s.startsWith("https://")),
  )

  if (linkSources.length === 0) {
    return null
  }

  return (
    <div class={classNames(displayClass, "sources")}>
      <h2>External sources</h2>
      <ul class="sources-list">
        {linkSources.map((source) => {
          let label: string
          try {
            const url = new URL(source)
            label = url.hostname.replace("www.", "")
          } catch {
            label = source
          }
          return (
            <li>
              <a href={source} class="external" target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Sources.css = `
.sources {
  margin-top: 1rem;
}

.sources h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.sources-list {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.sources-list > li {
  margin: 0;
}

.sources-list a.external {
  font-size: 0.9rem;
  color: var(--secondary);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.sources-list a.external:hover {
  color: var(--tertiary);
}
`

export default (() => Sources) satisfies QuartzComponentConstructor
