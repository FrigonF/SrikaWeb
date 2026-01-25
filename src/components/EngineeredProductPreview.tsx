import { motion } from 'motion/react';
import { CleanHeading } from './CleanHeading';

export function EngineeredProductPreview() {
  const joints = [
    { x: 100, y: 40, label: 'head' },
    { x: 100, y: 55, label: 'neck' },
    { x: 100, y: 75, label: 'shoulder' },
    { x: 70, y: 110, label: 'left-hand' },
    { x: 130, y: 110, label: 'right-hand' },
    { x: 100, y: 140, label: 'hip' },
    { x: 75, y: 210, label: 'left-foot' },
    { x: 125, y: 210, label: 'right-foot' },
  ];

  return (
    <section id="product" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <CleanHeading title="Product Preview" />
        </motion.div>
        
        <motion.div
          className="bg-[#111827] border border-[#1F2937] rounded-lg p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ borderColor: '#374151' }}
        >
          {/* Subtle glow */}
          <motion.div
            className="absolute inset-0 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.05) 0%, transparent 70%)',
            }}
          />
          
          {/* Skeleton visualization */}
          <div className="aspect-video bg-[#0F172A] rounded-lg border border-[#1F2937] relative overflow-hidden mb-4">
            {/* Breathing skeleton */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.01, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg viewBox="0 0 200 300" className="w-32 h-48">
                {/* Skeleton lines */}
                <motion.g
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  {/* Head */}
                  <circle cx="100" cy="40" r="15" fill="none" stroke="#4F46E5" strokeWidth="1" />
                  {/* Body */}
                  <line x1="100" y1="55" x2="100" y2="140" stroke="#4F46E5" strokeWidth="1" />
                  {/* Arms */}
                  <line x1="100" y1="75" x2="70" y2="110" stroke="#4F46E5" strokeWidth="1" />
                  <line x1="100" y1="75" x2="130" y2="110" stroke="#4F46E5" strokeWidth="1" />
                  {/* Legs */}
                  <line x1="100" y1="140" x2="75" y2="210" stroke="#4F46E5" strokeWidth="1" />
                  <line x1="100" y1="140" x2="125" y2="210" stroke="#4F46E5" strokeWidth="1" />
                </motion.g>
                
                {/* Pulsing joints */}
                {joints.map((joint, i) => (
                  <motion.circle
                    key={joint.label}
                    cx={joint.x}
                    cy={joint.y}
                    r="3"
                    fill="#4F46E5"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.8, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: i * 0.1 + 0.5 
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 0.9, 0.6],
                    }}
                    style={{
                      animationDelay: `${i * 0.2}s`,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.2,
                    }}
                  />
                ))}
                
                {/* Animated focus ring on center joint */}
                <motion.circle
                  cx="100"
                  cy="140"
                  r="8"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="0.5"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: [0, 0.5, 0],
                    scale: [0.5, 1.5, 2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              </svg>
            </motion.div>
            
            {/* Scan line effect */}
            <motion.div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/30 to-transparent"
              animate={{
                top: ['0%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
          
          <motion.p
            className="text-center text-[#9CA3AF] text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Live posture recognition interface
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
