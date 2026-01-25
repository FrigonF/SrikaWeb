import { motion, useTransform } from 'motion/react';
import { useFlowField } from '../contexts/FlowFieldContext';
import { useState, useEffect } from 'react';

export function BodyToInput() {
  const { scrollProgress } = useFlowField();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    return scrollProgress.on('change', (v: number) => setProgress(v));
  }, [scrollProgress]);
  
  // This transformation happens between 0.55 and 0.75 of scroll
  const transformStart = 0.55;
  const transformEnd = 0.75;
  
  // Map scroll to transformation progress
  const morphProgress = Math.max(0, Math.min(1, (progress - transformStart) / (transformEnd - transformStart)));
  
  // Visibility based on proximity
  const distance = Math.abs(progress - ((transformStart + transformEnd) / 2));
  const opacity = Math.max(0.3, 1 - distance * 2);
  
  return (
    <div className="relative min-h-[400vh] pointer-events-none">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          className="relative w-full max-w-6xl"
          style={{ opacity }}
        >
          {/* The transformation canvas */}
          <svg
            viewBox="0 0 800 600"
            className="w-full h-auto"
            style={{ filter: `blur(${distance * 4}px)` }}
          >
            {/* Human form - lines that morph */}
            <HumanForm progress={morphProgress} />
            
            {/* Input symbols - emerge as body recedes */}
            <InputSymbols progress={morphProgress} />
            
            {/* Connecting lines - show the relationship */}
            <ConnectionLines progress={morphProgress} />
          </svg>
          
          {/* Labels that fade in at different stages */}
          <TransformationLabels progress={morphProgress} />
        </motion.div>
      </div>
    </div>
  );
}

function HumanForm({ progress }: { progress: number }) {
  // Body structure that gains definition, then bends toward abstraction
  const bodyOpacity = 1 - progress * 0.7;
  const bend = progress * 30;
  
  return (
    <g opacity={bodyOpacity}>
      {/* Head */}
      <circle
        cx="400"
        cy="150"
        r="30"
        fill="none"
        stroke="#5B6CFF"
        strokeWidth="2"
        opacity={0.6 + progress * 0.4}
      />
      
      {/* Spine */}
      <motion.path
        d={`M 400 180 Q ${400 + bend} 250, ${400 + bend * 1.5} 350`}
        fill="none"
        stroke="#5B6CFF"
        strokeWidth="2"
        opacity={0.8}
      />
      
      {/* Arms */}
      <motion.line
        x1="400"
        y1="220"
        x2={320 - bend}
        y2={280 + bend}
        stroke="#5B6CFF"
        strokeWidth="2"
        opacity={0.6}
      />
      <motion.line
        x1="400"
        y1="220"
        x2={480 + bend}
        y2={280 + bend}
        stroke="#5B6CFF"
        strokeWidth="2"
        opacity={0.6}
      />
      
      {/* Legs */}
      <motion.line
        x1={400 + bend * 1.5}
        y1="350"
        x2={360 + bend}
        y2="480"
        stroke="#5B6CFF"
        strokeWidth="2"
        opacity={0.6}
      />
      <motion.line
        x1={400 + bend * 1.5}
        y1="350"
        x2={440 + bend * 2}
        y2="480"
        stroke="#5B6CFF"
        strokeWidth="2"
        opacity={0.6}
      />
      
      {/* Joint points that pulse */}
      {[
        [400, 220],
        [320 - bend, 280 + bend],
        [480 + bend, 280 + bend],
        [400 + bend * 1.5, 350],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={4 + progress * 2}
          fill="#5B6CFF"
          opacity={0.8 - progress * 0.3}
        />
      ))}
    </g>
  );
}

function InputSymbols({ progress }: { progress: number }) {
  // Symbols emerge as body transforms
  const symbolOpacity = Math.max(0, progress - 0.3) * 1.5;
  const spread = progress * 80;
  
  return (
    <g opacity={symbolOpacity}>
      {/* Keyboard key */}
      <rect
        x={550 - spread}
        y="200"
        width="60"
        height="60"
        rx="8"
        fill="none"
        stroke="#7CF5C8"
        strokeWidth="2"
      />
      <text x={580 - spread} y="235" fill="#7CF5C8" fontSize="24" textAnchor="middle">
        W
      </text>
      
      {/* Mouse cursor */}
      <path
        d={`M ${250 + spread} 300 L ${250 + spread} 350 L ${270 + spread} 335 Z`}
        fill="none"
        stroke="#7CF5C8"
        strokeWidth="2"
      />
      
      {/* Gamepad button */}
      <circle
        cx={550 - spread}
        cy="400"
        r="25"
        fill="none"
        stroke="#7CF5C8"
        strokeWidth="2"
      />
      <circle cx={550 - spread} cy="400" r="8" fill="#7CF5C8" opacity="0.5" />
      
      {/* XR indicator */}
      <rect
        x={230 + spread}
        y="150"
        width="80"
        height="40"
        rx="20"
        fill="none"
        stroke="#7CF5C8"
        strokeWidth="2"
      />
      <text x={270 + spread} y="175" fill="#7CF5C8" fontSize="16" textAnchor="middle">
        XR
      </text>
    </g>
  );
}

function ConnectionLines({ progress }: { progress: number }) {
  // Lines that connect body to input symbols
  const lineOpacity = Math.max(0, (progress - 0.5) * 2);
  
  if (progress < 0.5) return null;
  
  return (
    <g opacity={lineOpacity} stroke="#5B6CFF" strokeWidth="1" strokeDasharray="4 4">
      <line x1="400" y1="220" x2="550" y2="230" opacity="0.3" />
      <line x1="400" y1="220" x2="250" y2="320" opacity="0.3" />
      <line x1="400" y1="350" x2="550" y2="400" opacity="0.3" />
      <line x1="400" y1="150" x2="270" y2="170" opacity="0.3" />
    </g>
  );
}

function TransformationLabels({ progress }: { progress: number }) {
  const labels = [
    { text: 'Body', range: [0, 0.3], position: 'top-20 left-1/4' },
    { text: 'Intent', range: [0.3, 0.6], position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' },
    { text: 'Action', range: [0.6, 0.9], position: 'top-20 right-1/4' },
    { text: 'System', range: [0.9, 1], position: 'bottom-20 left-1/2 -translate-x-1/2' },
  ];
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {labels.map(({ text, range, position }) => {
        const [start, end] = range;
        const labelOpacity = progress >= start && progress <= end
          ? Math.min((progress - start) / 0.1, (end - progress) / 0.1, 1)
          : 0;
        
        return (
          <motion.div
            key={text}
            className={`absolute ${position} text-[#E6E8EC] text-sm tracking-widest uppercase`}
            style={{ opacity: labelOpacity }}
          >
            {text}
          </motion.div>
        );
      })}
    </div>
  );
}
