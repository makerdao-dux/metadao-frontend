import type { Theme } from 'theme-ui';
import { makeTheme } from '@theme-ui/css/utils'

export const theme: Theme = makeTheme({
  config: {
    initialColorModeName: 'light',
    useColorSchemeMediaQuery: true,
  },
  fonts: {
    body: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
    heading: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
    monospace: 'monospace'
  },
  fontSizes: [10, 12, 14, 16, 18, 20, 24, 32, 48, 64, 96],
  colors: {
    text: '#231536',
    background: '#fff',
    primary: '#1AAB9B',
    primaryEmphasis: '#008E7B',
    secondary: '#D5D9E0',
    secondaryEmphasis: '#c1c5cc',
    accent: '#447AFB',
    highlight: '#FFFBEF',
    muted: '#D5D9E0',
    warning: '#F75524',
  },
  fontWeights: {
    body: 400,
    semiBold: 500,
    caps: 600,
    heading: 700,
    bold: 700
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
    tight: 1.05,
    loose: 1.2
  },

  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    }
    // a: {
    //   color: 'text',
    //   '@media (hover: hover) and (pointer: fine)': {
    //     '&:active': {
    //       color: 'text'
    //     },
    //     '&:hover': {
    //       color: 'primary'
    //     }
    //   },
    //   textDecoration: 'none',
    //   cursor: 'pointer'
    // }
  },
  links: {
    nav: {
      fontWeight: 'bold',
      fontSize: [3, 4],
      textTransform: 'uppercase',
      color: 'text',
      '@media (hover: hover) and (pointer: fine)': {
        '&:active': {
          color: 'text'
        },
        '&:hover': {
          color: 'primary'
        }
      },
      textDecoration: 'none',
      cursor: 'pointer'
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: 'primary',
    },
    warning: {
      bg: 'warning',
      color: 'background'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },
  alerts: {
    primary: {
      color: 'background',
      bg: 'primary',
    },
    warning: {
      bg: 'warning',
      color: 'background'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },
  layout: {
    body: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '0',
      maxWidth: '100%',
      margin: '0 auto'
    },
    main: {
      maxWidth: '1400px',
      padding: '30px',
      margin: '0 auto'
    }
  },
  breakpoints: ['40em', '63em', '88em'],
  buttons: {
    primary: {
      border: '1px solid transparent',
      padding: '0.6em 1.2em',
      fontSize: '1em',
      fontWeight: 'semiBold',
      fontFamily: 'inherit',
      backgroundColor: 'primary',
      cursor: 'pointer',
      transition: 'border-color 0.25s',
      '&:hover': {
        bg: 'primaryEmphasis'
      }
    },
    secondary: {
      variant: 'buttons.primary',
      bg: 'secondary',
      color: 'text',
      '&:hover': {
        bg: 'secondaryEmphasis'
      }
    },
    outline: {
      variant: 'buttons.primary',
      bg: 'background',
      color: 'text',
      borderColor: 'secondary',
      '&:hover': {
        bg: 'background',
        borderColor: 'text'
      }
    }
  }
});
