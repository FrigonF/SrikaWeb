import { useEffect, useState, useRef, RefObject } from 'react';

interface PinProgress {
  progress: number; // 0 to 1 during pinned phase
  isPinned: boolean;
  localProgress: number; // 0 to 1 within this specific pin
}

export function useScrollPin(
  scenes: number = 3
): [RefObject<HTMLDivElement>, PinProgress] {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isPinned, setIsPinned] = useState(false);
  const [localProgress, setLocalProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Pin when element reaches top
      const shouldPin = rect.top <= 0 && rect.bottom > windowHeight;
      setIsPinned(shouldPin);
      
      // Calculate progress through all scenes
      if (rect.top <= 0) {
        const scrolled = Math.abs(rect.top);
        const totalScrollDistance = rect.height - windowHeight;
        const calculatedProgress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
        setProgress(calculatedProgress);
        
        // Local progress within current scene
        const sceneIndex = Math.floor(calculatedProgress * scenes);
        const sceneProgress = (calculatedProgress * scenes) % 1;
        setLocalProgress(sceneProgress);
      } else {
        setProgress(0);
        setLocalProgress(0);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [scenes]);

  return [ref, { progress, isPinned, localProgress }];
}
