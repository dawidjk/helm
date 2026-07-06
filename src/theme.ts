import {defineTheme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral';

/**
 * Helm brand theme — extends Astryx neutral.
 * Aesthetic: Apple/Ubiquiti product-site polish. Deep ink surfaces,
 * signal-blue accent, pill buttons, generous radii.
 */
export const helmTheme = defineTheme({
  name: 'helm',
  extends: neutralTheme,
  color: {
    accent: '#2E6FF2', // signal blue: [light, dark]
    neutralStyle: 'cool',
  },
  typography: {
    scale: {base: 16, ratio: 1.25},
    body: {
      family: 'Inter',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
  },
  radius: {base: 6, multiplier: 1.4},
  tokens: {
    '--color-accent': ['#2E6FF2', '#4C8DFF'],
  },
  components: {
    button: {
      base: {borderRadius: '9999px', fontWeight: '600'},
    },
    card: {
      base: {borderRadius: '20px'},
    },
  },
});
