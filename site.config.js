const CONFIG = {
  // profile setting (required)
  profile: {
    name: "류승태",
    image: "/seungtae_profile.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "기록이 최고야",
    email: "dbtmdxo1992.@gmail.com",
    linkedin: "",
    github: "seungtaeryu",
    instagram: "ryu._.st",
  },
  projects: [
    {
      name: `1`,
      href: "https://github.com/seungtaeryu/repomon",
    },
    {
      name: `2-bunny`,
      href: "https://github.com/seungtaeryu/tonny-bunny",
    },
    {
      name: `3-core`,
      href: "https://github.com/seungtaeryu/green-core",
    },
  ],
  // blog setting (required)
  blog: {
    title: "seungtae-blog",
    description: "welcome to seungtae-blog!",
  },

  // CONFIG configration (required)
  link: "https://seungtaeryu.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
