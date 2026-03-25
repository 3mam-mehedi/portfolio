export default function Contact() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact</h2>
        <p className="text-slate-700 mb-8">
          Let’s build something great together. Drop me a message and I’ll get back to you shortly.
        </p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          <input type="email" placeholder="Your Email" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          <textarea rows="5" placeholder="Message" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
