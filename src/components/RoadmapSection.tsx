import { motion } from 'motion/react';
import { Check, Circle, Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const roadmapItems = [
  {
    title: 'Alpha',
    status: 'completed',
    icon: Check,
    description: 'Core motion detection and early testing',
  },
  {
    title: 'Beta',
    status: 'active',
    icon: Clock,
    description: 'Improved models and wider support',
  },
  {
    title: 'Public Release',
    status: 'planned',
    icon: Circle,
    description: 'General availability for all users',
  },
  {
    title: 'SDK Expansion',
    status: 'planned',
    icon: Circle,
    description: 'Additional languages and platforms',
  },
  {
    title: 'Platform Partnerships',
    status: 'planned',
    icon: Circle,
    description: 'Integration with major platforms',
  },
];

export function RoadmapSection() {
  const { isDark } = useTheme();

  return (
    <motion.section
      className="py-32"
      animate={{
        backgroundColor: 'transparent'
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block px-4 py-1 border rounded-full text-xs font-medium mb-6"
            animate={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#F8F9FA',
              borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#000000',
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            ROADMAP
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            animate={{
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            Our Journey
          </motion.h2>
          <motion.p
            className="text-xl"
            animate={{
              color: isDark ? '#999999' : '#666666'
            }}
          >
            Making motion a first-class input
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 p-8 rounded-3xl border-2 transition-all duration-300 relative"
              animate={{
                backgroundColor:
                  item.status === 'completed'
                    ? (isDark ? 'rgba(255,255,255,0.03)' : '#ffffff')
                    : item.status === 'active'
                      ? (isDark ? '#ffffff' : '#000000')
                      : (isDark ? 'rgba(255,255,255,0.03)' : '#ffffff'),
                borderColor:
                  item.status === 'completed'
                    ? (isDark ? 'rgba(255,255,255,0.1)' : '#000000')
                    : item.status === 'active'
                      ? (isDark ? '#ffffff' : '#000000')
                      : (isDark ? 'rgba(255,255,255,0.05)' : '#E5E5E5')
              }}
            >
              {/* Decorative element */}
              <div
                className={`absolute top-6 right-6 w-3 h-3 rounded-full ${item.status === 'active' ? 'animate-pulse' : ''
                  }`}
                style={{
                  backgroundColor:
                    item.status === 'completed'
                      ? (isDark ? '#ffffff' : '#000000')
                      : item.status === 'active'
                        ? '#FF6B35'
                        : (isDark ? 'rgba(255,255,255,0.1)' : '#E5E5E5')
                }}
              />

              {/* Icon */}
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full flex-shrink-0"
                style={{
                  backgroundColor:
                    item.status === 'completed'
                      ? (isDark ? '#ffffff' : '#000000')
                      : item.status === 'active'
                        ? '#FF6B35'
                        : (isDark ? 'rgba(255,255,255,0.05)' : '#F8F9FA'),
                  borderWidth: item.status === 'planned' ? '2px' : '0',
                  borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#E5E5E5'
                }}
              >
                <item.icon
                  className="w-8 h-8"
                  strokeWidth={2.5}
                  style={{
                    color:
                      item.status === 'completed'
                        ? (isDark ? '#000000' : '#ffffff')
                        : item.status === 'active'
                          ? '#ffffff'
                          : (isDark ? '#666666' : '#999999')
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <motion.h3
                    className="text-2xl font-bold"
                    animate={{
                      color: item.status === 'active'
                        ? (isDark ? '#000000' : '#ffffff')
                        : (isDark ? '#ffffff' : '#000000')
                    }}
                  >
                    {item.title}
                  </motion.h3>
                  <span
                    className="px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide"
                    style={{
                      backgroundColor:
                        item.status === 'completed'
                          ? (isDark ? '#ffffff' : '#000000')
                          : item.status === 'active'
                            ? '#FF6B35'
                            : (isDark ? 'rgba(255,255,255,0.05)' : '#F8F9FA'),
                      color:
                        item.status === 'completed'
                          ? (isDark ? '#000000' : '#ffffff')
                          : item.status === 'active'
                            ? '#ffffff'
                            : (isDark ? '#666666' : '#999999')
                    }}
                  >
                    {item.status === 'completed' ? 'Done' : item.status === 'active' ? 'Active' : 'Planned'}
                  </span>
                </div>
                <motion.p
                  className="text-sm leading-relaxed"
                  animate={{
                    color: item.status === 'active'
                      ? (isDark ? '#666666' : '#E5E5E5')
                      : (isDark ? '#999999' : '#666666')
                  }}
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
