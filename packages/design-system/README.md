# 🎨 Fintual Design System

> Cross-platform components for React & React Native

[![npm version](https://img.shields.io/npm/v/@mselmank/design-system-package.svg)](https://www.npmjs.com/package/@mselmank/design-system-package)

## 📦 Installation

```bash
npm install @mselmank/design-system-package
```

## 🚀 Quick Start

```tsx
import { ThemeProvider, Box, Text, Button } from '@mselmank/design-system-package';

function App() {
  return (
    <ThemeProvider>
      <Box padding="lg" backgroundColor="background">
        <Text variant="h1" color="textDefault">Hello World</Text>
        <Button label="Click me" variant="primary" />
      </Box>
    </ThemeProvider>
  );
}
```

## 📚 Components

### 🎭 ThemeProvider

Wrap your app to enable theming and dark mode.

```tsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

**Hook:**
```tsx
const { theme, toggleTheme } = useTheme();
// theme.variant: 'light' | 'dark'
```

---

### 📦 Box

Layout container with spacing and styling.

**Props:**
- `padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'`
- `margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'`
- `backgroundColor?: string` - Any color from theme
- `elevation?: 'none' | 'z1' | 'z2' | 'z3'`
- `flexDirection?: 'row' | 'column'`
- `display?: 'flex' | 'none'`

**Example:**
```tsx
<Box padding="md" backgroundColor="surface" elevation="z2">
  <Text>Content here</Text>
</Box>
```

---

### 📝 Text

Typography with semantic variants.

**Props:**
- `variant: 'h1' | 'bodyL'` - Text style
- `color?: string` - Any color from theme

**Colors:**
- `textDefault` - Primary text
- `textSecondary` - Muted text
- `textSuccess` - Success state
- `textError` - Error state
- `textDisabled` - Disabled state
- `textContrast` - High contrast

**Example:**
```tsx
<Text variant="h1" color="textDefault">Heading</Text>
<Text variant="bodyL" color="textSecondary">Body text</Text>
```

---

### 🔘 Button

Interactive buttons with multiple styles.

**Props:**
- `label: string` - Button text (required)
- `variant?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'`
- `shade?: 'light' | 'main' | 'dark'`
- `onPress?: () => void` - Click handler
- `disabled?: boolean`

**Example:**
```tsx
<Button 
  label="Save Changes" 
  variant="primary" 
  shade="main"
  onPress={() => console.log('Clicked!')} 
/>
```

## 🎨 Theme Colors

Each variant has 3 shades:

| Variant | Usage |
|---------|-------|
| **primary** | Main brand actions |
| **secondary** | Secondary actions |
| **error** | Destructive actions |
| **warning** | Warning states |
| **info** | Informational |
| **success** | Success states |

## 📱 React Native

Same API, works out of the box:

```tsx
import { ThemeProvider, Box, Text, Button } from '@mselmank/design-system-package';
import { View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Box padding="lg">
            <Text variant="h1" color="textDefault">Hello Mobile</Text>
            <Button label="Press me" variant="primary" />
          </Box>
        </ScrollView>
      </View>
    </ThemeProvider>
  );
}
```

## 🌗 Dark Mode

```tsx
import { useTheme } from '@mselmank/design-system-package';

function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();
  
  return (
    <Button 
      label={`Mode: ${theme.variant}`} 
      onPress={toggleTheme} 
    />
  );
}
```

## 📏 Spacing Scale

| Token | Value |
|-------|-------|
| `none` | 0px |
| `xs` | 4px |
| `sm` | 8px |
| `md` | 16px |
| `lg` | 24px |
| `xl` | 32px |
| `2xl` | 48px |

## 🔧 TypeScript

Fully typed out of the box:

```tsx
import type { 
  ButtonVariant, 
  ButtonShade,
  ColorTokens 
} from '@mselmank/design-system-package';
```

## 📄 License

MIT © [Fintual](https://github.com/mselmank/fintual-ds-monorepo)
