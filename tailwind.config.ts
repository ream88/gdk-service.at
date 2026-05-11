import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        bg:           'var(--bg)',
        'bg-raised':  'var(--bg-raised)',
        'bg-panel':   'var(--bg-panel)',
        ink:          'var(--ink)',
        'ink-soft':   'var(--ink-soft)',
        'ink-mute':   'var(--ink-mute)',
        line:         'var(--line)',
        'line-soft':  'var(--line-soft)',
        brand:        'var(--brand)',
        'brand-ink':  'var(--brand-ink)',
        'brand-soft': 'var(--brand-soft)',
        accent:       'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        'accent-soft':'var(--accent-soft)',
        dark:         'var(--dark)',
        'dark-ink':   'var(--dark-ink)',
        wa:           'oklch(0.66 0.15 150)',
      },
      borderRadius: {
        sm:      '8px',
        DEFAULT: '14px',
        lg:      '24px',
        xl:      '32px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(20, 28, 22, 0.05), 0 1px 3px rgba(20, 28, 22, 0.04)',
        card: '0 4px 20px -4px rgba(20, 28, 22, 0.08), 0 2px 6px rgba(20, 28, 22, 0.04)',
        lift: '0 24px 48px -16px rgba(20, 28, 22, 0.22)',
        cta:  '0 10px 24px -10px color-mix(in oklch, var(--accent) 80%, transparent)',
      },
      fontFamily: {
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        sans:    ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      maxWidth: {
        wrap:  '1200px',
        tight: '1080px',
      },
      letterSpacing: {
        eyebrow: '0.18em',
        mono:    '0.02em',
      },
      keyframes: {
        fadeUp:  { from: { opacity: '0', transform: 'translateY(12px)' }, to: { opacity: '1', transform: 'none' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        'fade-up': 'fadeUp 500ms cubic-bezier(0.22,1,0.36,1) both',
        marquee:   'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
