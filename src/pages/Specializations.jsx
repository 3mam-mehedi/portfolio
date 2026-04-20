import React from "react";
import { FaReact, FaCode, FaMobileAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";

// Card Component
const Card = ({ icon: Icon, title, description, badges = [] }) => {
  return (
    <div className="cursor-pointer group overflow-hidden p-5 relative w-full h-60 bg-neutral-900 rounded-xl">

      {/* background effects */}
      <div className="group-hover:-top-3 bg-transparent -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
      <div className="group-hover:top-60 bg-transparent top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
      <div className="group-hover:-left-12 bg-transparent top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-24 h-24" />
      <div className="group-hover:-top-44 bg-transparent top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all duration-1000 w-12 h-12" />
      <div className="group-hover:left-44 bg-transparent top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all duration-1000 w-44 h-44" />
      <div className="group-hover:-left-2 bg-transparent -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all duration-1000 w-64 h-64" />
      <div className="group-hover:top-44 bg-transparent top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all duration-1000 w-4 h-4" />

      {/* content */}
      <div className="w-full h-full shadow-xl shadow-neutral-900 p-4 bg-neutral-900 opacity-50 rounded-xl flex flex-col justify-center gap-3 relative z-10">

        {/* title */}
        <div className="flex items-center gap-2">
          {Icon && <Icon className="text-white text-xl" />}
          <span className="text-neutral-50 font-bold text-2xl italic">
            {title}
          </span>
        </div>

        {/* description */}
        <p className="text-neutral-300 text-sm">
          {description}
        </p>

        {/* badges */}
        <div className="flex flex-wrap gap-2 mt-2">
          {badges.map((badge, i) => {
            const BadgeIcon = badge.icon;

            return (
              <div
                key={i}
                className="flex items-center gap-1 px-3 py-2 rounded-md bg-neutral-700/60 backdrop-blur-md"
              >
                {BadgeIcon && (
                  <BadgeIcon className="text-green-400 text-xs" />
                )}
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

// Main Component
export default function Specializations() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Specializations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <Card
            icon={FaReact}
            title="Frontend Developer"
            description="Building scalable UI with reusable components and modern React architecture."
            badges={[
              { label: "Frontend", icon: FaCode },
              { label: "Hooks", icon: FaLayerGroup },
              { label: "SPA", icon: FaMobileAlt },
            ]}
          />

          <Card
            icon={SiTailwindcss}
            title="Embedded Systems"
            description="Creating responsive layouts using modern utility-first CSS approach."
            badges={[
              { label: "Responsive", icon: FaMobileAlt },
              { label: "UI Design", icon: FaFigma },
              { label: "Utility CSS", icon: FaCode },
            ]}
          />

          <Card
            icon={FaFigma}
            title="UI / UX Design"
            description="Designing smooth user experiences with modern and clean interfaces."
            badges={[
              { label: "Figma", icon: FaFigma },
              { label: "Wireframe", icon: FaLayerGroup },
              { label: "User Flow", icon: FaCode },
            ]}
          />

          <Card
            icon={FaReact}
            title="Mobile App Developer"
            description="Modern frontend development with performance and scalability."
            badges={[
              { label: "React", icon: FaReact },
              { label: "Optimization", icon: FaCode },
              { label: "Architecture", icon: FaLayerGroup },
            ]}
          />

        </div>

      </div>
    </section>
  );
}