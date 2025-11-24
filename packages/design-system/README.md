# Fintual Design System

Cross-platform design system for React and React Native applications, featuring a unified component library with full dark mode support.

## Installation

```bash
npm install @mselmank/design-system-package
# or
pnpm add @mselmank/design-system-package
```

## Quick Start

### Web (React)

```tsx
import { ThemeProvider, Box, Text, Button, useTheme } from '@mselmank/design-system-package';

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

function Content() {
  const { toggleTheme } = useTheme();
  
  return (
    <Box padding="lg" backgroundColor="background">
      <Text variant="h1" color="textDefault">Hello World</Text>
      <Button label="Toggle Theme" variant="primary" onPress={toggleTheme} />
    </Box>
  );
}
```

### Mobile (React Native)

```tsx
import { ThemeProvider, Box, Text, Button } from '@mselmank/design-system-package';
import { View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Box padding="lg" backgroundColor="background">
            <Text variant="h1" color="textDefault">Hello World</Text>
            <Button label="Click me" variant="primary" />
          </Box>
        </ScrollView>
      </View>
    </ThemeProvider>
  );
}
```

## Components

### Box
Layout container with spacing and styling.

**Props:** `padding`, `margin`, `backgroundColor`, `elevation`, `flexDirection`, `display`

### Text
Typography component with variants.

**Props:** `variant` ('h1' | 'bodyL'), `color`

### Button
Button with semantic variants and shades.

**Props:** `label`, `variant`, `shade`, `onPress`, `disabled`

**Variants:** primary, secondary, error, warning, info, success  
**Shades:** light, main, dark

### ThemeProvider
Wrap your app to enable theming.

### useTheme
Hook to access theme and toggle dark mode.

```tsx
const { theme, toggleTheme } = useTheme();
```

## Color Palette

6 semantic variants (primary, secondary, error, warning, info, success), each with 3 shades (light, main, dark).

Text colors: textDefault, textSecondary, textSuccess, textError, textDisabled, textContrast

## Publishing

See [PUBLISHING.md](./PUBLISHING.md) for npm publishing instructions.

## License

MIT
