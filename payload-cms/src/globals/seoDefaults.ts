import type { GlobalConfig } from 'payload'

export const SeoDefaults: GlobalConfig = {
  slug: 'seoDefaults',
  access: { read: () => true },
  fields: [
    {
      name: 'fallbackMeta',
      type: 'group',
      fields: [
        { name: 'defaultMetaTitle', type: 'text' },
        { name: 'defaultMetaDescription', type: 'textarea' },
        { name: 'defaultOgImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'globalSchema',
      type: 'blocks',
      blocks: [
        {
          slug: 'localBusiness',
          interfaceName: 'LocalBusinessSchema',
          fields: [
            { name: 'businessName', type: 'text', required: true },
            { name: 'address', type: 'textarea' },
            { name: 'telephone', type: 'text' },
            { name: 'email', type: 'email' },
            { name: 'priceRange', type: 'text' },
            {
              name: 'openingHours',
              type: 'array',
              fields: [
                { name: 'dayOfWeek', type: 'text' },
                { name: 'opens', type: 'text' },
                { name: 'closes', type: 'text' },
              ],
            },
          ],
        },
        {
          slug: 'service',
          interfaceName: 'ServiceSchema',
          fields: [
            { name: 'serviceType', type: 'text', required: true },
            { name: 'providerName', type: 'text' },
            { name: 'areaServed', type: 'text' },
            { name: 'description', type: 'textarea' },
          ],
        },
        {
          slug: 'review',
          interfaceName: 'ReviewSchema',
          fields: [
            { name: 'itemName', type: 'text', required: true },
            { name: 'author', type: 'text' },
            { name: 'reviewRating', type: 'number', min: 1, max: 5 },
            { name: 'reviewBody', type: 'textarea' },
          ],
        },
        {
          slug: 'organization',
          interfaceName: 'OrganizationSchema',
          fields: [
            { name: 'organizationName', type: 'text', required: true },
            { name: 'legalName', type: 'text' },
            { name: 'logo', type: 'upload', relationTo: 'media' },
            { name: 'url', type: 'text' },
          ],
        },
      ],
    },
  ],
}