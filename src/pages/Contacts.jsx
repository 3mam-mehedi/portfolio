import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      /* Button Styles */
      .button {
        --primary: #ff5569;
        --radius: 14px;
        cursor: pointer;
        border-radius: var(--radius);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        min-width: 220px;
        padding: 16px 28px;
        height: 60px;
        font-family: 'Galano Grotesque', Poppins, Montserrat, sans-serif;
        font-size: 18px;
        font-weight: 600;
        overflow: hidden;
        transition: all 0.3s ease;
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 30px rgba(0,0,0,0.1);
      }
      .button:hover { transform: scale(1.02); }
      .button:active { transform: scale(1); }
      .outline { position: absolute; inset: -2px -3px; border-radius: inherit; opacity: 0; z-index: 0; transition: opacity 0.4s ease; }
      .button:hover .outline { opacity: 1; }
      .state { display: flex; align-items: center; position: relative; gap: 8px; z-index: 2; }
      .state p { display: flex; align-items: center; gap: 1px; margin: 0; }
      .state p span { display: inline-block; opacity: 0; animation: slideDown 0.8s ease forwards calc(var(--i)*0.03s); }
      .button:hover .state--default p span { animation: wave 0.5s ease forwards calc(var(--i)*0.02s); opacity:1; }
      @keyframes slideDown { 0% { opacity:0; transform: translateY(-15px); } 50% { opacity:1; transform: translateY(3px); } 100% { opacity:1; transform: translateY(0); } }
      @keyframes wave { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); color: var(--primary); } }
      .state .icon { display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 24px; height: 24px; }
      .state--default .icon svg { animation: land 0.6s ease forwards; }
      .button:hover .state--default .icon { transform: rotate(20deg); }
      .button:focus .state--default svg { animation: takeOff 0.8s linear forwards; }
      @keyframes takeOff { 0% { opacity:1; } 60% { transform: translateX(70px) rotate(20deg) scale(1.5); opacity:1; } 100% { transform: translateX(140px) rotate(20deg) scale(0); opacity:0; } }
      @keyframes land { 0% { transform: translateX(-30px) rotate(-20deg); opacity:0; } 100% { transform: translateX(0) rotate(0deg); opacity:1; } }
      .state--sent { display: none; }
      .button:focus .state--default { display: none; }
      .button:focus .state--sent { display: flex; }
      .button:focus .state--sent span { opacity:0; animation: slideDown 0.6s ease forwards calc(var(--i)*0.1s); }
      .button:focus .state--sent .icon svg { opacity:0; animation: appear 1s ease forwards 0.2s; }
      @keyframes appear { 0% { opacity:0; transform: scale(2) rotate(-20deg); } 50% { opacity:1; transform: scale(0.8); } 100% { opacity:1; transform: scale(1); } }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-full w-full overflow-hidden">
      {/* Left Design */}
      <div className="relative flex items-center justify-center w-full md:w-1/2 bg-gradient-to-r from-[#0968E5] to-[#091970]">
        <div className="absolute -top-2 left-1/5 h-16 w-16 rounded-full bg-gradient-to-r from-[#0968E5] to-[#091970]"></div>
        <div className="absolute bottom-1/5 left-1/5 h-20 w-20 rounded-full bg-gradient-to-r from-[#0968E5] to-[#091970]"></div>
        <div className="absolute -right-7 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#0968E5] to-[#091970]"></div>
        <div className="absolute left-1/2 top-1/4 h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0968E5] to-[#091970]"></div>
        <div className="z-10 space-y-2 text-center px-4 mt-16">
          <h2 className="text-3xl font-medium text-white/80">Get in Touch</h2>
          <p className="animate-pulse text-sm text-white/60">We’d love to hear from you!</p>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex w-full flex-col justify-center bg-white py-10 md:w-1/2 dark:bg-zinc-900">
        <h2 className="pb-8 text-center text-3xl font-semibold tracking-tight text-[#0968E5]">Contact Us</h2>
        <form className="flex w-full flex-col items-center justify-center gap-4 px-4">
          <input className="w-full max-w-md rounded-lg border border-[#0968E5] bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#0968E5]/50 dark:text-zinc-400" type="text" placeholder="Your Name" name="name" />
          <input className="w-full max-w-md rounded-lg border border-[#0968E5] bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#0968E5]/50 dark:text-zinc-400" type="email" placeholder="Your Email" name="email" />
          <input className="w-full max-w-md rounded-lg border border-[#0968E5] bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#0968E5]/50 dark:text-zinc-400" type="text" placeholder="Subject" name="subject" />
          <textarea className="w-full max-w-md rounded-lg border border-[#0968E5] bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#0968E5]/50 dark:text-zinc-400" placeholder="Message" rows={5} name="message"></textarea>

          {/* Animated Button */}
          <button className="button" type="submit">
            <div className="outline"></div>
            <div className="state state--default">
              <div className="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
              </div>
              <p>{"Send Message".split("").map((l,i)=>(<span key={i} style={{"--i":i}}>{l}</span>))}</p>
            </div>
            <div className="state state--sent">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 15l-3-3 1.41-1.41L10 12.17l5.59-5.59L17 8l-7 7z"/>
                </svg>
              </div>
              <p>{"Sent".split("").map((l,i)=>(<span key={i} style={{"--i":i}}>{l}</span>))}</p>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
