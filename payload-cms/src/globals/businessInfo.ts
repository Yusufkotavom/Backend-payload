import type { GlobalConfig } from 'payload'

export const BusinessInfo: GlobalConfig = {
  slug: 'businessInfo',
  access: { read: () => true },
  fields: [
    { name: 'address', type: 'textarea' },
    { name: 'email', type: 'email' },
    { name: 'phoneNumber', type: 'text' },
    {
      name: 'socialMediaLinks',
      type: 'array',
      fields: [
        { name: 'platform', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
  ],
}