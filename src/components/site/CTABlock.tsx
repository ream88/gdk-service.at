import type { ReactNode } from 'react';
import { Button, PhoneIcon, WhatsAppIcon } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Primitives';

export type CTAVariant = 'standard' | 'urgent';

const VARIANTS: Record<CTAVariant, { eyebrow: ReactNode; title: ReactNode; description: ReactNode }> = {
  standard: {
    eyebrow: 'Persönlich erreichbar',
    title: 'Ein Anruf reicht.',
    description: 'Mo–Fr 8:00–17:00. In dringenden Fällen auch außerhalb. Sie sprechen mit mir – nicht mit einem Callcenter.',
  },
  urgent: {
    eyebrow: 'Akutfall?',
    title: <>Same-day Service –<br />wenn's wirklich brennt.</>,
    description: 'Persönlich, diskret und meist noch heute vor Ort. Ich richte mich nach Ihrer Dringlichkeit.',
  },
};

interface CTABlockProps {
  /** One of the five named presets. Defaults to 'standard'. */
  variant?: CTAVariant;
  /** Override eyebrow text. */
  eyebrow?: ReactNode;
  /** Override title. */
  title?: ReactNode;
  /** Override description. */
  description?: ReactNode;
  /** Override the action buttons. */
  actions?: ReactNode;
}

export function CTABlock({ variant = 'standard', eyebrow, title, description, actions }: CTABlockProps) {
  const preset = VARIANTS[variant];
  return (
    <div
      className="relative grid grid-cols-[1.9fr_1fr] items-center gap-10 overflow-hidden rounded-xl bg-[radial-gradient(circle_at_85%_0%,color-mix(in_oklch,var(--accent)_28%,transparent),transparent_55%),linear-gradient(135deg,var(--dark),color-mix(in_oklch,var(--dark)_92%,black))] p-14 text-dark-ink max-[800px]:grid-cols-1 max-[800px]:px-7 max-[800px]:py-9"
    >
      <div>
        <Eyebrow accent>{eyebrow ?? preset.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-[26ch] font-display text-[clamp(28px,3.5vw,40px)] font-[550] leading-[1.05] tracking-[-0.022em] text-dark-ink text-balance">
          {title ?? preset.title}
        </h2>
        <p className="mt-3.5 max-w-[58ch] opacity-75">{description ?? preset.description}</p>
      </div>
      <div className="flex w-full max-w-[240px] flex-col items-stretch gap-2.5 justify-self-end [&>a]:justify-center max-[800px]:max-w-none max-[800px]:justify-self-stretch">
        {actions ?? (
          <>
            <Button href="tel:+436701995544" variant="cta">
              <PhoneIcon />
              0670 199 55 44
            </Button>
            <Button href="https://wa.me/436701995544" variant="wa">
              <WhatsAppIcon /> WhatsApp
            </Button>
            <a
              href="/kontakt.html"
              className="mt-2 text-center text-sm text-dark-ink/70 underline-offset-4 transition-colors duration-150 hover:text-dark-ink hover:underline"
            >
              Termin per Formular
            </a>
          </>
        )}
      </div>
    </div>
  );
}
