import { theme } from '../src/modules/ui/theme';
import { ThemeProvider } from 'theme-ui';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <div style={{ maxWidth: 1280 }}>
        <Story />
      </div>
    </ThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
