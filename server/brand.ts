export const BRAND = {
  id: 'nextgen-fx-academy',
  name: 'NextGen FX Academy',
  shortName: 'NextGen FX',
  engineName: 'NextGen FX Engine',
  company: 'NextGen FX Academy',
  url: 'https://www.nextgenfxacadmey.com',
  host: 'nextgenfxacadmey.com',
  storagePrefix: 'nextgenfx.academy',
  demoStudentEmail: 'student@nextgenfxacadmey.com',
  demoAdminEmail: 'admin@nextgenfxacadmey.com',
  colors: {
      "navy": "#a9dfff",
      "navy800": "#8ed4ff",
      "navy700": "#6ec6ff",
      "navy600": "#d4f0ff",
      "baazex": "#5eb8f5",
      "baazex600": "#3aa6ef",
      "bright": "#7ed0ff",
      "accent": "#1468b8",
      "ink": "#0a1f44",
      "muted": "#5a7194",
      "canvas": "#f5f9ff",
      "line": "#c9daf2",
      "onButton": "#0a1f44",
      "glow": "94 184 245"
  },
} as const

export type Brand = typeof BRAND
