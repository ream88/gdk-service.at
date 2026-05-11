import type { ReactNode } from 'react';
import { Button, PhoneIcon, WhatsAppIcon } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Primitives';

interface CTABlockProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  actions?: ReactNode;
}

export function CTABlock({ eyebrow, title, description, actions }: CTABlockProps) {
  return (
    <div
      className="relative grid grid-cols-[1.4fr_1fr] items-center gap-10 overflow-hidden rounded-xl bg-[radial-gradient(circle_at_85%_0%,color-mix(in_oklch,var(--accent)_28%,transparent),transparent_55%),linear-gradient(135deg,var(--dark),color-mix(in_oklch,var(--dark)_92%,black))] p-14 text-dark-ink max-[800px]:grid-cols-1 max-[800px]:px-7 max-[800px]:py-9"
    >
      <div>
        {eyebrow && <Eyebrow accent>{eyebrow}</Eyebrow>}
        <h2 className="max-w-[20ch] font-display text-[clamp(28px,3.5vw,40px)] font-[550] leading-[1.05] tracking-[-0.022em] text-dark-ink text-balance">
          {title}
        </h2>
        {description && <p className="mt-3.5 max-w-[48ch] opacity-75">{description}</p>}
      </div>
      <div className="flex flex-col gap-2.5">
        {actions ?? (
          <>
            <Button href="tel:+436701995544" variant="cta" size="xl">
              <PhoneIcon />
              0670 199 55 44
            </Button>
            <Button href="https://wa.me/436701995544" variant="wa">
              <WhatsAppIcon /> WhatsApp schreiben
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
