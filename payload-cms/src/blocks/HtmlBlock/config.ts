import type { Block } from 'payload'

export const HtmlBlock: Block = {
  slug: 'htmlBlock',
  interfaceName: 'HtmlBlock',
  fields: [
    {
      name: 'html',
      type: 'text',
      required: true,
    },
  ],
}