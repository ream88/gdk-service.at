import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from '@/lib/clsx';
import { Eyebrow } from '@/components/ui/Primitives';

interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Optional eyebrow label above the title. */
  eyebrow?: ReactNode;
  /** Section title (rendered as h2). Wrap accented italic phrases in <em>. */
  title?: ReactNode;
  /** Default mode: right-side content in the header row. Ignored in cols mode. */
  aside?: ReactNode;

  /** Switches to 2-col layout. `true` → '1fr 1fr'. String → explicit grid-template-columns (e.g. '1.2fr 1fr'). */
  cols?: true | string;
  /** Swap column order. */
  reverse?: boolean;
  /** Vertical alignment of columns. Default 'center'. */
  align?: 'start' | 'center' | 'end';
  /** Gap utility (Tailwind class). Default 'gap-14'. */
  gap?: string;
  /** Below this width (px) the grid collapses to a single column. Default 900. */
  collapseBelow?: number;
  /** In cols mode: content rendered below the head in the primary (head-bearing) column. */
  primary?: ReactNode;

  /** Section body. In cols mode this becomes the secondary column. */
  children?: ReactNode;

  /** Padding override. Defaults to 'py-20'. Pass '' to drop padding. */
  padding?: string;
  /** Wrap override. Defaults to standard container. Pass '' to drop the inner wrap. */
  wrap?: string;
  /** Extra classes for the outer <section>. */
  className?: string;
  /** Extra classes for the inner wrap container. */
  innerClassName?: string;
}

const DEFAULT_WRAP = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const DEFAULT_PADDING = 'py-20';

const TITLE_BASE = 'text-[clamp(30px,3.8vw,48px)] [&_em]:italic [&_em]:text-[color-mix(in_oklch,var(--brand)_80%,var(--accent))]';
const TITLE_ROW  = 'mt-3 max-w-[18ch]';
const ALIGN: Record<NonNullable<SectionProps['align']>, string> = {
  start:  'items-start',
  center: 'items-center',
  end:    'items-end',
};
// Pre-enumerated to keep Tailwind JIT happy — dynamic class names aren't scanned.
const COLLAPSE: Record<number, string> = {
  480: 'max-[480px]:!grid-cols-1',
  520: 'max-[520px]:!grid-cols-1',
  560: 'max-[560px]:!grid-cols-1',
  640: 'max-[640px]:!grid-cols-1',
  720: 'max-[720px]:!grid-cols-1',
  800: 'max-[800px]:!grid-cols-1',
  900: 'max-[900px]:!grid-cols-1',
  960: 'max-[960px]:!grid-cols-1',
};

export function Section({
  eyebrow,
  title,
  aside,
  cols,
  reverse,
  align = 'center',
  gap = 'gap-14',
  collapseBelow = 900,
  primary,
  children,
  padding = DEFAULT_PADDING,
  wrap = DEFAULT_WRAP,
  className,
  innerClassName,
  ...rest
}: SectionProps) {
  if (cols) {
    const template = cols === true ? '1fr 1fr' : cols;
    const headCol = (eyebrow || title || primary) && (
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {title && <h2 className={clsx(TITLE_BASE, eyebrow ? 'mt-3' : undefined)}>{title}</h2>}
        {primary}
      </div>
    );
    return (
      <section {...rest} className={clsx(padding, className)}>
        <div
          className={clsx(
            wrap,
            'grid',
            gap,
            ALIGN[align],
            COLLAPSE[collapseBelow] ?? COLLAPSE[900],
            innerClassName,
          )}
          style={{ gridTemplateColumns: template }}
        >
          {reverse ? (
            <>
              {children}
              {headCol}
            </>
          ) : (
            <>
              {headCol}
              {children}
            </>
          )}
        </div>
      </section>
    );
  }

  const hasHead = eyebrow || title || aside;
  return (
    <section {...rest} className={clsx(padding, className)}>
      <div className={clsx(wrap, innerClassName)}>
        {hasHead && (
          <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
            <div>
              {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
              {title && <h2 className={clsx(TITLE_BASE, TITLE_ROW)}>{title}</h2>}
            </div>
            {aside && <div className="max-w-[36ch] text-ink-soft">{aside}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
