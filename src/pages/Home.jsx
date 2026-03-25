import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Hi, I’m [Your Name]</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          I build modern, responsive web experiences with React and Tailwind CSS. Explore
          my work and stories below.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            View Projects
          </Link>
          <Link to="/about" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-100 transition">
            About Me
          </Link>
        </div>
      </div>
    </section>
  )
}
