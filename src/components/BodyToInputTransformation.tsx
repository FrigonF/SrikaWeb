import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function BodyToInputTransformation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // CONTINUOUS SCENE PROGRESSION - all elements always visible
  // Just changing emphasis, not visibility
  
  // Title fades but never disappears
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 0.7, 0.6]);
  
  // Stages overlap with continuous transitions
  const outlineOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.5], [0.6, 1, 0.8, 0.6]);
  const jointsOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.5, 0.65], [0.6, 1, 0.8, 0.6]);
  const skeletonOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.7, 0.8], [0.6, 1, 0.8, 0.6]);
  const vectorsOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.85, 0.95], [0.6, 1, 0.8, 0.6]);
  
  // Dashboard emerges but skeleton stays visible
  const mainScale = useTransform(scrollYProgress, [0.75, 0.9], [1, 0.7]);
  const mainY = useTransform(scrollYProgress, [0.75, 0.9], [0, -80]);
  const dashboardOpacity = useTransform(scrollYProgress, [0.8, 0.95], [0.6, 1]);
  const dashboardY = useTransform(scrollYProgress, [0.8, 0.95], [60, 0]);

  // Joint positions
  const joints = [
    { x: 200, y: 100, label: 'head' },
    { x: 200, y: 140, label: 'neck' },
    { x: 200, y: 180, label: 'spine' },
    { x: 160, y: 160, label: 'l-shoulder' },
    { x: 240, y: 160, label: 'r-shoulder' },
    { x: 140, y: 220, label: 'l-elbow' },
    { x: 260, y: 220, label: 'r-elbow' },
    { x: 120, y: 280, label: 'l-hand' },
    { x: 280, y: 280, label: 'r-hand' },
    { x: 180, y: 280, label: 'l-hip' },
    { x: 220, y: 280, label: 'r-hip' },
    { x: 170, y: 360, label: 'l-knee' },
    { x: 230, y: 360, label: 'r-knee' },
    { x: 165, y: 440, label: 'l-foot' },
    { x: 235, y: 440, label: 'r-foot' },
  ];

  const skeleton = [
    { from: joints[0], to: joints[1] },
    { from: joints[1], to: joints[2] },
    { from: joints[1], to: joints[3] },
    { from: joints[1], to: joints[4] },
    { from: joints[3], to: joints[5] },
    { from: joints[4], to: joints[6] },
    { from: joints[5], to: joints[7] },
    { from: joints[6], to: joints[8] },
    { from: joints[2], to: joints[9] },
    { from: joints[2], to: joints[10] },
    { from: joints[9], to: joints[11] },
    { from: joints[10], to: joints[12] },
    { from: joints[11], to: joints[13] },
    { from: joints[12], to: joints[14] },
  ];

  return (
    <section ref={ref} className="relative h-[500vh] bg-[#0F172A]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Title - always visible */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#E5E7EB] text-center mb-16"
            style={{ opacity: titleOpacity }}
          >
            From Body to Input
          </motion.h2>

          <div className="relative flex items-center justify-center">
            {/* Main transformation container - all stages always rendered */}
            <motion.div
              className="relative w-full max-w-2xl aspect-square"
              style={{ scale: mainScale, y: mainY }}
            >
              {/* ALL STAGES OVERLAP - Stage 1: Simple outline */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ opacity: outlineOpacity }}
              >
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  <ellipse cx="200" cy="100" rx="40" ry="50" fill="none" stroke="#4F46E5" strokeWidth="2" />
                  <rect x="160" y="140" width="80" height="140" rx="10" fill="none" stroke="#4F46E5" strokeWidth="2" />
                  <line x1="160" y1="160" x2="120" y2="280" stroke="#4F46E5" strokeWidth="2" />
                  <line x1="240" y1="160" x2="280" y2="280" stroke="#4F46E5" strokeWidth="2" />
                  <line x1="180" y1="280" x2="165" y2="440" stroke="#4F46E5" strokeWidth="2" />
                  <line x1="220" y1="280" x2="235" y2="440" stroke="#4F46E5" strokeWidth="2" />
                </svg>
              </motion.div>

              {/* Stage 2: Joints appear - ALWAYS VISIBLE */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ opacity: jointsOpacity }}
              >
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  {joints.map((joint, i) => (
                    <circle
                      key={i}
                      cx={joint.x}
                      cy={joint.y}
                      r="5"
                      fill="#10B981"
                    />
                  ))}
                </svg>
              </motion.div>

              {/* Stage 3: Skeleton forms - ALWAYS VISIBLE */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ opacity: skeletonOpacity }}
              >
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  {skeleton.map((bone, i) => (
                    <line
                      key={i}
                      x1={bone.from.x}
                      y1={bone.from.y}
                      x2={bone.to.x}
                      y2={bone.to.y}
                      stroke="#4F46E5"
                      strokeWidth="2"
                    />
                  ))}
                  {joints.map((joint, i) => (
                    <circle key={i} cx={joint.x} cy={joint.y} r="6" fill="#10B981" />
                  ))}
                </svg>
              </motion.div>

              {/* Stage 4: Motion vectors - ALWAYS VISIBLE */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ opacity: vectorsOpacity }}
              >
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  {skeleton.map((bone, i) => (
                    <line
                      key={`bone-${i}`}
                      x1={bone.from.x}
                      y1={bone.from.y}
                      x2={bone.to.x}
                      y2={bone.to.y}
                      stroke="#4F46E5"
                      strokeWidth="2"
                    />
                  ))}
                  {joints.map((joint, i) => (
                    <g key={i}>
                      <circle cx={joint.x} cy={joint.y} r="6" fill="#10B981" />
                      <motion.line
                        x1={joint.x}
                        y1={joint.y}
                        x2={joint.x + Math.cos(i) * 30}
                        y2={joint.y + Math.sin(i) * 30}
                        stroke="#10B981"
                        strokeWidth="1.5"
                        strokeDasharray="4 2"
                      />
                      <circle
                        cx={joint.x + Math.cos(i) * 30}
                        cy={joint.y + Math.sin(i) * 30}
                        r="3"
                        fill="#10B981"
                      />
                    </g>
                  ))}
                </svg>
              </motion.div>
            </motion.div>

            {/* Stage 5: Dashboard UI emerges - ALWAYS VISIBLE */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ opacity: dashboardOpacity, y: dashboardY }}
            >
              <div className="bg-[#111827] border border-[#4F46E5] rounded-2xl p-8 max-w-2xl w-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#9CA3AF]">Tracking Quality</span>
                    <span className="text-[#10B981]">98%</span>
                  </div>
                  <div className="h-2 bg-[#1F2937] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#4F46E5] to-[#10B981]"
                      style={{ width: '98%' }}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {['Posture', 'Motion', 'Intent'].map((label, i) => (
                      <div
                        key={i}
                        className="bg-[#0F172A] border border-[#1F2937] rounded-lg p-4 text-center"
                      >
                        <div className="text-2xl text-[#4F46E5] mb-1">✓</div>
                        <div className="text-sm text-[#9CA3AF]">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}