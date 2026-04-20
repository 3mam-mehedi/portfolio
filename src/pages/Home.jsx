import { useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Balloons } from "../components/Balloons";

export default function Home() {
  const text = "Emam Mehedi";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const hireBtnRef = useRef(null);
  const balloonsRef = useRef(null);

  // Typing effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, index + 1));
        setIndex(index + 1);

        if (index === text.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(text.substring(0, index - 1));
        setIndex(index - 1);

        if (index === 0) setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  // Ripple effect
  const createRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      e.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      e.clientY - button.getBoundingClientRect().top - radius
    }px`;

    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  // Magnetic effect
  const handleMouseMove = (e) => {
    const btn = hireBtnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const resetMagnet = () => {
    if (hireBtnRef.current)
      hireBtnRef.current.style.transform = "translate(0,0)";
  };

  // Download CV + Balloons
  const handleDownloadCV = () => {
    if (balloonsRef.current) balloonsRef.current.launchAnimation();

    const link = document.createElement("a");
    link.href = "/assets/Emam Mehedi.cv.pdf";
    link.download = "Emam-Mehedi-CV.pdf";
    link.click();
  };

  return (
    <section className="py-2 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-[#0968E5] to-[#091970] bg-clip-text text-transparent">
            {displayText}
            <span className="animate-blink">|</span>
          </span>
        </h1>

        {/* ✅ Fixed Gradient Text */}
        <p className="bg-gradient-to-r from-[#00EE6E] to-[#0C75E6] bg-clip-text text-transparent mt-4 font-semibold">
          Frontend Developer
        </p>

        {/* Description */}
        <p className="mt-3 text-white max-w-2xl mx-auto">
          A passionate Frontend Developer with a focus on UI/UX, creating intuitive and visually
          engaging digital experiences. Skilled in React, JavaScript, and Tailwind CSS, I build 
          responsive and scalable web applications. I also have experience in IoT and embedded 
          systems, combining software and smart solutions to develop real-world projects.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          {/* Hire Me */}
          <button
            ref={hireBtnRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetMagnet}
            onClick={createRipple}
            className="hire-btn relative px-8 py-3 rounded-xl text-white font-semibold flex items-center gap-2 
                       bg-gradient-to-r from-[#0968E5] to-[#091970] shadow-lg overflow-hidden transition duration-300"
          >
            Hire Me <FaArrowRight />
          </button>

          {/* Download CV */}
          <button
            onClick={handleDownloadCV}
            className="download-btn group relative px-8 py-3 rounded-xl font-semibold flex items-center gap-2 overflow-hidden border-2 border-[#0968E5]"
          >
            <span
              className="bg-fill absolute top-0 left-[-100%] w-full h-full 
              bg-gradient-to-r from-[#0968E5] to-[#091970] transition-all duration-300 z-0"
            ></span>

            <span className="relative z-10 flex items-center gap-2 text-[#0968E5] group-hover:text-white transition">
              <FiDownload className="text-lg" /> Download CV
            </span>
          </button>
        </div>
      </div>

      {/* Balloons */}
      <Balloons ref={balloonsRef} type="default" />

      {/* Styles */}
      <style>
        {`
          .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 700ms linear;
            background-color: rgba(255, 255, 255, 0.3);
          }

          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }

          .hire-btn:hover {
            box-shadow: 0 0 30px rgba(9, 104, 229, 0.6);
          }

          .animate-blink {
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0%,50%,100% { opacity:1; }
            25%,75% { opacity:0; }
          }

          .download-btn:hover .bg-fill {
            left: 0;
          }
        `}
      </style>
    </section>
  );
}