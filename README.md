# Fintual Design System 🚀

Sistema de diseño *headless* y cross-platform para React (Web) y React Native (Mobile), construido con TypeScript en un Monorepo.

## 🛠️ Inicio Rápido

Instala las dependencias desde la raíz:

```bash
pnpm install
```

## 🏃‍♂️ Ejecutar Proyectos

### Web 🖥️
Aplicación Vite + React.

```bash
cd apps/web
pnpm dev
```
> Abre `http://localhost:5173`

### Mobile 📱
Aplicación Expo + React Native.

```bash
cd apps/mobile
pnpm start --clear
```
> Escanea el QR con **Expo Go** o presiona `a` (Android) / `i` (iOS).

---

## 🧩 Componentes

### `<Box />` 📦
Contenedor flexible polimórfico (`div` en Web, `View` en Mobile).

**Props:**
- `padding`, `margin`: Tokens de espaciado (`xs`, `sm`, `md`, etc.).
- `backgroundColor`: Token de color (`primary`, `surface`, etc.).
- `elevation`: Sombra (`z1`, `z2`, `z3`).
- `flexDirection`, `display`.

```tsx
<Box padding="md" backgroundColor="surface" elevation="z1">
  {/* contenido */}
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
