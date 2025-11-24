// packages/design-system/src/index.ts

// Exporta el componente Box (el bundler resuelve a Box.web o Box.native)
export { Box } from './components/Box';

// Exporta el componente Text/Typography
export { Text } from './components/Text';

// Exporta el componente Button
export { Button } from './components/Button';

// Exporta el contexto de tema
export { ThemeProvider, useTheme } from './theme/ThemeContext';

// Export types
export * from './types';
