export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Next.js Starter</h1>
      <button data-modal-target="demoModal" data-modal-toggle="demoModal" className="inline-flex items-center px-4 py-2 rounded bg-blue-600 text-white">Open Modal</button>
      <div id="demoModal" className="hidden fixed inset-0 z-50 items-center justify-center">
        <div className="bg-white p-6 rounded shadow max-w-lg mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Flowbite Modal</h2>
            <button data-modal-hide="demoModal" className="w-8 h-8">×</button>
          </div>
          <p>Flowbite is wired.</p>
        </div>
      </div>
    </main>
  )
}