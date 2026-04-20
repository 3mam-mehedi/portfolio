import { NavLink } from "react-router-dom";
import { FaProjectDiagram } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GiIceSpellCast } from "react-icons/gi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { RiContactsBook3Line } from "react-icons/ri";

const items = [
  { name: "Home", icon: <ImHome />, path: "/" },
  { name: "Experiences", icon: <MdOutlineWorkHistory />, path: "/experiences" },
  { name: "Projects", icon: <FaProjectDiagram />, path: "/projects" },
  { name: "Educations", icon: <FaGraduationCap />, path: "/educations" },
  { name: "Skills", icon: <RiLightbulbFlashLine />, path: "/skills" },
  { name: "Specializations", icon: <GiIceSpellCast />, path: "/specializations" },
  { name: "Contacts", icon: <RiContactsBook3Line />, path: "/contacts" },
];

export default function MagicNavbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-2 sm:px-4">
      <div
        className="relative flex px-2 sm:px-3 py-2 rounded-full 
        gap-2 sm:gap-4 md:gap-5 shadow-lg
        bg-white/10 backdrop-blur-md border border-white/10
        lg:bg-transparent lg:backdrop-blur-none lg:border-none"
      >
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="group relative flex items-center justify-center 
            w-10 sm:w-14 md:w-16 lg:w-20 
            h-12 sm:h-14 md:h-16"
          >
            {({ isActive }) => (
              <div className="relative flex items-center justify-center">

                {/* ICON */}
                <div className="relative flex items-center justify-center">

                  {/* Active Glow */}
                  {isActive && (
                    <div
                      className="absolute w-10 sm:w-12 h-10 sm:h-12 
                      rounded-full
                      bg-gradient-to-r from-[#0968E5] to-[#091970]
                      blur-md opacity-70"
                    />
                  )}

                  {/* ICON ROTATION FIX */}
                  <div
                    className={`inline-block text-xl sm:text-2xl 
                    transition-transform duration-500
                    transform-gpu
                    [backface-visibility:hidden]
                    group-hover:rotate-[360deg]
                    ${
                      isActive
                        ? "text-white scale-110"
                        : "text-white/70"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Active Dot */}
                  {isActive && (
                    <div
                      className="absolute -bottom-2 w-1.5 h-1.5
                      bg-[#0968E5] rounded-full animate-pulse"
                    />
                  )}
                </div>

                {/* TEXT */}
                <div
                  className={`absolute -top-9 sm:-top-10 left-1/2 
                  -translate-x-1/2
                  transition-all duration-300
                  group-hover:opacity-100
                  ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <div
                    className="px-3 py-1 text-[10px] sm:text-xs 
                    font-semibold text-white rounded-full shadow-lg 
                    whitespace-nowrap
                    bg-gradient-to-r from-[#0968E5] to-[#091970]"
                  >
                    {item.name}
                  </div>
                </div>

              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}