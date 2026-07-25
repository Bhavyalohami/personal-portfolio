import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- Text Animations ---

export const BlurText = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");
  let characterOffset = 0;
  
  return (
    <span className={`inline ${className}`} aria-label={text}>
      {words.map((word, wordIndex) => {
        const baseOffset = characterOffset;
        characterOffset += word.length + 1;

        return (
          <React.Fragment key={`${word}-${wordIndex}`}>
            <span className="inline-block whitespace-nowrap" aria-hidden="true">
              {word.split("").map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  initial={{ filter: "blur(10px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 0.62, delay: delay + (baseOffset + index) * 0.012, ease: "easeOut" }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {wordIndex < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </span>
  );
};

export const SplitText = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delay + index * 0.08, ease: "easeOut" }}
            className="inline-block"
          >
            {word}
          </motion.span>
          {index < words.length - 1 && "\u00A0"}
        </React.Fragment>
      ))}
    </span>
  );
};

export const ShinyText = ({ text, className = "" }) => {
  return (
    <span 
      className={`inline-block bg-gradient-to-r from-text-secondary via-white to-text-secondary bg-[length:200%_auto] bg-clip-text text-transparent animate-spin-slow ${className}`}
      style={{ animationDuration: '3s', animationName: 'gradientShift' }}
    >
      {text}
    </span>
  );
};

// --- Interactive Cards ---

export const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(125, 249, 255, 0.15)" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-border-subtle bg-surface/40 p-6 backdrop-blur-md ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const TiltedCard = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={`relative rounded-2xl border border-border-subtle bg-surface/50 shadow-2xl backdrop-blur-md transition-shadow hover:shadow-[0_0_40px_rgba(125,249,255,0.1)] ${className}`}
    >
      <div style={{ transform: "translateZ(40px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};
