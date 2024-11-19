import { createTheme, rem, rgba } from '@mantine/core'

// Core color palette
const colors = {
  deepgreen: [
    '#ebfaee', // 0: Lightest green
    '#d7f5dd',
    '#acd136', // 2: Main accent color
    '#9bc32e',
    '#8ab526',
    '#79a71e',
    '#003d30', // 6: Main brand color
    '#002f25',
    '#00211a',
    '#00130f', // 9: Darkest green
  ], // Deep forest green - primary brand color
  atlantis: [
    '#ebfaee', // 0: Lightest green
    '#d7f5dd',
    '#acd136', // 2: Main accent color
    '#9bc32e',
    '#8ab526',
    '#79a71e',
    '#003d30', // 6: Main brand color
    '#002f25',
    '#00211a',
    '#00130f', // 9: Darkest green
  ], // Fresh, energetic green - accent/action color
  grayish: [
    '#ffffff',
    '#f7f7f7',
    '#e1e2e6',
    '#d1d2d6',
    '#c1c2c6',
    '#b1b2b6',
    '#a1a2a6',
    '#919296',
    '#818286',
    '#717276',
  ], // Light gray - neutral color
  dark: [
    // Dark mode background variations
    '#e1e2e6', // Lightest - for text in dark mode
    '#c1c2c6',
    '#a1a2a6',
    '#818286',
    '#616266',
    '#414246',
    '#212226',
    '#111116',
    '#0a0a0f',
    '#003d30', // Darkest - main dark mode background
  ],
  light: [
    // Light mode variations
    '#ffffff', // Lightest - main light mode background
    '#f7f7f7',
    '#e1e2e6',
    '#d1d2d6',
    '#c1c2c6',
    '#b1b2b6',
    '#a1a2a6',
    '#919296',
    '#818286',
    '#717276', // Darkest
  ],
  // Primary color variations for components that expect a color palette
  primary: [
    '#ebfaee', // 0: Lightest green
    '#d7f5dd',
    '#acd136', // 2: Main accent color
    '#9bc32e',
    '#8ab526',
    '#79a71e',
    '#003d30', // 6: Main brand color
    '#002f25',
    '#00211a',
    '#00130f', // 9: Darkest green
  ],
}

export const theme = createTheme({
  primaryColor: 'primary',
  primaryShade: { light: 6, dark: 2 }, // Use dark green in light mode, accent green in dark mode
  colors: {
    deepgreen: [
      '#ebfaee', // 0: Lightest green
      '#d7f5dd',
      '#acd136', // 2: Main accent color
      '#9bc32e',
      '#8ab526',
      '#79a71e',
      '#003d30', // 6: Main brand color
      '#002f25',
      '#00211a',
      '#00130f', // 9: Darkest green
    ],
    atlantis: [
      '#ebfaee', // 0: Lightest green
      '#d7f5dd',
      '#acd136', // 2: Main accent color
      '#9bc32e',
      '#8ab526',
      '#79a71e',
      '#003d30', // 6: Main brand color
      '#002f25',
      '#00211a',
      '#00130f', // 9: Darkest green
    ],
    grayish: [
      '#ffffff',
      '#f7f7f7',
      '#e1e2e6',
      '#d1d2d6',
      '#c1c2c6',
      '#b1b2b6',
      '#a1a2a6',
      '#919296',
      '#818286',
      '#717276',
    ],
    dark: [
      // Dark mode background variations
      '#e1e2e6', // Lightest - for text in dark mode
      '#c1c2c6',
      '#a1a2a6',
      '#818286',
      '#616266',
      '#414246',
      '#212226',
      '#111116',
      '#0a0a0f',
      '#003d30', // Darkest - main dark mode background
    ],
    light: [
      // Light mode variations
      '#ffffff', // Lightest - main light mode background
      '#f7f7f7',
      '#e1e2e6',
      '#d1d2d6',
      '#c1c2c6',
      '#b1b2b6',
      '#a1a2a6',
      '#919296',
      '#818286',
      '#717276', // Darkest
    ],
    // Primary color variations for components that expect a color palette
    primary: [
      '#ebfaee', // 0: Lightest green
      '#d7f5dd',
      '#acd136', // 2: Main accent color
      '#9bc32e',
      '#8ab526',
      '#79a71e',
      '#003d30', // 6: Main brand color
      '#002f25',
      '#00211a',
      '#00130f', // 9: Darkest green
    ],
  },

  shadows: {
    sm: `0 1px 3px ${rgba(colors.deepgreen[6], 0.1)}`,
    md: `0 4px 6px ${rgba(colors.deepgreen[6], 0.1)}`,
    lg: `0 10px 15px ${rgba(colors.deepgreen[6], 0.1)}`,
    xl: `0 20px 25px ${rgba(colors.deepgreen[6], 0.1)}`,
  },

  fontFamily: '"Inter var", "Inter", system-ui, -apple-system, sans-serif',
  fontFamilyMonospace:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',

  headings: {
    fontFamily: '"Inter var", "Inter", system-ui, -apple-system, sans-serif',
    fontWeight: '600',
    sizes: {
      h1: { fontSize: rem(36), lineHeight: '1.2' },
      h2: { fontSize: rem(30), lineHeight: '1.3' },
      h3: { fontSize: rem(24), lineHeight: '1.4' },
      h4: { fontSize: rem(20), lineHeight: '1.5' },
      h5: { fontSize: rem(16), lineHeight: '1.5' },
      h6: { fontSize: rem(14), lineHeight: '1.5' },
    },
  },

  defaultRadius: 'md',

  components: {
    Modal: {
      defaultProps: {
        withCloseButton: false,
        styles: {
          header: { background: colors.dark[8] },
          content: { background: colors.dark[8] },
        },
        overlayProps: {
          backgroundOpacity: 0.55,
          blur: 3,
        },
      },
    },

    Input: {
      defaultProps: {
        styles: {
          input: { background: colors.dark[8] },
        },
      },
    },

    DateTimePicker: {
      defaultProps: {
        pointer: true,
        clearable: true,
        valueFormat: 'DD MMM YYYY hh:mm A',
        styles: { input: { background: colors.dark[8] } },
      },
    },
  },

  // Custom theme properties
  other: {
    colors: {
      background: {
        dark: colors.dark[8], // Dark mode background
        light: colors.light[2], // Light mode background
      },
    },
  },
})
