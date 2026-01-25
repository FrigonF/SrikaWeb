import { useEffect, useState, useRef, RefObject } from 'react';

interface ScrollProgress {
  progress: number; // 0 to 1
  isInView: boolean;
}

export function useScrollProgress(options?: {
  start?: string; // e.g., "top bottom" 
  end?: string;   // e.g., "bottom top"
}): [RefObject<HTMLDivElement>, ScrollProgress] {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on element position
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const elementBottom = rect.bottom;
      
      // Progress from when element enters viewport to when it leaves
      const startPoint = windowHeight;
      const endPoint = -elementHeight;
      const scrollRange = startPoint - endPoint;
      const currentPosition = startPoint - elementTop;
      
      const calculatedProgress = Math.max(0, Math.min(1, currentPosition / scrollRange));
      setProgress(calculatedProgress);
      
      // Check if in view
      setIsInView(elementTop < windowHeight && elementBottom > 0);
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return [ref, { progress, isInView }];
}
