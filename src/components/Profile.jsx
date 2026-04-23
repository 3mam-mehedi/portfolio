import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { Balloons } from "./Balloons";
import { SiGmail } from "react-icons/si";
import { LiaUserPlusSolid } from "react-icons/lia";
import { FaGithub, FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Profile() {
  const [tiltEnabled, setTiltEnabled] = useState(false);
  const [flip, setFlip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setTiltEnabled(!mobile);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const gradientText =
    "bg-clip-text text-transparent bg-gradient-to-r from-[#07C8F9] to-[#0D41E1]";

  return (
    <>
      {/* PROFILE WRAPPER */}
      <aside
        className={`
          z-40
          ${isMobile
            ? "relative mx-auto mt-4 flex justify-center"
            : "fixed left-10 top-1/2 -translate-y-1/2"}
        `}
      >
        {/* Balloons only desktop */}
        {!isMobile && <Balloons className="absolute inset-0" />}

        <Tilt
          tiltEnable={tiltEnabled}
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          scale={1.02}
          transitionSpeed={400}
        >
          <div
            onClick={() => {
              setFlip((prev) => !prev);
            }}
            className="
              w-[170px] h-[210px]
              sm:w-[200px] sm:h-[240px]
              lg:w-[240px] lg:h-[294px]
              perspective-[800px]
              cursor-pointer
              group
            "
          >
            <div
              className={`
                relative w-full h-full
                transition-transform duration-[1200ms]
                transform-style-3d
                ${
                  flip
                    ? "[transform:rotateX(180deg)_rotateZ(-180deg)]"
                    : "group-hover:[transform:rotateX(180deg)_rotateZ(-180deg)]"
                }
              `}
            >
              {/* FRONT */}
              <div className="absolute w-full h-full rounded-xl flex flex-col items-center justify-center gap-2 p-2 backface-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_6px_rgba(13,65,225,0.7)]">

                <div className={`absolute top-0 w-1/2 h-6 flex items-center justify-center rounded-b-xl ${gradientText}`}>
                  <p className="font-bold text-xs sm:text-sm">Profile</p>
                </div>

                <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full overflow-hidden border border-white/40">
                  <img
                    src="/assets/profile/emam.png"
                    className="w-full h-full object-cover"
                    alt="profile"
                  />
                </div>

                <p className={`text-sm sm:text-lg font-bold ${gradientText}`}>
                  Emam Mehedi
                </p>

                <p className={`text-[10px] sm:text-sm ${gradientText}`}>
                  Follow me...
                </p>
              </div>

              {/* BACK */}
              <div className="absolute w-full h-full rounded-xl flex flex-col items-center justify-center gap-2 p-3 backface-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_6px_rgba(13,65,225,0.8)] [transform:rotateX(180deg)_rotateZ(-180deg)]">

                <p className={`text-sm sm:text-lg font-bold ${gradientText}`}>
                  Follow Me
                </p>

                <LiaUserPlusSolid
                  className="w-16 h-16 sm:w-24 sm:h-24"
                  style={{ color: "#0D41E1" }}
                />

                <div className="flex gap-3 sm:gap-4">
                  <SiGmail className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: "#f11712" }} />
                  <FaLinkedin className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: "#0866ff" }} />
                  <FaGithub className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: "#43e890" }} />
                  <FaFacebook className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: "#1439f3" }} />
                </div>

              </div>
            </div>
          </div>
        </Tilt>
      </aside>

      {/* CSS */}
      <style>
        {`
          .transform-style-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
        `}
      </style>
    </>
  );
}