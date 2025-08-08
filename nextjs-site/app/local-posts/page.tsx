import posts from '../../data/sample/posts.json'

export default function LocalPostsPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Local Posts (Next.js)</h1>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="p-4 border rounded">
            <div className="font-semibold">{p.title}</div>
            <p className="text-sm text-gray-600">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}