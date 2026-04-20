"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  FaLaravel,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaCode,
  FaShopify,
  FaMobileAlt,
  FaFigma,
  FaLayerGroup,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiCplusplus, SiArduino, SiEnte } from "react-icons/si";

/* ================= Typing ================= */
function TypingText({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayText(text.substring(0, displayText.length + 1));
        if (displayText === text) setTimeout(() => setDeleting(true), 1200);
      } else {
        setDisplayText(text.substring(0, displayText.length - 1));
        if (displayText === "") setDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, deleting, text]);

  return (
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#0968E5] to-[#091970]">
      {displayText}
      <span className="animate-pulse text-[#1439f3]">|</span>
    </h2>
  );
}

/* ================= GLASS 3D CIRCLE ================= */
function Circle({ data }) {
  return (
    <div className="relative w-52 h-52 flex flex-wrap gap-2 justify-center items-center">
      {data.map((item, i) => (
        <div
          key={i}
          className="w-[48%] h-[48%] flex items-center justify-center cursor-pointer
          transition-all duration-300 bg-white/10 backdrop-blur-xl border border-white/20
          relative overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.25)]
          hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]
          hover:-translate-y-2 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent opacity-70" />
          <div
            className="relative text-3xl transition-transform duration-300 hover:scale-110"
            style={{ color: item.color }}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ================= CARD ================= */
const Card = ({
  icon: Icon,
  title,
  institute,
  instituteLogo,
  instituteLink,
  year,
  duration,
  badges = [],
}) => {
  return (
    <div className="cursor-pointer group overflow-hidden p-5 relative w-full h-60 bg-neutral-900 rounded-xl">

      {/* animation bg */}
      <div className="group-hover:-top-3 bg-transparent -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
      <div className="group-hover:top-60 bg-transparent top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
      <div className="group-hover:-left-12 bg-transparent top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
      <div className="group-hover:left-44 bg-transparent top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all duration-1000 w-44 h-44" />
      <div className="group-hover:-left-2 bg-transparent -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-64 h-64" />
      <div className="group-hover:top-44 bg-transparent top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all duration-1000 w-4 h-4" />

      {/* content */}
      <div className="w-full h-full shadow-xl shadow-neutral-900 p-4 bg-neutral-900 opacity-50 rounded-xl flex flex-col justify-center gap-3 relative z-10">

        {/* title */}
        <div className="flex items-center gap-2">
          <Icon className="text-white text-xl" />
          <span className="text-neutral-50 font-bold text-xl italic">
            {title}
          </span>
        </div>

        {/* META ROW */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-300">

          {/* 🔥 CLICKABLE INSTITUTE */}
          <a
            href={instituteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 py-1 bg-neutral-800 rounded-md hover:bg-neutral-700 transition"
          >
            <img
              src={instituteLogo}
              alt="logo"
              className="w-7 h-7 rounded-full object-cover bg-white p-[2px]"
            />
            {institute}
          </a>

          <span className="px-2 py-1 bg-neutral-800 rounded-md">
            {year}
          </span>

          <span className="px-2 py-1 bg-neutral-800 rounded-md">
            {duration}
          </span>
        </div>

        {/* badges */}
        <div className="flex flex-wrap gap-2 mt-1">
          {badges.map((badge, i) => {
            const BadgeIcon = badge.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-1 px-3 py-2 rounded-md bg-neutral-700/60 backdrop-blur-md"
              >
                <BadgeIcon className="text-green-400 text-xs" />
                <span className="text-xs text-neutral-200">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

/* ================= MAIN ================= */
export default function Skills() {
  const sectionRef = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillIcons = [
    { icon: <FaHtml5 />, color: "#e34a24" },
    { icon: <FaCss3Alt />, color: "#2b57f8" },
    { icon: <SiCplusplus />, color: "#007ecc" },
    { icon: <FaNodeJs />, color: "#fad21d" },
  ];

  const skillIconsa = [
    { icon: <FaReact />, color: "#61DBFB" },
    { icon: <FaLaravel />, color: "#f52f02" },
    { icon: <FaFlutter />, color: "#51c5f7" },
    { icon: <SiArduino />, color: "#007582" },
  ];

  return (
    <section
      ref={sectionRef}
      className={`w-full py-20 px-4 transition-all duration-1000 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <TypingText text="Skills" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        <div className="flex flex-col gap-4">
          <Card
            icon={FaLaravel}
            title="PHP WITH LARAVEL FRAMEWORK"
            institute="Basis"
            instituteLogo="/assets/skills/basis.png"
            instituteLink="https://basis.org.bd/"
            year="2024"
            duration="6 Months"
            badges={[
              { label: "Frontend", icon: FaCode },
              { label: "Hooks", icon: FaLayerGroup },
              { label: "SPA", icon: FaMobileAlt },
            ]}
          />

          <Card
            icon={FaShopify}
            title="ADVANCED E-COMMERCE"
            institute="Soft Park IT"
            instituteLogo="/assets/skills/spi.png"
            instituteLink="https://softparkit.com/"
            year="2023"
            duration="1 Year"
            badges={[
              { label: "Responsive", icon: FaMobileAlt },
              { label: "UI", icon: FaFigma },
              { label: "Tailwind", icon: FaCode },
            ]}
          />

          <Card
            icon={SiEnte}
            title="SPOKEN ENGLISH"
            institute="Saifurs"
            instituteLogo="/assets/skills/saifurs.png"
            instituteLink="https://saifurs.com/"
            year="2022"
            duration="3 Months"
            badges={[
              { label: "Figma", icon: FaFigma },
              { label: "Wireframe", icon: FaLayerGroup },
              { label: "UX", icon: FaCode },
            ]}
          />
        </div>

        <div className="flex flex-col items-center gap-10 sticky top-24">
          <Circle data={skillIcons} />
          <Circle data={skillIconsa} />
        </div>

      </div>
    </section>
  );
}