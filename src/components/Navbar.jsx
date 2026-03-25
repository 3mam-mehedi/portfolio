import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Education', path: '/education' },
  { name: 'Works', path: '/works' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-50">
      
      <nav className="bg-white/70 backdrop-blur-lg border border-slate-200 shadow-xl rounded-2xl px-6 py-3">
        
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-xl font-bold text-orange-600">
            My Portfolio
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-pink-600 font-semibold'
                      : 'hover:text-pink-600 transition'
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 mt-3' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'block px-3 py-2 rounded-md text-pink-600 bg-pink-50'
                      : 'block px-3 py-2 rounded-md hover:bg-pink-50 hover:text-black'
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  )
}