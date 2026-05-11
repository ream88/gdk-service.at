import type { ReactNode } from 'react';
import { clsx } from '@/lib/clsx';

interface FeatureRowProps {
  /** Phosphor icon name without the "ph-fill" prefix, e.g. "ph-clock-countdown". Mutually exclusive with `step`. */
  icon?: string;
  /** Step number badge — used for numbered/method lists. Mutually exclusive with `icon`. */
  step?: number | string;
  title: ReactNode;
  body: ReactNode;
  /** Default "horizontal": icon on the left of text. "vertical": icon stacked above title. */
  layout?: 'horizontal' | 'vertical';
  /** Light or dark background context. Affects title/body colors. */
  tone?: 'default' | 'dark';
}

export function FeatureRow({ icon, step, title, body, layout = 'horizontal', tone = 'default' }: FeatureRowProps) {
  const titleClass = tone === 'dark' ? 'text-brand-ink' : 'text-brand';
  const bodyClass  = tone === 'dark' ? 'text-white/70' : 'text-ink-soft';

  const marker =
    step !== undefined ? (
      <span className="block font-display text-[40px] font-bold leading-none text-accent tabular-nums" aria-hidden="true">
        {step}
      </span>
    ) : icon ? (
      <i className={`ph-fill ${icon} block text-[40px] leading-none text-accent`} aria-hidden="true" />
    ) : null;

  if (layout === 'vertical') {
    return (
      <div>
        {marker}
        <h3 className={clsx('mt-4 text-xl', titleClass)}>{title}</h3>
        <p className={clsx('mt-1.5', bodyClass)}>{body}</p>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-5">
      <div className="shrink-0">{marker}</div>
      <div>
        <strong className={clsx('block font-semibold', titleClass)}>{title}</strong>
        <p className={clsx('mt-1', bodyClass)}>{body}</p>
      </div>
    </div>
  );
}
