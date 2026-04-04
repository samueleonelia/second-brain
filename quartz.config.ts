import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "second brain",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false,
    analytics: null,
    locale: "en-US",
    baseUrl: "note.sosautomazioni.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: { name: "Sora", weights: [300, 400, 500, 600] },
        body: { name: "Sora", weights: [300, 400, 500, 600] },
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FFF7EB",
          lightgray: "#e8e0d4",
          gray: "#9e9689",
          darkgray: "#062123",
          dark: "#062123",
          secondary: "#0467F1",
          tertiary: "#3585f5",
          highlight: "rgba(4, 103, 241, 0.08)",
          textHighlight: "#0467F122",
        },
        darkMode: {
          light: "#062123",
          lightgray: "#0a3538",
          gray: "#3d6668",
          darkgray: "#e8e0d4",
          dark: "#FFF7EB",
          secondary: "#ffffff",
          tertiary: "#e0e0e0",
          highlight: "rgba(4, 103, 241, 0.1)",
          textHighlight: "#0467F122",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
