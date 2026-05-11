import type { ReactNode } from 'react';
import { clsx } from '@/lib/clsx';
import { Placeholder } from '@/components/ui/Primitives';
import { Eyebrow } from '@/components/ui/Primitives';

interface ServiceCardProps {
  href: string;
  title: string;
  /** Body text shown under the title. */
  lede?: ReactNode;
  /** Small label above the title. */
  eyebrow?: string;
  /** Bulleted list shown under the lede. */
  bullets?: string[];
  /** Trailing call-to-action text. Defaults to "Mehr erfahren". Pass `null` to hide. */
  linkLabel?: string | null;
  /** Optional photo header above the body. */
  photo?: {
    ratio?: string;
    tone?: 'default' | 'dark' | 'accent';
    label: string;
  };
  /** Badge over the photo (only shown when photo is set). */
  badge?: { label: string; accent?: boolean };
  /** Letter shown as a small icon-box next to the title (alternative to photo). */
  glyph?: string;
  /** Anchor id (for in-page linking). */
  id?: string;
  /** Compact card: smaller title and padding, no link by default. */
  compact?: boolean;
}

export function ServiceCard({
  href,
  title,
  lede,
  eyebrow,
  bullets,
  linkLabel,
  photo,
  badge,
  glyph,
  id,
  compact,
}: ServiceCardProps) {
  const resolvedLinkLabel = linkLabel === undefined ? (compact ? null : 'Mehr erfahren') : linkLabel;
  return (
    <a
      href={href}
      id={id}
      className="group relative block overflow-hidden rounded-xl border border-line bg-bg-raised transition-[transform,box-shadow,border-color] duration-300 active:scale-[0.98] hover:border-[color-mix(in_oklch,var(--brand)_30%,var(--line))] hover:shadow-lift"
    >
      {photo && (
        <>
          <Placeholder
            ratio={photo.ratio ?? '16/10'}
            tone={photo.tone ?? 'default'}
            label={photo.label}
            className="!rounded-none"
          />
          {badge && (
            <span
              className={clsx(
                'absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold',
                badge.accent ? 'bg-accent text-accent-ink' : 'bg-bg-raised text-brand',
              )}
            >
              {badge.label}
            </span>
          )}
        </>
      )}
      <div className={compact ? 'px-8 py-5' : 'p-7'}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h3
          className={clsx(
            'flex items-center gap-2.5 leading-[1.2]',
            compact ? 'text-[20px]' : 'text-[26px]',
            eyebrow && 'mt-2',
          )}
        >
          {glyph && (
            <span className="inline-grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-accent-soft font-mono text-base text-accent">
              {glyph}
            </span>
          )}
          {title}
        </h3>
        {lede && <p className={clsx('mt-2 text-ink-soft', compact && 'text-sm')}>{lede}</p>}
        {bullets && (
          <ul className="m-0 mt-4 flex list-none flex-col gap-2 p-0 text-sm">
            {bullets.map(b => (
              <li key={b} className="flex items-start gap-2.5 text-ink">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {resolvedLinkLabel && (
          <span className="mt-6 inline-block text-sm font-semibold text-brand underline-offset-4 group-hover:underline">
            {resolvedLinkLabel}
          </span>
        )}
      </div>
    </a>
  );
}
