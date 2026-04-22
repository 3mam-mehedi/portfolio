
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

export default function Projects() {
  const projects = [
    {
      title: "Productive CRM",
      desc: "React + Node.js business dashboard system.",
      image:
        "/assets/projects/Kitsware.png",
      badges: ["React", "Tailwind", "JS", "Node.js"],
    },
    {
      title: "E-commerce Store",
      desc: "Fullstack store with stripe payment.",
      image:
        "/assets/projects/car.png",
      badges: ["React", "Tailwind", "JS", "Stripe"],
    },
    {
      title: "Realtime Chat",
      desc: "Socket.io realtime chat application.",
      image:
        "/assets/projects/tree.jpg",
      badges: ["React", "Tailwind", "JS", "Socket.io"],
    },
    {
      title: "Portfolio Website",
      desc: "Modern animated portfolio website.",
      image:
        "/assets/projects/tree.jpg",
      badges: ["React", "Tailwind", "JS", "CSS"],
    },
    {
      title: "Task Manager",
      desc: "Productivity drag-drop app.",
      image:
        "/assets/projects/Kitsware.png",
      badges: ["React", "Tailwind", "JS", "Drag&Drop"],
    },
    {
      title: "Analytics Dashboard",
      desc: "Charts & reports dashboard UI.",
      image:
        "/assets/projects/car.png",
      badges: ["React", "Tailwind", "JS", "Charts"],
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl text-white font-bold text-center mb-12">
        Projects
      </h2>

      {/* Responsive grid with proper mobile spacing */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projects.map((project, i) => (
          <div
            key={i}
            className="card"
            style={{
              width: "calc(100vw - 40px)", // leaves 20px margin each side on mobile
              maxWidth: "300px",           // original max width
              height: "calc((100vw - 40px) * 0.73)", // maintain original aspect ratio
              maxHeight: "220px",          // original height
              backgroundImage: `url(${project.image})`,
            }}
          >
            {/* Pre-hover 3 central icons */}
            <div className="top-icons">
              <FaReact />
              <SiTailwindcss />
              <IoLogoNodejs />
            </div>

            {/* Glass content */}
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.desc}</p>

              <div className="badge">
                {project.badges.map((b, idx) => (
                  <span key={idx}>{b}</span>
                ))}
              </div>

              {/* Animated Button */}
              <button className="animated-btn">
                VIEW
                <div id="clip">
                  <div id="leftTop" className="corner" />
                  <div id="rightBottom" className="corner" />
                  <div id="rightTop" className="corner" />
                  <div id="leftBottom" className="corner" />
                </div>
                <span id="rightArrow" className="arrow" />
                <span id="leftArrow" className="arrow" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
/* Card base */
.card{
  position:relative;
  background-size:cover;
  background-position:center;
  border-radius:14px;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  transition:0.6s cubic-bezier(.23,1,.32,1);
  cursor:pointer;
}

.card::before{
  content:"";
  position:absolute;
  inset:0;
  background:rgba(0,0,0,0.35);
}

.card:hover{
  box-shadow:0 15px 30px rgba(0,0,0,0.3);
}

/* Pre-hover central icons */
.top-icons{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  display:flex;
  gap:18px;
  font-size:35px;
  color:white;
  transition:0.6s cubic-bezier(.23,1,.32,1);
  z-index:2;
}

.card:hover .top-icons{
  transform:translate(-50%, -50%) rotate(-45deg);
  opacity:0;
}

/* Glass content center aligned */
.card-content{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%) rotate(-45deg);
  width:100%;
  height:100%;
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:10px;
  background:rgba(255,255,255,0.12);
  backdrop-filter:blur(12px);
  border:1px solid rgba(255,255,255,0.2);
  border-radius:14px;
  opacity:0;
  transition:0.6s cubic-bezier(.23,1,.32,1);
  text-align:center;
}

.card:hover .card-content{
  transform:translate(-50%,-50%) rotate(0);
  opacity:1;
}

/* Stagger animation */
.card-title,
.card-description,
.badge,
.animated-btn{
  opacity:0;
  transform:translateY(15px);
  transition:.4s ease;
}

.card:hover .card-title{
  opacity:1;
  transform:translateY(0);
  transition-delay:.1s;
}

.card:hover .card-description{
  opacity:1;
  transform:translateY(0);
  transition-delay:.2s;
}

.card:hover .badge{
  opacity:1;
  transform:translateY(0);
  transition-delay:.3s;
}

.card:hover .animated-btn{
  opacity:1;
  transform:translateY(0);
  transition-delay:.4s;
}

/* Text */
.card-title{
  font-size:18px;
  font-weight:700;
  color:white;
}

.card-description{
  font-size:13px;
  color:#e6e6e6;
}

/* Badges */
.badge{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  font-size:12px;
  color:white;
  margin-top:5px;
  justify-content:center;
}

.badge span{
  padding:2px 6px;
  border-radius:6px;
  background:rgba(255,255,255,0.2);
  backdrop-filter:blur(4px);
}

/* Animated Button */
.animated-btn {
  position: relative;
  width: 11em;
  height: 3em;
  outline: none;
  transition: 0.1s;
  background-color: transparent;
  border: none;
  font-size: 13px;
  font-weight: bold;
  color: #ddebf0;
  margin-top:6px;
  cursor:pointer;
}

.animated-btn #clip {
  --color: #2761c3;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 3px double var(--color);
  box-shadow: inset 0px 0px 15px #195480;
  -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}

.animated-btn .arrow {
  position: absolute;
  transition: 0.2s;
  background-color: #2761c3;
  top: 35%;
  width: 11%;
  height: 30%;
}

.animated-btn #leftArrow {
  left: -13.5%;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
}

.animated-btn #rightArrow {
  -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
  left: 102%;
}

.animated-btn:hover #rightArrow {
  background-color: #27c39f;
  left: -15%;
  animation: 0.6s ease-in-out both infinite alternate rightArrow8;
}

