import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const leftSidebar = [
  Component.PageTitle(),
  Component.MobileOnly(Component.Spacer()),
  Component.Flex({
    components: [
      {
        Component: Component.BurgerMenu(),
        grow: false,
      },
      {
        Component: Component.Search(),
        grow: true,
      },
    ],
  }),
  Component.SidebarNav(),
]

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.Backlinks(), Component.TagList()],
  footer: Component.Footer({ links: {} }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [],
  left: leftSidebar,
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [],
  left: leftSidebar,
  right: [],
}
