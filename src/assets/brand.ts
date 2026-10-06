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
    navy: '#06152B',
    baazex: '#0066FF',
    bright: '#00A3FF',
    canvas: '#F4F8FC',
    ink: '#172033',
  },
} as const

export type Brand = typeof BRAND
