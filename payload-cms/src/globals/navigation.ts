import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  access: { read: () => true },
  fields: [
    {
      name: 'headerMenuLinks',
      type: 'array',
      fields: [link({ appearances: false })],
      maxRows: 10,
    },
    {
      name: 'footerPrimaryLinks',
      type: 'array',
      fields: [link({ appearances: false })],
      maxRows: 10,
    },
    {
      name: 'footerSecondaryLinks',
      type: 'array',
      fields: [link({ appearances: false })],
      maxRows: 10,
    },
  ],
}