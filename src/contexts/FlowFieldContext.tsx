import { createContext, useContext, ReactNode } from 'react';
import { useScroll, useTransform, MotionValue } from 'motion/react';

interface FlowFieldContextType {
  scrollY: MotionValue<number>;
  scrollProgress: MotionValue<number>;
  focusBand: MotionValue<number>;
}

const FlowFieldContext = createContext<FlowFieldContextType | null>(null);

export function FlowFieldProvider({ children }: { children: ReactNode }) {
  const { scrollY, scrollYProgress } = useScroll();
  
  // Focus band: the "lens" that moves through content
  // Maps scroll to a 0-1 value representing vertical position
  const focusBand = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <FlowFieldContext.Provider value={{ scrollY, scrollProgress: scrollYProgress, focusBand }}>
      {children}
    </FlowFieldContext.Provider>
  );
}

export function useFlowField() {
  const context = useContext(FlowFieldContext);
  if (!context) {
    throw new Error('useFlowField must be used within FlowFieldProvider');
  }
  return context;
}

// Helper: Calculate element's distance from focus band
// Returns a value between 0 (in focus) and 1 (far from focus)
export function calculateFocusDistance(
  scrollProgress: number,
  elementStart: number,
  elementEnd: number
): number {
  const elementCenter = (elementStart + elementEnd) / 2;
  const distance = Math.abs(scrollProgress - elementCenter);
  return Math.min(distance * 2, 1); // Scale and clamp
}

// Helper: Get element state based on focus distance
export function getElementState(focusDistance: number) {
  // Elements never disappear, they just shift state
  const opacity = 0.3 + (1 - focusDistance) * 0.7; // 0.3 to 1
  const blur = focusDistance * 8; // 0 to 8px
  const scale = 0.96 + (1 - focusDistance) * 0.04; // 0.96 to 1
  const drift = focusDistance * 20; // 0 to 20px lateral drift
  
  return { opacity, blur, scale, drift };
}
