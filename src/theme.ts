import {defineTheme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral';

/**
 * Helm brand theme, extends Astryx neutral.
 * Aesthetic: Japanese-modern hospitality. Mineral paper, deep pine,
 * quiet oak accents, precise typography, and restrained asymmetric curves.
 */
export const helmTheme = defineTheme({
  name: 'helm',
  extends: neutralTheme,
  color: {
    accent: '#084C2E', // helm green (a hex off British Racing Green #004225): [light, dark]
    neutralStyle: 'cool',
  },
  typography: {
    scale: {base: 16, ratio: 1.25},
    body: {
      family: 'Manrope',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
  },
  radius: {base: 6, multiplier: 1.4},
  tokens: {
    '--color-accent': ['#214B3B', '#C8B99F'],
    '--font-family-heading': '"Tenor Sans", "Helvetica Neue", sans-serif',
  },
  components: {
    button: {
      base: {borderRadius: '12px', fontWeight: '650'},
    },
    card: {
      base: {borderRadius: '16px'},
    },
  },
});
