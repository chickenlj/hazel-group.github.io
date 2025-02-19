import DocsMenu from "./DocsMenu.astro";
import CommunityMenu from "./CommunityMenu.astro";


export default [
  {
      label: "文档",
      translations: {
          en: "DOCS"
      },
      trigger: "hover",
      slot: DocsMenu,
      position: "absolute",
      activePath: ['/docs'],
  },
  {
      label: "社区",
      translations: {
          en: "COMMUNITY"
      },
      trigger: "hover",
      slot: CommunityMenu,
      position: "fixed",
      activePath: ['/news', '/activity', '/blog', '/docs/ebook/', '/download'],
  },
  {
    label: "学习",
    translations: {
        en: "LEARN"
    },
    trigger: "hover",
    slot: CommunityMenu,
    position: "fixed",
    activePath: ['/learn'],
    },
    {
        label: "解决方案",
        translations: {
            en: "SOLUTIONS"
        },
        trigger: "hover",
        slot: CommunityMenu,
        position: "fixed",
        activePath: ['solutions'],
    },
]