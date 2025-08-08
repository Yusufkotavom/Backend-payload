const PAYLOAD_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

async function fetchJSON(path: string) {
  const res = await fetch(`${PAYLOAD_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error('Failed to fetch ' + path)
  return res.json()
}

export default async function ProductsPage() {
  const data = await fetchJSON('api/products?limit=12')
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {data.docs?.map((p: any) => (
          <a key={p.id} href={`/products/${p.slug}`} className="border rounded p-4 block">
            <div className="font-semibold">{p.title}</div>
            {p.price && <div className="text-sm text-gray-600">${p.price}</div>}
          </a>
        ))}
      </div>
    </main>
  )
}