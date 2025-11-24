pnpm dev
```
> Abre `http://localhost:5173`
</Box>
```

### `<Text />` ✍️
Componente de tipografía semántica (`h1`, `p` en Web, `Text` en Mobile).

**Props:**
- `variant`: Estilo de texto (`h1`, `bodyL`).
- `color`: Token de color (`primary`, `textDefault`).

```tsx
<Text variant="h1" color="primary">Hola Mundo</Text>
```

### `ThemeProvider` 🎨
Provee el contexto de tema (Light/Dark) a toda la app.

```tsx
// En la raíz de tu app
<ThemeProvider>
  <AppContent />
</ThemeProvider>

// Hook para usar el tema
const { theme, toggleTheme } = useTheme();
```

## 🏗️ Arquitectura

Este sistema sigue una estrategia **Headless**:
- **Head (Lógica):** Tipos, tokens y funciones de mapeo compartidas (100% TypeScript).
- **Body (Renderizado):** Implementaciones específicas para cada plataforma (`.web.tsx` vs `.native.tsx`).
