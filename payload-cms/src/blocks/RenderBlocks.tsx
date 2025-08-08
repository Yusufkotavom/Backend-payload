import React from 'react'
import type { Page, Post } from '@/payload-types'
import dynamic from 'next/dynamic'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
}

export const RenderBlocks: React.FC<{ blocks: any[] }> = ({ blocks }) => {
  if (!blocks) return null
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.blockType) {
          case 'heroBlock':
            return (
              <section key={i} className="py-12">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-3xl font-bold mb-2">{block.title}</h2>
                  {block.description && <p className="mb-4">{block.description}</p>}
                </div>
              </section>
            )
          case 'htmlBlock':
            return <div key={i} dangerouslySetInnerHTML={{ __html: block.html }} />
          case 'mdxBlock':
            return (
              <pre key={i} className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
                {block.mdx}
              </pre>
            )
          case 'imageBlock':
            return (
              <figure key={i} className="my-6">
                {block.image?.url && (
                  <img src={block.image.url} alt={block.caption || ''} className="rounded" />
                )}
                {block.caption && <figcaption className="text-sm text-gray-600 mt-2">{block.caption}</figcaption>}
              </figure>
            )
          case 'productBlock':
            return (
              <div key={i} className="grid md:grid-cols-3 gap-4 my-6">
                {block.products?.map((p: any) => (
                  <a key={p?.id || Math.random()} href={`/products/${p?.slug || ''}`} className="border rounded p-4 block">
                    <div className="font-semibold">{p?.title}</div>
                  </a>
                ))}
              </div>
            )
          case 'richTextBlock':
            return (
              <div key={i} className="prose">
                <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">{JSON.stringify(block.content, null, 2)}</pre>
              </div>
            )
          default:
            return null
        }
      })}
    </>
  )
}
