export default function Works() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Works</h2>
        <p className="text-slate-700 mb-8">Professional experiences & freelance collaborations where I solved meaningful business problems.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="border p-5 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold">Frontend Developer @ Company</h3>
            <p className="text-sm text-slate-500">2023 - Present</p>
            <p className="mt-2 text-slate-700">Built component-driven UIs with React and Tailwind. Improved page performance by 40%.</p>
          </article>
          <article className="border p-5 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold">UI Engineer @ Agency</h3>
            <p className="text-sm text-slate-500">2022 - 2023</p>
            <p className="mt-2 text-slate-700">Delivered polished landing pages for 15+ clients with high-conversion design and cross-browser quality.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
