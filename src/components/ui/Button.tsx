import type { ReactNode, AnchorHTMLAttributes } from 'react';
import { clsx } from '@/lib/clsx';

type Variant = 'cta' | 'primary' | 'ghost' | 'ghost-dark' | 'wa';
type Size = 'default' | 'sm' | 'xl';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const BASE = [
  'inline-flex items-center gap-[10px] rounded-full font-semibold whitespace-nowrap',
  'transition-[transform,box-shadow,background-color] duration-200 active:scale-[0.97]',
  '[&_i]:inline-block [&_i]:leading-none [&_i]:align-[-2px]',
].join(' ');

const VARIANTS: Record<Variant, string> = {
  cta:          'bg-accent text-accent-ink shadow-cta hover:shadow-[0_8px_32px_0_oklch(0.78_0.22_39_/_0.6)]',
  primary:      'bg-brand text-brand-ink hover:shadow-[0_8px_32px_0_oklch(0.45_0.08_160_/_0.55)]',
  ghost:        'bg-transparent text-brand border border-line hover:border-brand',
  'ghost-dark': 'bg-transparent text-dark-ink border border-white/20 hover:border-white/45 hover:bg-white/5',
  wa:           'bg-wa text-white hover:shadow-[0_8px_32px_0_oklch(0.78_0.18_150_/_0.6)]',
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
