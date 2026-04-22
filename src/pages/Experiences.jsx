"use client";
import * as React from "react";
import {
  FaBuilding,
  FaReact,
  FaFileExcel,
  FaMobileAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineDataExploration } from "react-icons/md";

export default function Experiences() {
  const text = "Experiences";
  const [displayText, setDisplayText] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && index < text.length) {
      setTimeout(() => {
        setDisplayText(text.substring(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      setTimeout(() => {
        setDisplayText(text.substring(0, index - 1));
        setIndex(index - 1);
      }, speed);
    } else if (index === text.length) {
      setTimeout(() => setIsDeleting(true), 1200);
    } else if (index === 0) {
      setIsDeleting(false);
    }
  }, [index, isDeleting]);

  return (
    <section className="py-10">

      <svg width="0" height="0">
        <defs>
          <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9FCCFA" />
            <stop offset="100%" stopColor="#0974F1" />
          </linearGradient>

          <linearGradient id="titleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00EE6E" />
            <stop offset="100%" stopColor="#0C75E6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-[#0968E5] to-[#091970] bg-clip-text text-transparent">
          {displayText}
          <span className="animate-pulse">|</span>
        </h2>

        <div className="flex flex-col items-center gap-6">

          {/* CARD 1 */}
          <div className="group w-full max-w-lg h-52" style={{ perspective: "1000px" }}>
            <div className="relative w-full h-full duration-700" style={{ transformStyle: "preserve-3d" }}>

              {/* FRONT */}
              <div
                className="absolute w-full h-full rounded-xl flex flex-col justify-center items-center p-6 text-white text-center backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl overflow-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="group-hover:-top-3 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
                <div className="group-hover:top-60 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
                <div className="group-hover:-left-12 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
                <div className="group-hover:left-44 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all duration-1000 w-44 h-44" />

                <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#00EE6E] to-[#0C75E6] bg-clip-text text-transparent">
                  PROJECT REPORT WRITER
                </h2>

                <p className="text-sm text-slate-300 flex items-center gap-2">
                  <FaBuilding style={{ fill: "url(#buildingGradient)" }} />
                  Landco Solar Company Ltd. Dhaka
                </p>
              </div>

              {/* BACK */}
              <div
                className="absolute w-full h-full rounded-xl flex flex-col justify-center items-center p-4 text-white text-center backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl overflow-hidden"
                style={{ transform: "rotateX(180deg)", backfaceVisibility: "hidden" }}
              >
                <div className="group-hover:-top-3 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
                <div className="group-hover:top-60 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
                <div className="group-hover:-left-12 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
                <div className="group-hover:left-44 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all duration-1000 w-44 h-44" />

                {/* SAME GRADIENT TITLE BACK SIDE */}
                <h2 className="text-lg font-bold mb-2 bg-gradient-to-r from-[#00EE6E] to-[#0C75E6] bg-clip-text text-transparent">
                  PROJECT REPORT WRITER
                </h2>

                <h3 className="text-sm text-slate-300 mb-3">On Site</h3>

                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  <span className="bg-white/20 px-2 py-1 rounded flex items-center gap-1 text-yellow-300">
                    <PiMicrosoftWordLogoFill /> MS Office
                  </span>

                  <span className="bg-white/20 px-2 py-1 rounded flex items-center gap-1 text-green-300">
                    <FaFileExcel /> Excel
                  </span>

                  <span className="bg-white/20 px-2 py-1 rounded flex items-center gap-1 text-pink-300">
                    <TbReportSearch /> Research
                  </span>

                  <span className="bg-white/20 px-2 py-1 rounded flex items-center gap-1 text-blue-300">
                    <MdOutlineDataExploration /> Data
                  </span>
                </div>
              </div>

              <style>{`.group:hover > div { transform: rotateX(180deg); }`}</style>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group w-full max-w-lg h-52" style={{ perspective: "1000px" }}>
            <div className="relative w-full h-full duration-700" style={{ transformStyle: "preserve-3d" }}>

              {/* FRONT */}
              <div
                className="absolute w-full h-full rounded-xl flex flex-col justify-center items-center p-6 text-white text-center backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl overflow-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="group-hover:-top-3 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
                <div className="group-hover:top-60 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
                <div className="group-hover:-left-12 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
                <div className="group-hover:left-44 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all duration-1000 w-44 h-44" />

                <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#00EE6E] to-[#0C75E6] bg-clip-text text-transparent">
                  Frontend Developer
                </h2>

                <p className="text-sm text-slate-300 flex items-center gap-2">
                  <FaBuilding style={{ fill: "url(#buildingGradient)" }} />
                  Kitsware Technology
                </p>
              </div>

              {/* BACK */}
              <div
                className="absolute w-full h-full rounded-xl flex flex-col justify-center items-center p-4 text-white text-center backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl overflow-hidden"
                style={{ transform: "rotateX(180deg)", backfaceVisibility: "hidden" }}
              >
                <div className="group-hover:-top-3 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
                <div className="group-hover:top-60 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
                <div className="group-hover:-left-12 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
                <div className="group-hover:left-44 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all duration-1000 w-44 h-44" />

                <h2 className="text-lg font-bold mb-2 bg-gradient-to-r from-[#00EE6E] to-[#0C75E6] bg-clip-text text-transparent">
                  Frontend Developer
                </h2>

                <h3 className="text-sm text-slate-300 mb-3">Remote</h3>

                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  <span className="bg-white/20 px-2 py-1 rounded flex items-center gap-1 text-cyan-300">
                    <FaReact /> React
                  </span>

                  <span className="bg-white/20 px-2 py-1 rounded flex items-center gap-1 text-sky-300">
                    <SiTailwindcss /> Tailwind
                  </span>

                  <span className="bg-white/20 px-2 py-1 rounded flex items-center gap-1 text-yellow-300">
                    <SiJavascript /> JS
                  </span>

                  <span className="bg-white/20 px-2 py-1 rounded flex items-center gap-1 text-green-300">
                    <FaMobileAlt /> Responsive
                  </span>
                </div>
              </div>

              <style>{`.group:hover > div { transform: rotateX(180deg); }`}</style>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}