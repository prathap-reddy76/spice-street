import { useInView } from '../hooks/useInView';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeading({ label, title, subtitle, light = false }: SectionHeadingProps) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`mx-auto mb-12 max-w-2xl text-center transition-all duration-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      {label && (
        <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-brand-500">
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl font-bold leading-tight md:text-4xl ${
          light ? 'text-white' : 'text-warm-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? 'text-warm-400' : 'text-warm-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
