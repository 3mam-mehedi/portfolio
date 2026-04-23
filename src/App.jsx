import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Background from './components/Background'
import Profile from './components/Profile'
import Home from './pages/Home'
import Experiences from './pages/Experiences'
import Educations from './pages/Educations'
import Specializations from './pages/Specializations'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Skills from './pages/Skills'

export default function App() {
  useEffect(() => {
    console.log('App mounted')
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative z-10">
      <Navbar />
      <Background />
      <Profile />

      {/* Main Content */}
      <main className="min-h-screen lg:ml-40 pt-6 md:pt-8 lg:pt-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/specializations" element={<Specializations />} />
            <Route path="/educations" element={<Educations />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}