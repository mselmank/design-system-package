// packages/design-system/src/theme/ThemeContext.tsx
import React, { createContext, useState, useContext, useCallback } from 'react';
import { DesignSystemTheme, ThemeVariant } from '../types';

// Definir temas concretos - Pastel Palette (Light Mode: Contraste Pastel)
const lightTheme: DesignSystemTheme = {
    variant: 'light',
    colors: {
        // Light Mode: Soft gray backgrounds
        background: '#F0F4F8',
        surface: '#FFFFFF',

        // Primary - Fintual Blue (strong, original)
        primaryLight: '#87CEEB',
        primaryMain: '#007BFF',
        primaryDark: '#0056b3',

        // Secondary - Soft blue (pastel)
        secondaryLight: '#EBF3FA',
        secondaryMain: '#D9E3F0',
        secondaryDark: '#B8CDE3',

        // Error/Warning - Coral pastel
        errorLight: '#FFB3B3',
        errorMain: '#F08080',
        errorDark: '#E06666',

        // Warning - Coral pastel (same as error for consistency)
        warningLight: '#FFB3B3',
        warningMain: '#F08080',
        warningDark: '#E06666',

        // Info - Gray-blue medium
        infoLight: '#90A4AE',
        infoMain: '#607D8B',
        infoDark: '#546E7A',

        // Success - Sea green soft
        successLight: '#A5D6C8',
        successMain: '#79B4A8',
        successDark: '#5FA094',

        // Text - Dark blue/black on soft gray
        textDefault: '#2C3E50',
        textContrast: '#FFFFFF',
        textSecondary: '#607D8B',
        textDisabled: '#B0BEC5',
        textSuccess: '#5FA094',
        textError: '#E06666'
    },
    spacing: { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32, '2xl': 48 },
    elevationMapping: {
        none: 'none',
        // Soft shadows for light mode
        z1: '0px 2px 8px rgba(44, 62, 80, 0.08)',
        z2: '0px 4px 12px rgba(44, 62, 80, 0.12)',
        z3: '0px 8px 20px rgba(44, 62, 80, 0.16)'
    },
    typography: {
        h1: { fontSize: 24, fontWeight: '700', lineHeight: 32 },
        bodyL: { fontSize: 14, fontWeight: '400', lineHeight: 20 }
    }
};

const darkTheme: DesignSystemTheme = {
    variant: 'dark',
    colors: {
        // Dark Mode (Pastel Suave): Warm dark blue backgrounds
        background: '#1E1E2E',
        surface: '#2A2A3E',

        // Primary - Pastel blue medium
        primaryLight: '#B3CDE0',
        primaryMain: '#84A9C0',
        primaryDark: '#6B91A8',

        // Secondary - Charcoal gray dark
        secondaryLight: '#4D5A66',
        secondaryMain: '#36454F',
        secondaryDark: '#2A3740',

        // Error/Warning - Pink pastel
        errorLight: '#FFD6E0',
        errorMain: '#FFC0CB',
        errorDark: '#FFB3C1',

        // Warning - Pink pastel (same for consistency)
        warningLight: '#FFD6E0',
        warningMain: '#FFC0CB',
        warningDark: '#FFB3C1',

        // Info - Sky blue pastel
        infoLight: '#D4E6F1',
        infoMain: '#B3CDE0',
        infoDark: '#9ABFD6',

        // Success - Mint green pastel
        successLight: '#C8E6C3',
        successMain: '#A8D0A5',
        successDark: '#8FBF8C',

        // Text - White on dark warm blue
        textDefault: '#FFFFFF',
        textContrast: '#1E1E2E',
        textSecondary: '#B3CDE0',
        textDisabled: '#6B7A8A',
        textSuccess: '#A8D0A5',
        textError: '#FFC0CB'
    },
    spacing: lightTheme.spacing,
    elevationMapping: {
        none: 'none',
        // Soft glow effects for dark mode
        z1: '0px 2px 8px rgba(132, 169, 192, 0.15)',
        z2: '0px 4px 12px rgba(132, 169, 192, 0.2)',
        z3: '0px 8px 20px rgba(132, 169, 192, 0.25)'
    },
    typography: lightTheme.typography
};

interface ThemeContextProps {
    theme: DesignSystemTheme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentVariant, setCurrentVariant] = useState<ThemeVariant>('light');

    const theme = currentVariant === 'light' ? lightTheme : darkTheme;

    const toggleTheme = useCallback(() => {
        setCurrentVariant(prev => prev === 'light' ? 'dark' : 'light');
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
