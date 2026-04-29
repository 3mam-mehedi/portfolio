import { useState, useEffect } from "react";

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
  }, [index, deleting, text]);

  return (
    <h1 className="text-3xl font-extrabold mt-2 
      bg-gradient-to-r from-[#0968E5] to-[#091970] 
      bg-clip-text text-transparent text-center">
      {displayed}
      <span className="animate-pulse">|</span>
    </h1>
  );
}

const educations = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    institute1: "Habibullah Bahar College",
    institute2: "(Under National University)",
    desc: "Focused on Web Development and Software Engineering",
    project: "IoT-Based Smart Traffic Light System",
    projectLink: "#",
    img: "/assets/edu/habibullah.jpg",
    session: "2016-17, Graduation: 2020",
    cgpa: "2.50",
  },
  {
    title: "HIGHER SCHOOL CERTIFICATE",
    institute1: "Kabi Nazrul Govt. College",
    institute2: "",
    desc: "Science background with strong tech interest",
    img: "/assets/edu/kabi.jpg",
    exam: "2016",
    gpa: "3.92 out of 5.00",
  },
  {
    title: "SECONDARY SCHOOL CERTIFICATE",
    institute1: "Nawabpur Govt. High School",
    institute2: "",
    desc: "Science background with strong tech interest",
    img: "/assets/edu/nawab.jpg",
    exam: "2014",
    gpa: "4.25 out of 5.00",
  },
];

export default function Educations() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 overflow-x-hidden">

      <div className="mb-6">
        <LoopingTyping text="Education" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-22 w-full max-w-4xl">

        {educations.map((item, index) => {
          return (
            <div
              key={index}
              className={`group relative cursor-pointer w-full p-4 rounded-2xl
                backdrop-blur-xl bg-white/5 border border-white/10
                shadow-xl overflow-hidden
                sm:text-center sm:justify-center
                ${index === 0 ? "sm:col-span-2" : ""}`}
            >

              {/* 🔥 Animation Layer */}
              <div className="group-hover:-top-3 bg-transparent -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
              <div className="group-hover:top-60 bg-transparent top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
              <div className="group-hover:-left-12 bg-transparent top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
              <div className="group-hover:-top-44 bg-transparent top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all duration-1000 w-12 h-12" />
              <div className="group-hover:left-44 bg-transparent top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all duration-1000 w-44 h-44" />
              <div className="group-hover:-left-2 bg-transparent -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-64 h-64" />
              <div className="group-hover:top-44 bg-transparent top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all duration-1000 w-4 h-4" />

              {/* 🔥 Content */}
              <div className="relative z-10 space-y-3 text-left sm:text-center">

                {/* HEADER */}
                <div className="flex items-center gap-2 sm:justify-center">
                  <img
                    src={item.img}
                    className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover shrink-0"
                  />

                  <h3 className="text-white font-semibold text-sm sm:text-lg">
                    {index === 0 ? (
                      <>
                        <span className="sm:hidden">B.Sc. in CSE</span>
                        <span className="hidden sm:inline">
                          B.Sc. in Computer Science & Engineering
                        </span>
                      </>
                    ) : (
                      item.title
                    )}
                  </h3>
                </div>

                {/* INSTITUTE */}
                <div className="sm:text-center">
                  <p className="text-md font-semibold bg-gradient-to-r from-[#00EE6E] to-[#0C75E6] bg-clip-text text-transparent">
                    {item.institute1}
                  </p>

                  {item.institute2 && (
                    <p className="text-md font-semibold bg-gradient-to-r from-[#00EE6E] to-[#0C75E6] bg-clip-text text-transparent">
                      {item.institute2}
                    </p>
                  )}
                </div>

                {/* DESCRIPTION */}
                <p className="text-white/70 text-xs">
                  {item.desc}
                </p>

                {/* BADGES */}
                {(item.session || item.cgpa) && (
                  <div className="flex flex-row flex-wrap gap-2 mt-1 sm:justify-center">
                    <span className="badge">Session: {item.session}</span>
                    <span className="badge">CGPA: {item.cgpa} / 4.00</span>
                  </div>
                )}

                {(item.exam || item.gpa) && (
                  <div className="flex flex-row flex-wrap gap-2 mt-1 sm:justify-center">
                    <span className="badge">Exam: {item.exam}</span>
                    <span className="badge">GPA: {item.gpa}</span>
                  </div>
                )}

                {/* PROJECT */}
                {item.project && (
                  <div className="
                    p-2 rounded-lg bg-white/5 border border-white/10
                    w-full sm:w-[42%]
                    mx-0 sm:mx-auto
                  ">
                    <p className="text-[13px] text-white/90">
                      Final Year Project
                    </p>
                    <a
                      href={item.projectLink}
                      className="text-sm text-blue-400 hover:underline"
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

      {/* BADGE STYLE */}
      <style>{`
        .badge {
          position: relative;
          padding: 5px 10px;
          font-size: 12px;
          border-radius: 6px;
          color: white;
          background: linear-gradient(90deg,#0968E5,#091970);
          border: 1px solid rgba(255,255,255,0.1);
          white-space: nowrap;
          overflow: hidden;
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
      `}</style>

    </div>
  );
}