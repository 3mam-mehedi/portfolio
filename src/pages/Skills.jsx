"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  FaLaravel, FaReact, FaHtml5, FaGitAlt, FaCss3Alt, FaBootstrap,
  FaNodeJs, FaCode, FaShopify, FaSpeakap, FaMobileAlt, FaFigma, FaLayerGroup,
  FaAssistiveListeningSystems,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { TbApi, TbVocabulary, } from "react-icons/tb";
import { GiThink } from "react-icons/gi";
import { DiIllustrator } from "react-icons/di";
import {
  SiCplusplus, SiTailwindcss, SiArduino, SiEnte, SiPhp, SiMysql, SiGrammarly,
  SiTeamspeak, SiPiapro, SiDart,
} from "react-icons/si";

/* ================= Typing Text ================= */
function TypingText({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayText(text.substring(0, displayText.length + 1));

        if (displayText === text) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setDisplayText(text.substring(0, displayText.length - 1));

        if (displayText === "") {
          setDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, deleting, text]);

  return (
    <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0968E5] to-[#091970]">
      {displayText}
      <span className="animate-pulse text-[#0968E5]">|</span>
    </h2>
  );
}

function Circle({ data }) {
  return (
    <div className="w-42 h-42 flex flex-wrap gap-2 justify-center items-center">
      {data.map((item, i) => (
        <div
          key={i}
          className="w-[38%] h-[38%] flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
        >
          <div className="text-3xl" style={{ color: item.color }}>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ================= Card ================= */
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
      {/* ORIGINAL ANIMATION */}
      <div className="group-hover:-top-3 bg-transparent -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
      <div className="group-hover:top-60 bg-transparent top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
      <div className="group-hover:-left-12 bg-transparent top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
      <div className="group-hover:left-44 bg-transparent top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all duration-1000 w-44 h-44" />
      <div className="group-hover:-left-2 bg-transparent -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-64 h-64" />
      <div className="group-hover:top-44 bg-transparent top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all duration-1000 w-4 h-4" />

      {/* CONTENT */}
      <div className="w-full h-full p-2 flex flex-col gap-2 relative z-10">
        {/* TITLE */}
        <div className="flex items-center gap-2">
          <Icon className="text-white text-base shrink-0" />
          <span className="text-white font-bold text-md whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </span>
        </div>

        {/* TOP INFO */}
        <div className="flex flex-wrap gap-2 text-[11px] text-neutral-200">
          <a
            href={instituteLink}
            target="_blank"
            className="flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-[#0968E5]/25 to-[#091970]/20 rounded-md border border-[#0968E5]/40"
          >
            <div className="w-5 h-5 bg-white rounded-full overflow-hidden p-[2px]">
              <img
                src={instituteLogo}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
            {institute}
          </a>

          <span className="px-2 py-1 bg-white/10 rounded-md">{year}</span>
          <span className="px-2 py-1 bg-white/10 rounded-md">{duration}</span>
        </div>

        {/* LABELS */}
        <div className="grid grid-cols-2 gap-2 mt-1">
          {badges.slice(0, 6).map((badge, i) => {
            const BadgeIcon = badge.icon;

            return (
              <div
                key={i}
                className="flex items-center gap-1 px-2 py-2 rounded-md bg-white/10 border border-white/10"
              >
                <BadgeIcon className="text-white text-md shrink-0" />
                <span className="text-xs
                 text-white/80 truncate">
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

/* ================= Main ================= */
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
    { icon: <FaBootstrap />, color: "#6f2cf5" },
    { icon: <SiTailwindcss />, color: "#00bbff" },
  ];
  const skillIconsa = [
    { icon: < SiCplusplus />, color: "#1469be" },
    { icon: < FaNodeJs />, color: "#65b849" }
    , { icon: < SiPhp />, color: "#797db5" },
    { icon: < SiMysql />, color: "#0a707f" },
  ];
  const skillIconsb = [
    { icon: <FaReact />, color: "#00d9ff" },
    { icon: < FaLaravel />, color: "#ff2919" },
    { icon: < FaFlutter />, color: "#5ec9f7" },
    { icon: <SiDart />, color: "#02599c" },
  ];
  const skillIconsc = [
    { icon: < SiArduino />, color: "#118693" },
    { icon: <FaGitAlt />, color: "#f05232" },
    { icon: <FaFigma />, color: "#8f4aff" },
    { icon: < DiIllustrator />, color: "#ff7b1c" },
  ];

  return (
    <section
      ref={sectionRef}
      className={`w-full lg:py-10 px-4 transition-all duration-1000 ${show ? "opacity-100" : "opacity-0"
        }`}
    >
      <TypingText text="Skills" />

      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            icon={FaLaravel}
            title="PHP WITH LARAVEL FRAMEWORK"
            institute="Basis"
            instituteLogo="/assets/skills/basis.png"
            instituteLink="#"
            year="2023"
            duration="3 Months"
            badges={[
              { label: "HTML", icon: FaHtml5 },
              { label: "CSS", icon: FaCss3Alt },
              { label: "Bootstrap", icon: FaBootstrap },
              { label: "PHP", icon: SiPhp },
              { label: "MySQL", icon: SiMysql },
              { label: "API", icon: TbApi },
            ]}
          />

          <Card
            icon={SiEnte}
            title="ADVANCED E-COMMERCE"
            institute="Soft Park IT"
            instituteLogo="/assets/skills/spi.png"
            instituteLink="#"
            year="2023"
            duration="3 Months"
            badges={[
              { label: "HTML", icon: FaHtml5 },
              { label: "CSS", icon: FaCss3Alt },
              { label: "Bootstrap", icon: FaBootstrap },
              { label: "PHP", icon: SiPhp },
              { label: "MySQL", icon: SiMysql },
              { label: "API", icon: TbApi },
            ]}
          />

          <Card
            icon={FaSpeakap}
            title="SPOKEN ENGLISH"
            institute="Saifurs"
            instituteLogo="/assets/skills/saifurs.png"
            instituteLink="#"
            year="2022"
            duration="3 Months"
            badges={[
              { label: "Vocabulary", icon: TbVocabulary },
              { label: "Grammar", icon: SiGrammarly },
              { label: "Listening", icon: FaAssistiveListeningSystems },
              { label: "Speaking", icon: SiTeamspeak },
              { label: "Pronunciation", icon: SiPiapro },
              { label: "Thinking", icon: GiThink },
            ]}
          />

        </div>

        {/* ICONS */}
        <div className="flex justify-center flex-wrap">
          <Circle data={skillIcons} />
          <Circle data={skillIconsa} />
          <Circle data={skillIconsb} />
          <Circle data={skillIconsc} />
        </div>
      </div>
    </section>
  );
}