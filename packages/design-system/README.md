# Design System Package 🚀

Sistema de diseño unificado para React (Web) y React Native (Mobile).

## 📦 Instalación

```bash
npm install design-system-package
# o
pnpm add design-system-package
# o
yarn add design-system-package
```

## ⚙️ Configuración

Envuelve tu aplicación con el `ThemeProvider` para habilitar el sistema de temas (Light/Dark).

```tsx
import { ThemeProvider } from 'design-system-package';

export default function App() {
  return (
    <ThemeProvider>
      <TuApp />
    </ThemeProvider>
  );
}
```

## 🧩 Componentes

### `<Box />`
Contenedor principal para layout y espaciado. Se renderiza como `div` en Web y `View` en Mobile.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `padding` | `SpacingToken` | Espaciado interno (`xs`, `sm`, `md`, `lg`, `xl`) |
| `margin` | `SpacingToken` | Espaciado externo (`xs`, `sm`, `md`, `lg`, `xl`) |
| `backgroundColor` | `ColorToken` | Color de fondo (`primary`, `surface`, `background`) |
| `elevation` | `ElevationToken` | Sombra/Elevación (`z1`, `z2`, `z3`) |
| `flexDirection` | `'row' \| 'column'` | Dirección del layout flex |

**Ejemplo:**
```tsx
<Box padding="md" backgroundColor="surface" elevation="z1">
  <Contenido />
</Box>
```

### `<Text />`
Componente para tipografía. Se renderiza como etiquetas semánticas en Web (`h1`, `p`) y `Text` en Mobile.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `variant` | `'h1' \| 'bodyL'` | Estilo tipográfico a aplicar |
| `color` | `ColorToken` | Color del texto (`primary`, `textDefault`, `textContrast`) |

**Ejemplo:**
```tsx
<Text variant="h1" color="primary">Hola Fintual</Text>
```

### Hook `useTheme`
Para acceder al tema actual o cambiar entre modo claro y oscuro.

```tsx
const { theme, toggleTheme } = useTheme();

console.log(theme.variant); // 'light' | 'dark'
```

## 🎨 Tokens Disponibles

- **Colores:** `primary`, `background`, `surface`, `textDefault`, `textContrast`
- **Espaciado:** `none`, `xs` (4px), `sm` (8px), `md` (16px), `lg` (24px), `xl` (32px), `2xl` (48px)
