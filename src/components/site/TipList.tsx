import type { ReactNode } from 'react';

interface TipListProps {
  /** Each entry is the body of a single tip. Use `<strong>` for inline emphasis. */
  items: ReactNode[];
}

export function TipList({ items }: TipListProps) {
  return (
    <ul className="m-0 flex list-none flex-col gap-3 p-0">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-ink [&_strong]:text-brand">
          <span className="mt-[10px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
