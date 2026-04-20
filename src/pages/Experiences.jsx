"use client";
import * as React from "react";
import { FaBuilding, FaReact, FaHtml5, FaFileExcel } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiAltiumdesigner } from "react-icons/si";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineDataExploration, MdAttachEmail } from "react-icons/md";

export default function Experiences() {
  // Typing animation
  const text = "Professional Experiences";
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
    <section className="py-20">
      {/* ✅ SVG Gradient Definition */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9FCCFA" />
            <stop offset="100%" stopColor="#0974F1" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-[#0968E5] to-[#091970] bg-clip-text text-transparent tracking-wide">
          {displayText}
          <span className="animate-pulse">|</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          {/* CARD 1 */}
          <div className="group w-full md:w-[44%] h-72" style={{ perspective: "1000px" }}>
            <div className="relative w-full h-full duration-700" style={{ transformStyle: "preserve-3d" }}>

              {/* FRONT */}
              <div
                className="absolute w-full h-full rounded-xl flex flex-col justify-center items-center p-6 text-white text-center backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#00EE6E] to-[#0C75E6] bg-clip-text text-transparent">
                  PROJECT REPORT WRITER
                </h2>

                <p className="text-sm text-slate-300 flex items-center gap-2">
                  <FaBuilding style={{ fill: "url(#buildingGradient)" }} />
                  Landco Solar Company Ltd. Dhaka
                </p>
              </div>

              {/* BACK */}
              <div
                className="absolute w-full h-full rounded-xl flex flex-col justify-center items-center p-6 text-white text-center backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl"
                style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
              >
                <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#00EE6E] to-[#0C75E6] bg-clip-text text-transparent">
                  On Site
                </h2>

                <div className="flex flex-wrap justify-center gap-2">
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <PiMicrosoftWordLogoFill className="text-[#1D4ED8]" /> MS Office
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <FaFileExcel className="text-[#217346]" /> Excel
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <TbReportSearch className="text-[#F59E0B]" /> Research
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <MdOutlineDataExploration className="text-[#6366F1]" /> Data Analysis
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <MdAttachEmail className="text-[#06B6D4]" /> Email Communication
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <SiAltiumdesigner className="text-[#F97316]" /> Report Design
                  </span>
                </div>
              </div>

              <style>{`.group:hover > div { transform: rotateY(180deg); }`}</style>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group2 w-full md:w-[44%] h-72" style={{ perspective: "1000px" }}>
            <div className="relative w-full h-full duration-700" style={{ transformStyle: "preserve-3d" }}>

              {/* FRONT */}
              <div
                className="absolute w-full h-full rounded-xl flex flex-col justify-center items-center p-6 text-white text-center backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#00EE6E] to-[#0C75E6] bg-clip-text text-transparent">
                  Frontend Developer
                </h2>

                <p className="text-sm text-slate-300 flex items-center gap-2">
                  <FaBuilding style={{ fill: "url(#buildingGradient)" }} />
                  Kitsware Technology
                </p>
              </div>

              {/* BACK */}
              <div
                className="absolute w-full h-full rounded-xl flex flex-col justify-center items-center p-6 text-white text-center backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl"
                style={{ transform: "rotateX(180deg)", backfaceVisibility: "hidden" }}
              >
                <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#00EE6E] to-[#0C75E6] bg-clip-text text-transparent">
                  Remote
                </h2>

                <div className="flex flex-wrap justify-center gap-2">
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <FaReact className="text-[#61DAFB]" /> React
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <SiTailwindcss className="text-[#38BDF8]" /> Tailwind Css
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <SiJavascript className="text-[#F7DF1E]" /> JavaScript
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <FaHtml5 className="text-[#E34F26]" /> Responsive Design
                  </span>
                </div>
              </div>

              <style>{`.group2:hover > div { transform: rotateX(180deg); }`}</style>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}