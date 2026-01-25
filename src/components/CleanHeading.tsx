interface CleanHeadingProps {
  title: string;
  subtitle?: string;
}

export function CleanHeading({ title, subtitle }: CleanHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl text-[#E5E7EB] mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-[#9CA3AF]">{subtitle}</p>}
    </div>
  );
}
