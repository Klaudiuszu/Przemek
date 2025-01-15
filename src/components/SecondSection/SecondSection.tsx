import React, { useRef, useEffect } from "react";
import Testimonials from "./Testimonials";

const SecondSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const speedIncRef = useRef<number>(0);
  const params = {
    AMPLITUDE: 80,
    OFFSET_SPEED: 150,
    SPEED: 0.01,
    OFFSET_PARABOLA: 300,
    NUMBER_PARABOLAS: 5,
    COLOR: '#EC4613',
    NUMBER_CURVES: 10,
  };

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : null;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 1900;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const rgb = hexToRgb(params.COLOR)!;
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

      gradient.addColorStop(0, `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
      gradient.addColorStop(1, `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);

      ctx.fillStyle = gradient;

      for (let j = 0; j < params.NUMBER_PARABOLAS; j++) {
        const offset = speedIncRef.current + j * Math.PI * params.OFFSET_PARABOLA;

        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        for (let i = 0; i <= canvas.width; i++) {
          const y = params.AMPLITUDE * Math.pow(((i - canvas.width / 2) / (canvas.width / 2)), 2) + canvas.height / 2 + Math.sin(offset + i / params.OFFSET_SPEED) * params.AMPLITUDE;
          ctx.lineTo(i, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      }

      speedIncRef.current += params.SPEED;
      requestAnimationFrame(render);
    };


    requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [params]);

  return (
    <div className="relative mt-[-1100px] w-full flex justify-center">
      <canvas ref={canvasRef} className="w-full">
      </canvas>
      <Testimonials />
    </div>
  );
};

export default SecondSection;
