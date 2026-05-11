import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from '@/lib/clsx';

interface ProseProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Constrain the max width. Defaults to none (inherits parent). */
  maxWidth?: string;
}

const BASE =
  'flex flex-col gap-3.5 text-base leading-[1.75] text-ink-soft ' +
  '[&_strong]:font-semibold [&_strong]:text-brand ' +
  '[&_h3]:mt-4 [&_h3]:text-xl ' +
  '[&_ul]:m-0 [&_ul]:flex [&_ul]:list-none [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:p-0 ' +
  '[&_li]:relative [&_li]:pl-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[10px] ' +
  '[&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-accent [&_li]:before:content-[""]';

export function Prose({ children, maxWidth, className, style, ...rest }: ProseProps) {
  return (
    <div
      {...rest}
      className={clsx(BASE, className)}
      style={maxWidth ? { maxWidth, ...style } : style}
    >
      {children}
    </div>
  );
}

/** Pre-styled callout used inside Prose blocks. */
export function Callout({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx('rounded-sm border-l-[3px] border-accent bg-accent-soft px-5 py-4 text-[15px]', className)}>
      {children}
    </div>
  );
}
