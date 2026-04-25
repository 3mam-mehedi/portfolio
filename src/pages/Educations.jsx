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

// Typing Animation
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
    <h1 className="text-2xl font-extrabold mt-2 
      bg-gradient-to-r from-[#0968E5] to-[#091970] 
      bg-clip-text text-transparent">
      {displayed}
      <span className="animate-pulse">|</span>
    </h1>
  );
}

function Educations() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4">

      {/* Header */}
      <div className="text-center mb-6">
        <LoopingTyping text="Education" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">

        {educations.map((item, index) => (
          <div
            key={index}
            className={`w-full p-4 rounded-2xl
              backdrop-blur-xl bg-white/5 border border-white/10
              shadow-xl transition-all duration-300 hover:scale-[1.05]
              ${index === 0 ? "sm:col-span-2" : ""}
            `}
          >
            <div className={`space-y-3 ${index === 0 ? "text-center flex flex-col items-center" : ""}`}>

              {/* Header */}
              <div className={`flex items-center gap-2 ${index === 0 ? "justify-center" : ""}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
                />
                <h3 className="text-white font-semibold text-base md:text-lg">
                  {item.title}
                </h3>
              </div>

              {/* Institute */}
              <span className="text-xs font-semibold tracking-wide 
                bg-gradient-to-r from-[#00EE6E] to-[#0C75E6] 
                bg-clip-text text-transparent">
                {item.institute}
              </span>

              {/* Badges */}
              {item.session && item.cgpa && (
                <div className="flex flex-wrap gap-2 mt-1 justify-center">
                  <span className="badge">Session: {item.session}</span>
                  <span className="badge">CGPA: {item.cgpa} / 4.00</span>
                </div>
              )}

              {item.exam && item.gpa && (
                <div className="flex flex-wrap gap-2 mt-1 justify-center">
                  <span className="badge">Exam: {item.exam}</span>
                  <span className="badge">GPA: {item.gpa}</span>
                </div>
              )}

              {/* Description */}
              <p className="text-white/70 text-xs">{item.desc}</p>

              {/* Project */}
              {item.project && (
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-[10px] text-white/60">
                    Final Year Project
                  </p>
                  <a
                    href={item.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:underline"
                  >
                    {item.project} →
                  </a>
                </div>
              )}

            </div>
          </div>
        ))}

      </div>

      {/* Badge Style */}
      <style>
        {`
        .badge {
          position: relative;
          padding: 3px 10px;
          font-size: 10px;
          border-radius: 5px;
          color: white;
          background: linear-gradient(90deg, #0968E5, #091970);
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
          box-shadow: 0 0 8px rgba(9,104,229,0.3);
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
            rgba(255,255,255,0.5),
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