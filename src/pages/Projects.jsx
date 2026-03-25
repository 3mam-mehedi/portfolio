export default function Projects() {
  const projects = [
    { title: 'Productive CRM', desc: 'React + Node.js business CRM with custom dashboard.' },
    { title: 'E-commerce Store', desc: 'Fullstack store with Stripe payments and admin panel.' },
    { title: 'SaaS Marketing Site', desc: 'High-performance marketing landing page with A/B testing support.' },
  ]

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="border p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-slate-900">{project.title}</h3>
              <p className="mt-2 text-slate-700">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
