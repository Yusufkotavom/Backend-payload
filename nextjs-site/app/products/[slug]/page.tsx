const PAYLOAD_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

async function fetchJSON(path: string) {
  const res = await fetch(`${PAYLOAD_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error('Failed to fetch ' + path)
  return res.json()
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const data = await fetchJSON(`api/products?where[slug][equals]=${params.slug}`)
  const p = data.docs?.[0]
  return (
    <main className="max-w-3xl mx-auto p-6">
      {p ? (
        <article>
          <h1 className="text-4xl font-bold mb-4">{p.title}</h1>
          {p.image?.url && <img src={p.image.url} alt={p.title} className="mb-6 rounded" />}
          {p.description && <p className="mb-4">{p.description}</p>}
          {p.price && <div className="text-xl font-semibold mb-4">${p.price}</div>}
          {p.affiliateUrl && (
            <a href={p.affiliateUrl} className="inline-flex px-4 py-2 rounded bg-blue-600 text-white">Buy</a>
          )}
        </article>
      ) : (
        <p>Not found.</p>
      )}
    </main>
  )
}