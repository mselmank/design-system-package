// packages/design-system/src/theme/ThemeContext.tsx
import React, { createContext, useState, useContext, useCallback } from 'react';
import { DesignSystemTheme, ThemeVariant } from '../types';

// Definir temas concretos (ejemplo conceptual)
const lightTheme: DesignSystemTheme = {
    variant: 'light',
    colors: { primary: '#226952', background: '#FFFFFF', surface: '#F9F9F9', textDefault: '#000000', textContrast: '#FFFFFF' },
    spacing: { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32, '2xl': 48 },
    elevationMapping: {
        none: 'none',
        z1: '0px 2px 4px rgba(0,0,0,0.1)',
        z2: '0px 4px 8px rgba(0,0,0,0.12)',
        z3: '0px 8px 16px rgba(0,0,0,0.14)'
    },
    typography: {
        h1: { fontSize: 32, fontWeight: '700', lineHeight: 40 },
        bodyL: { fontSize: 16, fontWeight: '400', lineHeight: 24 }
    }
};

const darkTheme: DesignSystemTheme = {
    variant: 'dark',
    colors: { primary: '#69B099', background: '#1A1A1A', surface: '#2C2C2C', textDefault: '#FFFFFF', textContrast: '#000000' },
    spacing: lightTheme.spacing,
    elevationMapping: lightTheme.elevationMapping, // Shadows might need adjustment for dark mode in real app
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
