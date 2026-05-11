import type { ReactNode } from 'react';

const FAQ =
  'border-b border-line py-7 [&[open]_summary::after]:rotate-45';

const FAQ_QUESTION =
  "flex cursor-pointer list-none items-center justify-between gap-5 " +
  "font-display text-[19px] font-[550] text-brand " +
  "after:text-[22px] after:text-accent after:transition-transform after:duration-200 after:content-['+'] " +
  "[&::-webkit-details-marker]:hidden";

const FAQ_ANSWER =
  'mt-5 max-w-[64ch] text-[15px] leading-[1.65] text-ink-soft [&_strong]:font-semibold [&_strong]:text-brand';

export function Faq({ children }: { children: ReactNode }) {
  return <details className={FAQ}>{children}</details>;
}

export function FaqQuestion({ children }: { children: ReactNode }) {
  return <summary className={FAQ_QUESTION}>{children}</summary>;
}

export function FaqAnswer({ children }: { children: ReactNode }) {
  return <div className={FAQ_ANSWER}>{children}</div>;
}
