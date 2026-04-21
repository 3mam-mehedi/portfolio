import { useState, useEffect } from "react";

const educations = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    institute: "Habibullah Bahar College (Under National University)",
    desc: "Focused on Web Development and Software Engineering",
    project: "IoT-Based Smart Traffic Light System",
    projectLink: "#",
    img: "/assets/edu/habibullah.jpg",
    session: "2016-17, Graduation: 2020",
    cgpa: "2.50",
  },
  {
    title: "HIGHER SCHOOL CERTIFICATE",
    institute: "Kabi Nazrul Govt. College",
    desc: "Science background with strong tech interest",
    img: "/assets/edu/kabi.jpg",
    exam: "2016",
    gpa: "3.92 out of 5.00",
  },
  {
    title: "SECONDARY SCHOOL CERTIFICATE",
    institute: "Nawabpur Govt. High School",
    desc: "Science background with strong tech interest",
    img: "/assets/edu/nawab.jpg",
    exam: "2014",
    gpa: "4.25 out of 5.00",
  },
];

// Typing animation
function LoopingTyping({ text, speed = 160, pause = 1200 }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === text.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) setDeleting(false);
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [index, deleting, text, speed, pause]);

  return (
    <h1 className="text-3xl font-extrabold mt-2 
      bg-gradient-to-r from-[#0968E5] to-[#091970] 
      bg-clip-text text-transparent">
      {displayed}
      <span className="animate-pulse">|</span>
    </h1>
  );
}

function Educations() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % educations.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center overflow-hidden px-4 pt-20">

      {/* Header (Static, no animation) */}
      <div className="text-center mb-6">
      <LoopingTyping text="Education" />
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[480px] flex items-center justify-center -mt-4">
        {educations.map((item, index) => {
          const position = (index - active + educations.length) % educations.length;

          let style = "";
          if (position === 0)
            style = "scale-100 opacity-100 z-30 translate-x-0 rotate-0";
          else if (position === 1)
            style = "scale-90 opacity-40 z-20 translate-x-[320px] rotate-6";
          else
            style = "scale-90 opacity-40 z-20 -translate-x-[320px] -rotate-6";

          return (
            <div
              key={index}
              className={`absolute w-[360px] md:w-[500px] p-6 rounded-3xl
                backdrop-blur-xl bg-white/5 border border-white/10
                shadow-2xl transition-all duration-700 ${style}`}
            >
              <div className="space-y-4">

                {/* Header */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 rounded-full border-2 border-blue-500"
                  />
                  <h3 className="text-white font-semibold text-lg md:text-xl truncate">
                    {item.title}
                  </h3>
                </div>

                {/* Institute Gradient */}
                <span className="text-sm font-semibold tracking-wide 
                  bg-gradient-to-r from-[#00EE6E] to-[#0C75E6] 
                  bg-clip-text text-transparent">
                  {item.institute}
                </span>

                {/* Shining Badges */}
                {item.session && item.cgpa && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge">Session: {item.session}</span>
                    <span className="badge">CGPA: {item.cgpa} / 4.00</span>
                  </div>
                )}

                {item.exam && item.gpa && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge">Exam: {item.exam}</span>
                    <span className="badge">GPA: {item.gpa}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-white/70 text-sm">{item.desc}</p>

                {/* Project */}
                {item.project && (
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-white/60">
                      Final Year Project
                    </p>
                    <a
                      href={item.projectLink}
                      target="_blank"
                      className="text-sm text-blue-400"
                    >
                      {item.project} →
                    </a>
                  </div>
                )}

              </div>
            </div>
          );
        })}
      </div>

      {/* Shine Badge Style */}
      <style>
        {`
        .badge {
          position: relative;
          padding: 4px 12px;
          font-size: 11px;
          border-radius: 6px;
          color: white;
          background: linear-gradient(90deg, #0968E5, #091970);
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
          box-shadow: 0 0 10px rgba(9,104,229,0.4);
        }

        .badge::before {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.6),
            transparent
          );
          transform: skewX(-25deg);
          animation: shine 2.5s infinite;
        }

        @keyframes shine {
          0% { left: -75%; }
          100% { left: 125%; }
        }
        `}
      </style>

    </div>
  );
}

export default Educations;