import type { ReactNode, AnchorHTMLAttributes } from 'react';
import { clsx } from '@/lib/clsx';

type Variant = 'cta' | 'primary' | 'ghost' | 'wa';
type Size = 'default' | 'sm' | 'xl';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const BASE = [
  'inline-flex items-center gap-[10px] rounded-full font-semibold whitespace-nowrap',
  'transition-[transform,box-shadow,background] duration-200 hover:-translate-y-px',
  '[&_i]:inline-block [&_i]:leading-none [&_i]:align-[-2px]',
].join(' ');

const VARIANTS: Record<Variant, string> = {
  cta:     'bg-accent text-accent-ink shadow-cta hover:bg-[color-mix(in_oklch,var(--accent)_92%,black)]',
  primary: 'bg-brand text-brand-ink hover:bg-[color-mix(in_oklch,var(--brand)_92%,black)]',
  ghost:   'bg-transparent text-brand border border-line hover:border-brand',
  wa:      'bg-wa text-white',
};

const SIZES: Record<Size, string> = {
  default: 'py-[14px] px-[22px] text-[15px] [&_i]:text-[1.15em]',
  sm:      'py-[10px] px-4 text-sm [&_i]:text-[1em]',
  xl:      'py-[18px] px-7 text-base [&_i]:text-[1.25em]',
};

export function Button({ variant = 'primary', size = 'default', className, children, ...rest }: ButtonProps) {
  return (
    <a {...rest} className={clsx(BASE, VARIANTS[variant], SIZES[size], className)}>
      {children}
    </a>
  );
}

export function PhoneIcon() {
  return <i className="ph-fill ph-phone" aria-hidden="true" />;
}

export function WhatsAppIcon() {
  return <i className="ph-fill ph-whatsapp-logo" aria-hidden="true" />;
}
