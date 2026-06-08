"use client";

import { useEffect, useRef } from "react";

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };

    const colors = [
      "rgba(59,130,246,",   // Blue
      "rgba(147,51,234,",    // Purple
      "rgba(236,72,153,",    // Pink
      "rgba(168,85,247,",    // Violet
    ];

    const animate = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      const time = Date.now() * 0.001;

      ctx.clearRect(0, 0, w, h);

      // Draw multiple wave layers
      for (let layer = 0; layer < 4; layer++) {
        ctx.beginPath();
        
        for (let x = 0; x <= w; x += 5) {
          const y = h * (0.3 + layer * 0.15) + 
            Math.sin(x * 0.01 + time * 0.5 + layer) * 40 +
            Math.sin(x * 0.02 + time * 0.3 + layer * 2) * 30 +
            Math.cos(x * 0.005 + time * 0.7) * 50;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(w, h + 100);
        ctx.lineTo(0, h + 100);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, h * 0.3, 0, h);
        gradient.addColorStop(0, colors[layer] + "0.08)");
        gradient.addColorStop(0.5, colors[layer] + "0.03)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Floating geometric shapes
      for (let i = 0; i < 5; i++) {
        const x = w * 0.2 * i + Math.sin(time + i) * 30;
        const y = h * 0.2 + Math.cos(time * 0.5 + i) * 20;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(time * 0.2 + i);
        
        ctx.beginPath();
        const size = 30 + Math.sin(time + i) * 10;
        
        // Draw hexagon
        for (let j = 0; j < 6; j++) {
          const angle = (Math.PI / 3) * j;
          const px = size * Math.cos(angle);
          const py = size * Math.sin(angle);
          j === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        
        ctx.strokeStyle = colors[i % colors.length] + "0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.fillStyle = colors[i % colors.length] + "0.02)";
        ctx.fill();
        
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default Background;