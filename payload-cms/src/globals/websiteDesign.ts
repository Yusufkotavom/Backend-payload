import type { GlobalConfig } from 'payload'

export const WebsiteDesign: GlobalConfig = {
  slug: 'websiteDesign',
  access: { read: () => true },
  fields: [
    { name: 'primaryColor', type: 'text' },
    { name: 'secondaryColor', type: 'text' },
    { name: 'textColor', type: 'text' },
    { name: 'backgroundColor', type: 'text' },
  ],
}