.animated-btn:hover #leftArrow {
  background-color: #27c39f;
  left: 103%;
  animation: 0.6s ease-in-out both infinite alternate leftArrow8;
}

.animated-btn .corner {
  position: absolute;
  width: 4em;
  height: 4em;
  background-color: #2761c3;
  box-shadow: inset 1px 1px 8px #2781c3;
  transform: scale(1) rotate(45deg);
  transition: 0.2s;
}

.animated-btn #rightTop { top: -1.98em; left: 91%; }
.animated-btn #leftTop { top: -1.96em; left: -3.0em; }
.animated-btn #leftBottom { top: 2.10em; left: -2.15em; }
.animated-btn #rightBottom { top: 45%; left: 88%; }

.animated-btn:hover #leftTop { animation: 0.1s ease-in-out 0.05s both changeColor8, 0.2s linear 0.4s both lightEffect8; }
.animated-btn:hover #rightTop { animation: 0.1s ease-in-out 0.15s both changeColor8, 0.2s linear 0.4s both lightEffect8; }
.animated-btn:hover #rightBottom { animation: 0.1s ease-in-out 0.25s both changeColor8, 0.2s linear 0.4s both lightEffect8; }
.animated-btn:hover #leftBottom { animation: 0.1s ease-in-out 0.35s both changeColor8, 0.2s linear 0.4s both lightEffect8; }

.animated-btn:hover .corner { transform: scale(1.25) rotate(45deg); }
.animated-btn:hover #clip { animation: 0.2s ease-in-out 0.55s both greenLight8; --color: #27c39f; }

/* Keyframes */
@keyframes changeColor8 { from { background-color: #2781c3; } to { background-color: #27c39f; } }
@keyframes lightEffect8 { from { box-shadow: 1px 1px 5px #27c39f; } to { box-shadow: 0 0 2px #27c39f; } }
@keyframes greenLight8 { from { } to { box-shadow: inset 0px 0px 32px #27c39f; } }
@keyframes leftArrow8 { from { transform: translate(0px); } to { transform: translateX(10px); } }
@keyframes rightArrow8 { from { transform: translate(0px); } to { transform: translateX(-10px); } }
      `}</style>
    </section>
  );
}