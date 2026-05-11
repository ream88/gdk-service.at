import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from '@/lib/clsx';

interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  accent?: boolean;
}

export function Eyebrow({ children, accent, className, style, ...rest }: EyebrowProps) {
  return (
    <p
      {...rest}
      className={clsx(
        'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-eyebrow',
        'before:content-[""] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent',
        accent ? 'text-accent' : 'text-[color-mix(in_oklch,var(--brand)_72%,transparent)]',
        className,
      )}
      style={style}
    >
      {children}
    </p>
  );
}

interface PlaceholderProps {
  /** CSS aspect-ratio. Ignored when `fill` is true. */
  ratio?: string;
  /** Stretch to fill the parent height instead of constraining via aspect-ratio. */
  fill?: boolean;
  tone?: 'default' | 'dark' | 'accent';
  label: string;
  className?: string;
}

const TONE: Record<NonNullable<PlaceholderProps['tone']>, string> = {
  default: 'bg-[repeating-linear-gradient(135deg,oklch(0.88_0.02_80)_0_10px,oklch(0.92_0.015_80)_10px_20px)] border border-line text-ink-soft',
  dark:    'bg-[repeating-linear-gradient(135deg,oklch(0.28_0.03_155)_0_10px,oklch(0.32_0.035_155)_10px_20px)] border border-[oklch(0.38_0.04_155)] text-[oklch(0.85_0.02_80)]',
  accent:  'bg-[repeating-linear-gradient(135deg,oklch(0.74_0.12_50)_0_10px,oklch(0.78_0.1_50)_10px_20px)] border border-[oklch(0.68_0.14_50)] text-white',
};

const PILL = {
  default: 'bg-[color-mix(in_oklch,var(--bg)_80%,transparent)] text-ink-soft',
  dark:    'bg-black/25 text-white',
  accent:  'bg-black/25 text-white',
} as const;

export function Placeholder({ ratio, fill, tone = 'default', label, className }: PlaceholderProps) {
  const effectiveRatio = fill ? undefined : (ratio ?? '4/5');
  return (
    <div
      data-tone={tone}
      style={effectiveRatio ? { aspectRatio: effectiveRatio } : undefined}
      className={clsx(
        'relative grid place-items-center overflow-hidden rounded-lg text-center font-mono text-xs tracking-[0.04em]',
        fill && 'h-full min-h-[260px]',
        TONE[tone],
        className,
      )}
    >
      <span className={clsx('rounded-full px-3.5 py-2 backdrop-blur-sm', PILL[tone])}>{label}</span>
    </div>
  );
}

interface CrumbsProps {
  items: { href?: string; label: string }[];
}

export function Crumbs({ items }: CrumbsProps) {
  return (
    <nav className="flex flex-wrap gap-2 text-[13px] text-ink-mute mb-2.5">
      {items.map((it, i) => (
        <span key={i}>
          {it.href ? <a href={it.href} className="hover:text-brand">{it.label}</a> : <span>{it.label}</span>}
          {i < items.length - 1 && <span className="mx-2 opacity-50">/</span>}
        </span>
      ))}
    </nav>
  );
}
