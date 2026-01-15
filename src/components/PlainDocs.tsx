import { CleanHeading } from './CleanHeading';

const docs = [
  { title: 'Getting started', href: '#' },
  { title: 'Setup guide', href: '#' },
  { title: 'SDK docs', href: '#' },
  { title: 'API reference', href: '#' },
];

export function PlainDocs() {
  return (
    <section id="docs" className="py-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <CleanHeading 
          title="Documentation"
        />
        
        <div className="space-y-3">
          {docs.map((doc, index) => (
            <a
              key={index}
              href={doc.href}
              className="block px-6 py-4 bg-[#111827] border border-[#1F2937] rounded-lg hover:border-[#374151] transition-colors"
            >
              <span className="text-[#E5E7EB]">{doc.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
