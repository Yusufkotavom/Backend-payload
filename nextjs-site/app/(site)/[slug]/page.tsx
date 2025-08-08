import React from 'react'

const PAYLOAD_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

async function fetchJSON(path: string) {
  const res = await fetch(`${PAYLOAD_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error('Failed to fetch ' + path)
  return res.json()
}

export default async function PageBySlug({ params }: { params: { slug: string } }) {
  const slug = params.slug
  let doc: any = await fetchJSON(`api/pages?where[slug][equals]=${slug}`)
  if (!doc?.docs?.length) {
    doc = await fetchJSON(`api/posts?where[slug][equals]=${slug}`)
  }
  const item = doc?.docs?.[0]

  return (
    <main className="max-w-3xl mx-auto p-6">
      {item ? (
        <article>
          <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
          {item.heroImage?.url && <img src={item.heroImage.url} alt={item.title} className="mb-6 rounded" />}
          {item.content && (
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">{JSON.stringify(item.content, null, 2)}</pre>
          )}
          {item.layout && (
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">{JSON.stringify(item.layout, null, 2)}</pre>
          )}
        </article>
      ) : (
        <p>Not found.</p>
      )}
    </main>
  )
}