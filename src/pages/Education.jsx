export default function Education() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Education</h2>
        <ul className="space-y-4 text-slate-700">
          <li className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold">B.Sc. in Computer Science</h3>
            <p className="text-sm text-slate-500">University Name • 2018 - 2022</p>
            <p className="mt-2">Focus: Web Development, UI/UX design, algorithms, and databases.</p>
          </li>
          <li className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold">Relevant Coursework</h3>
            <p className="text-sm text-slate-500">React, Node.js, Data Structures, DevOps Awareness.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
