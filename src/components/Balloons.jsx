import { forwardRef, useImperativeHandle } from "react";

export const Balloons = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    launchAnimation: () => {
      // 🎈 create balloons container (start at bottom so they rise into view)
      const container = document.createElement("div");
      container.style.position = "fixed";
      container.style.bottom = "0";
      container.style.left = "50%";
      container.style.transform = "translateX(-50%)";
      container.style.pointerEvents = "none";
      container.style.zIndex = "9999";

      // 🎈 create 10 emojis
      for (let i = 0; i < 10; i++) {
        const balloon = document.createElement("div");
        balloon.innerText = "🎈";
        balloon.style.position = "absolute";
        balloon.style.bottom = "0";
        balloon.style.left = `${Math.random() * 100 - 50}px`; // spread
        balloon.style.fontSize = `${20 + Math.random() * 20}px`;
        balloon.style.opacity = "0.8";
        balloon.style.animation = `rise ${2 + Math.random() * 2}s ease-out forwards`;
        container.appendChild(balloon);
      }

      document.body.appendChild(container);

      // Remove container after 4s
      setTimeout(() => container.remove(), 4000);
    },
  }));

  return (
    <style>
      {`
        @keyframes rise {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-300px) rotate(360deg); opacity: 0; }
        }
      `}
    </style>
  );
});