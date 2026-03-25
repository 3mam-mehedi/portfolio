export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-900 text-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-center">
        <p>© {new Date().getFullYear()} My Portfolio. Built with React + Tailwind CSS.</p>
      </div>
    </footer>
  )
}
