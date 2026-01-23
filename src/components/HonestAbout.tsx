import { CleanHeading } from './CleanHeading';
import { CleanCard } from './CleanCard';

export function HonestAbout() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <CleanHeading 
          title="About"
        />
        
        <CleanCard hover={false}>
          <div className="space-y-6 text-[#9CA3AF] leading-relaxed">
            <p>
              Built by a solo founder focused on correctness over hype.
            </p>
            <p>
              SRIKA started with a simple question: what if the most natural input device 
              is the one you already have? After years of research and development, 
              we've created an AI system that understands human movement with precision.
            </p>
            <p>
              No marketing fluff. No unrealistic promises. Just a working system that 
              does what it says.
            </p>
          </div>
        </CleanCard>
      </div>
    </section>
  );
}
