interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, gradient = true }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-4xl md:text-5xl lg:text-6xl mb-4 ${gradient ? 'bg-gradient-to-r from-[#8B5CF6] via-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
