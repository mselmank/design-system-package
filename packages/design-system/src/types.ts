// packages/design-system/src/types.ts

export type SpacingToken = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ElevationToken = 'none' | 'z1' | 'z2' | 'z3';
export type ThemeVariant = 'light' | 'dark';

// 1. Color Tokens
export interface ColorTokens {
    primary: string;      // Color principal de la marca
    background: string;   // Fondo principal de la app
    surface: string;      // Fondo para Cards, Box, etc.
    textDefault: string;  // Color de texto principal
    textContrast: string; // Color de texto en fondos primarios
}

// 2. Estructura Completa del Tema
export interface DesignSystemTheme {
    variant: ThemeVariant;
    colors: ColorTokens;
    spacing: Record<SpacingToken, number>;
    elevationMapping: Record<ElevationToken, string>; // Added for web shadow mapping
    typography: {
        h1: { fontSize: number; fontWeight: string; lineHeight: number };
        bodyL: { fontSize: number; fontWeight: string; lineHeight: number };
        // Add more as needed
    };
}

// 3. Propiedades Headless para Tipografía (PoC)
export interface TypographyProps {
    variant: keyof DesignSystemTheme['typography'];
    color?: keyof ColorTokens;
    children: React.ReactNode;
    // Common props can go here
}

// Box Props
export interface BoxProps {
    padding?: SpacingToken;
    margin?: SpacingToken;
    backgroundColor?: keyof ColorTokens;
    elevation?: ElevationToken;
    children?: React.ReactNode;
    // Add flex props as needed for the POC
    flexDirection?: 'row' | 'column';
    display?: 'flex' | 'none';
}
