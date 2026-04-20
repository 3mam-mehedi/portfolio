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

  useEffect(() => {
    const check = () => setTiltEnabled(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const gradientText =
    "bg-clip-text text-transparent bg-gradient-to-r from-[#07C8F9] to-[#0D41E1]";

  return (
    <>
      {/* Responsive Position */}
      <aside
        className="
        fixed 
        left-1/2 -translate-x-1/2 top-6
        lg:left-10 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0
        z-40
      "
      >
        <Balloons className="absolute inset-0" />

        <Tilt
          tiltEnable={tiltEnabled}
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          scale={1.02}
          transitionSpeed={400}
        >
          {/* Container */}
          <div
            onClick={() => setFlip(!flip)}
            className="
            w-[220px] h-[270px]
            sm:w-[240px] sm:h-[294px]
            perspective-[800px]
            cursor-pointer
            group
          "
          >
            {/* Card */}
            <div
              className={`
              relative w-full h-full
              transition-transform duration-[1500ms]
              transform-style-3d
              ${
                flip
                  ? "[transform:rotateX(180deg)_rotateZ(-180deg)]"
                  : "group-hover:[transform:rotateX(180deg)_rotateZ(-180deg)]"
              }
            `}
            >
              {/* FRONT */}
              <div
                className="
                absolute w-full h-full
                rounded-[2rem]
                flex flex-col items-center justify-center gap-4
                shadow-[0_0_15px_10px_rgba(13,65,225,0.8)]
                backface-hidden
                bg-white/10 backdrop-blur-md
                border border-white/20
              "
              >
                {/* Top */}
                <div
                  className={`
                  absolute top-0
                  w-1/2 h-8
                  flex items-center justify-center
                  rounded-b-xl
                  shadow-[0_0_15px_8px_rgba(13,65,225,0.8)]
                  ${gradientText}
                `}
                >
                  <p className="font-bold">Profile</p>
                </div>

                {/* Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-white/40">
                  <img
                    src="/assets/profile/emam.png"
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className={`text-xl sm:text-2xl font-bold ${gradientText}`}>
                  Emam Mehedi
                </p>

                <p className={`text-sm sm:text-lg ${gradientText}`}>
                  Follow me for more...
                </p>
              </div>

              {/* BACK */}
              <div
                className="
                absolute w-full h-full
                rounded-2xl
                flex flex-col items-center justify-center
                gap-4
                shadow-[0_0_15px_10px_rgba(13,65,225,0.9)]
                [transform:rotateX(180deg)_rotateZ(-180deg)]
                backface-hidden
                p-4
                bg-white/10 backdrop-blur-md
                border border-white/20
              "
              >
                <p className={`text-lg sm:text-xl font-bold ${gradientText}`}>
                  Follow Me
                </p>

                <LiaUserPlusSolid
                  className="w-28 h-28 sm:w-36 sm:h-36"
                  style={{ color: "#0D41E1" }}
                />

                <div className="flex gap-4 sm:gap-5 mt-2">
                  <SiGmail
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    style={{ color: "#f11712" }}
                  />
                  <FaLinkedin
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    style={{ color: "#0866ff" }}
                  />
                  <FaGithub
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    style={{ color: "#43e890" }}
                  />
                  <FaFacebook
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    style={{ color: "#1439f3" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </aside>

      {/* Custom CSS */}
      <style>
        {`
        .transform-style-3d{
          transform-style: preserve-3d;
        }
        .backface-hidden{
          backface-visibility: hidden;
        }
        `}
      </style>
    </>
  );
}