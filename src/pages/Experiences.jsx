"use client";
import * as React from "react";
import { FaBuilding, FaReact, FaHtml5, FaFileExcel } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiAltiumdesigner } from "react-icons/si";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineDataExploration, MdAttachEmail } from "react-icons/md";

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
    <section>

      {/* SVG GRADIENT */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="buildingGradient">
            <stop offset="0%" stopColor="#9FCCFA" />
            <stop offset="100%" stopColor="#0974F1" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-4xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-6 lg:mb-10 text-center bg-gradient-to-r from-[#0968E5] to-[#091970] bg-clip-text text-transparent tracking-wide">
          {displayText}
          <span className="animate-pulse">|</span>
        </h2>

        <div className="flex flex-col gap-4 lg:gap-8 items-center">

          {/* ================= CARD 1 ================= */}
          <div className="w-full md:w-[50%] h-52 perspective group relative rounded-xl overflow-hidden">

            {/* 🔥 BACKGROUND ANIMATION LAYER */}
            <div className="absolute inset-0 z-20">
              <div className="group-hover:-top-3 absolute -top-12 -left-12 shadow-yellow-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
              <div className="group-hover:top-60 absolute top-44 left-14 shadow-red-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
              <div className="group-hover:-left-12 absolute top-24 left-56 shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
              <div className="group-hover:-top-44 absolute top-12 left-12 shadow-red-800 shadow-inner rounded-xl transition-all duration-1000 w-12 h-12" />
              <div className="group-hover:left-44 absolute top-12 left-12 shadow-green-800 shadow-inner rounded-xl transition-all duration-1000 w-44 h-44" />
              <div className="group-hover:-left-2 absolute -top-24 -left-12 shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-64 h-64" />
              <div className="group-hover:top-44 absolute top-24 left-12 shadow-sky-500 shadow-inner rounded-xl transition-all duration-1000 w-4 h-4" />
            </div>

            {/* CARD */}
            <div className="card-inner relative z-0">

              <div className="card-face">
                <h2 className="title">PROJECT REPORT WRITER</h2>

                <p className="subtitle">
                  <FaBuilding style={{ fill: "url(#buildingGradient)" }} />
                  Landco Solar Company Ltd. Dhaka
                </p>
              </div>

              <div className="card-face card-back">
                <h2 className="title">On Site</h2>

                <div className="flex flex-wrap justify-center gap-2">
                  <span className="badge">
                    <PiMicrosoftWordLogoFill className="text-[#1D4ED8]" /> MS Office
                  </span>
                  <span className="badge">
                    <FaFileExcel className="text-[#217346]" /> Excel
                  </span>
                  <span className="badge">
                    <TbReportSearch className="text-[#F59E0B]" /> Research
                  </span>
                  <span className="badge">
                    <MdOutlineDataExploration className="text-[#6366F1]" /> Data Analysis
                  </span>
                  <span className="badge">
                    <MdAttachEmail className="text-[#06B6D4]" /> Email
                  </span>
                  <span className="badge">
                    <SiAltiumdesigner className="text-[#F97316]" /> Report Design
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div className="w-full md:w-[50%] h-52 perspective group relative rounded-xl overflow-hidden">

            {/* 🔥 BACKGROUND ANIMATION */}
            <div className="absolute inset-0 z-20">
              <div className="group-hover:-top-3 absolute -top-12 -left-12 shadow-yellow-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
              <div className="group-hover:top-60 absolute top-44 left-14 shadow-red-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
              <div className="group-hover:-left-12 absolute top-24 left-56 shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
              <div className="group-hover:-top-44 absolute top-12 left-12 shadow-red-800 shadow-inner rounded-xl transition-all duration-1000 w-12 h-12" />
              <div className="group-hover:left-44 absolute top-12 left-12 shadow-green-800 shadow-inner rounded-xl transition-all duration-1000 w-44 h-44" />
              <div className="group-hover:-left-2 absolute -top-24 -left-12 shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-64 h-64" />
              <div className="group-hover:top-44 absolute top-24 left-12 shadow-sky-500 shadow-inner rounded-xl transition-all duration-1000 w-4 h-4" />
            </div>

            {/* CARD */}
            <div className="card-inner rotate-x relative z-0">

              <div className="card-face">
                <h2 className="title">Frontend Developer</h2>

                <p className="subtitle">
                  <FaBuilding style={{ fill: "url(#buildingGradient)" }} />
                  Kitsware Technology
                </p>
              </div>

              <div className="card-face card-back rotate-x-back">
                <h2 className="title">Remote</h2>

                <div className="flex flex-wrap justify-center gap-2">
                  <span className="badge">
                    <FaReact className="text-[#61DAFB]" /> React
                  </span>
                  <span className="badge">
                    <SiTailwindcss className="text-[#38BDF8]" /> Tailwind
                  </span>
                  <span className="badge">
                    <SiJavascript className="text-[#F7DF1E]" /> JavaScript
                  </span>
                  <span className="badge">
                    <FaHtml5 className="text-[#E34F26]" /> Responsive
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* STYLES (UNCHANGED) */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s;
          transform-style: preserve-3d;
        }

        .perspective:hover .card-inner {
          transform: rotateY(180deg);
        }

        .rotate-x {
          transform-style: preserve-3d;
        }

        .perspective:hover .rotate-x {
          transform: rotateX(180deg);
        }

        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 24px;
          text-align: center;
          color: white;
          backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          backface-visibility: hidden;
        }

        .card-back {
          transform: rotateY(180deg);
        }

        .rotate-x-back {
          transform: rotateX(180deg);
        }

        .title {
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 10px;
          background: linear-gradient(to right, #00EE6E, #0C75E6);
          -webkit-background-clip: text;
          color: transparent;
        }

        .subtitle {
          font-size: 0.9rem;
          color: #cbd5e1;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(255,255,255,0.2);
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 0.8rem;
        }
      `}</style>

    </section>
  );
}