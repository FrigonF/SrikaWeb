// Utility functions for scroll-based animations

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export function interpolate(
  progress: number,
  start: number,
  end: number
): number {
  return start + (end - start) * progress;
}

export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function easeInOutCubic(t: number): number {
  return t < 0.5 
    ? 4 * t * t * t 
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Scene management for multi-step scroll animations
export function getSceneProgress(
  totalProgress: number,
  sceneIndex: number,
  totalScenes: number
): number {
  const sceneStart = sceneIndex / totalScenes;
  const sceneEnd = (sceneIndex + 1) / totalScenes;
  
  if (totalProgress < sceneStart) return 0;
  if (totalProgress > sceneEnd) return 1;
  
  return (totalProgress - sceneStart) / (sceneEnd - sceneStart);
}
