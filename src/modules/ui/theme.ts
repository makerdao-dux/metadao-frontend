import type { Theme } from 'theme-ui';

export const theme: Theme = {
  fonts: {
    body: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
    heading: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
    monospace: 'monospace'
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    semiBold: 500,
    caps: 600
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
      borderRadius: '8px',
      border: '1px solid transparent',
      padding: '0.6em 1.2em',
      fontSize: '1em',
      fontWeight: 'semiBold',
      fontFamily: 'inherit',
      backgroundColor: '#1a1a1a',
      cursor: 'pointer',
      transition: 'border-color 0.25s',
      '&:hover': {
        borderColor: '#646cff'
      }
    },
    secondary: {
      variant: 'buttons.primary',
      backgroundColor: 'green',
      cursor: 'pointer',
      transition: 'border-color 0.25s',
      '&:hover': {
        borderColor: 'green'
      }
    },
  },
  links: {
    nostyle: {
      fontWeight: 'semiBold',
      color: '#646cff',
      textDecoration: 'inherit',
      '&:hover': {
        borderColor: '#535bf2'
      }
    }
  }
};
