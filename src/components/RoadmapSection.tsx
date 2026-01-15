import { motion } from 'motion/react';
import { Check, Circle, Clock } from 'lucide-react';

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
  return (
    <section className="py-24 bg-[#111827]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4">
            Roadmap
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            Our journey to make motion a first-class input
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-start gap-4 p-6 rounded-xl border transition-all duration-300 ${
                item.status === 'completed'
                  ? 'bg-[#10B981]/5 border-[#10B981]/30'
                  : item.status === 'active'
                  ? 'bg-[#4F46E5]/5 border-[#4F46E5] shadow-lg shadow-[#4F46E5]/10'
                  : 'bg-[#0F172A] border-[#1F2937]'
              }`}
            >
              {/* Icon */}
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0 ${
                  item.status === 'completed'
                    ? 'bg-[#10B981]/10 border border-[#10B981]/30'
                    : item.status === 'active'
                    ? 'bg-[#4F46E5]/10 border border-[#4F46E5]/30'
                    : 'bg-[#111827] border border-[#1F2937]'
                }`}
              >
                <item.icon
                  className={`w-6 h-6 ${
                    item.status === 'completed'
                      ? 'text-[#10B981]'
                      : item.status === 'active'
                      ? 'text-[#4F46E5]'
                      : 'text-[#9CA3AF]'
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-[#E5E7EB]">
                    {item.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.status === 'completed'
                        ? 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30'
                        : item.status === 'active'
                        ? 'bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/30'
                        : 'bg-[#111827] text-[#9CA3AF] border border-[#1F2937]'
                    }`}
                  >
                    {item.status === 'completed' ? '✓ Done' : item.status === 'active' ? 'In Progress' : 'Planned'}
                  </span>
                </div>
                <p className="text-[#9CA3AF]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
