import type { Block } from 'payload'

export const MdxBlock: Block = {
  slug: 'mdxBlock',
  interfaceName: 'MdxBlock',
  fields: [
    {
      name: 'mdx',
      type: 'code',
      required: true,
    },
  ],
}