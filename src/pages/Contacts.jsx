import { useEffect, useState } from "react";

export default function Contact() {
  // 🔥 Typing Animation State
  const text = "Contact Us";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  // 🔥 Typing animation
  useEffect(() => {
    const speed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(text.substring(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  // 🔥 Mobile scroll ON, Desktop OFF
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyHeight = body.style.height;

    const handleResize = () => {
      if (window.innerWidth < 768) {
        // 📱 Mobile → scroll ON
        html.style.overflow = "auto";
        body.style.overflow = "auto";
        body.style.height = "auto";
      } else {
        // 💻 Desktop → scroll OFF
        html.style.overflow = "hidden";
        body.style.overflow = "hidden";
        body.style.height = "100vh";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.height = prevBodyHeight;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 🔥 Styles injection (unchanged)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .button {
        --primary: #0968E5;
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

      .outline {
        position: absolute;
        inset: -2px -3px;
        border-radius: inherit;
        opacity: 0;
        z-index: 0;
        transition: opacity 0.4s ease;
      }

      .button:hover .outline { opacity: 1; }

      .state {
        display: flex;
        align-items: center;
        position: relative;
        gap: 8px;
        z-index: 2;
      }

      .state p {
        display: flex;
        align-items: center;
        gap: 1px;
        margin: 0;
      }

      .state p span {
        display: inline-block;
        opacity: 0;
        animation: slideDown 0.8s ease forwards calc(var(--i)*0.03s);
      }

      .button:hover .state--default p span {
        animation: wave 0.5s ease forwards calc(var(--i)*0.02s);
        opacity:1;
      }

      @keyframes slideDown {
        0% { opacity:0; transform: translateY(-15px); }
        50% { opacity:1; transform: translateY(3px); }
        100% { opacity:1; transform: translateY(0); }
      }

      @keyframes wave {
        0%,100% { transform: translateY(0); }
        50% { transform: translateY(-4px); color: var(--primary); }
      }

      .state .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
      }

      .state--default .icon svg { animation: land 0.6s ease forwards; }

      .button:hover .state--default .icon {
        transform: rotate(20deg);
      }

      .button:focus .state--default svg {
        animation: takeOff 0.8s linear forwards;
      }

      @keyframes takeOff {
        0% { opacity:1; }
        60% { transform: translateX(70px) rotate(20deg) scale(1.5); opacity:1; }
        100% { transform: translateX(140px) rotate(20deg) scale(0); opacity:0; }
      }

      @keyframes land {
        0% { transform: translateX(-30px) rotate(-20deg); opacity:0; }
        100% { transform: translateX(0) rotate(0deg); opacity:1; }
      }

      .state--sent { display: none; }

      .button:focus .state--default { display: none; }
      .button:focus .state--sent { display: flex; }

      .state--sent span {
        opacity:0;
        animation: slideDown 0.6s ease forwards calc(var(--i)*0.1s);
      }

      @keyframes blink {
        0%,100% { opacity:1; }
        50% { opacity:0; }
      }

      .typing-cursor {
        display: inline-block;
        margin-left: 4px;
        animation: blink 1s infinite;
        color: #0968E5;
      }

      @keyframes float {
        0% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-20px) scale(1.05); }
        100% { transform: translateY(0px) scale(1); }
      }

      .circle-anim {
        animation: float 6s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="w-full overflow-hidden">

      {/* 🔥 Typing Title */}
      <h1 className="text-center text-3xl font-bold text-[#0968E5] mb-6">
        {displayText}
        <span className="typing-cursor"></span>
      </h1>

      <div className="flex flex-col rounded-md md:flex-row w-full">

        {/* Left */}
        <div className="relative flex items-center justify-center w-full md:w-1/2 bg-gradient-to-r from-[#0968E5] to-[#091970]">

          <div className="circle-anim absolute -top-2 left-1/5 h-16 w-16 rounded-full bg-gradient-to-r from-[#0968E5] to-[#091970]" />
          <div className="circle-anim absolute bottom-1/5 left-1/5 h-20 w-20 rounded-full bg-gradient-to-r from-[#0968E5] to-[#091970]" style={{ animationDelay: "1s" }} />
          <div className="circle-anim absolute -right-7 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#0968E5] to-[#091970]" style={{ animationDelay: "2s" }} />
          <div className="circle-anim absolute left-1/2 top-1/4 h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0968E5] to-[#091970]" style={{ animationDelay: "3s" }} />

          <div className="z-10 space-y-2 text-center px-4 mt-16">
            <h2 className="text-3xl font-medium text-white/80">Get in Touch</h2>
            <p className="animate-pulse text-sm text-white/60">
              We’d love to hear from you!
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="flex w-full flex-col justify-end pb-4 lg:pb-16 bg-white md:w-1/2 dark:bg-zinc-900">

          <form className="flex w-full flex-col mt-2 lg:mt-12 items-center justify-center gap-3 lg:gap-4 px-4">

            <input className="w-full max-w-md rounded-lg border border-[#0968E5] py-2 pl-4 text-zinc-600" type="text" placeholder="Your Name" />

            <input className="w-full max-w-md rounded-lg border border-[#0968E5] py-2 pl-4 text-zinc-600" type="email" placeholder="Your Email" />

            <input className="w-full max-w-md rounded-lg border border-[#0968E5] py-2 pl-4 text-zinc-600" type="text" placeholder="Subject" />

            <textarea className="w-full max-w-md rounded-lg border border-[#0968E5] py-2 pl-4 text-zinc-600" placeholder="Message" rows={3}></textarea>

            <button className="button" type="submit">
              <div className="outline"></div>

              <div className="state state--default">
                <div className="icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                  </svg>
                </div>
                <p>
                  {"Send Message".split("").map((l, i) => (
                    <span key={i} style={{ "--i": i }}>{l}</span>
                  ))}
                </p>
              </div>

              <div className="state state--sent">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 15l-3-3 1.41-1.41L10 12.17l5.59-5.59L17 8l-7 7z"/>
                  </svg>
                </div>
                <p>
                  {"Sent".split("").map((l, i) => (
                    <span key={i} style={{ "--i": i }}>{l}</span>
                  ))}
                </p>
              </div>

            </button>

          </form>
        </div>
      </div>
    </div>
  );
}