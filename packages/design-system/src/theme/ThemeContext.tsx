// packages/design-system/src/theme/ThemeContext.tsx
import React, { createContext, useState, useContext, useCallback } from 'react';
import { DesignSystemTheme, ThemeVariant } from '../types';

// Definir temas concretos
const lightTheme: DesignSystemTheme = {
    variant: 'light',
    colors: {
        background: '#FFFFFF',
        surface: '#F9F9F9',

        // Primary (Blue)
        primaryLight: '#A6D4FA',
        primaryMain: '#90CAF9',
        primaryDark: '#648DAE',

        // Secondary (Pink)
        secondaryLight: '#F6A5C0',
        secondaryMain: '#F48FB1',
        secondaryDark: '#AA647B',

        // Error (Red)
        errorLight: '#E57373',
        errorMain: '#F44336',
        errorDark: '#D32F2F',

        // Warning (Orange)
        warningLight: '#FFB74D',
        warningMain: '#FF9800',
        warningDark: '#F57C00',

        // Info (Light Blue)
        infoLight: '#64B5F6',
        infoMain: '#2196F3',
        infoDark: '#1976D2',

        // Success (Green)
        successLight: '#81C784',
        successMain: '#4CAF50',
        successDark: '#388E3C',

        // Text
        textDefault: '#000000',
        textContrast: '#FFFFFF',
        textSecondary: '#666666',
        textDisabled: '#999999',
        textSuccess: '#2E7D32',
        textError: '#C62828'
    },
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
    colors: {
        background: '#121212',
        surface: '#1E1E1E',

        // Primary (Blue) - Slightly desaturated for dark mode
        primaryLight: '#90CAF9',
        primaryMain: '#64B5F6',
        primaryDark: '#42A5F5',

        // Secondary (Pink)
        secondaryLight: '#F48FB1',
        secondaryMain: '#F06292',
        secondaryDark: '#EC407A',

        // Error (Red)
        errorLight: '#EF5350',
        errorMain: '#E57373',
        errorDark: '#EF9A9A',

        // Warning (Orange)
        warningLight: '#FFB74D',
        warningMain: '#FFA726',
        warningDark: '#FF9800',

        // Info (Light Blue)
        infoLight: '#64B5F6',
        infoMain: '#4FC3F7',
        infoDark: '#29B6F6',

        // Success (Green)
        successLight: '#81C784',
        successMain: '#66BB6A',
        successDark: '#4CAF50',

        // Text
        textDefault: '#FFFFFF',
        textContrast: '#000000',
        textSecondary: '#B0B0B0',
        textDisabled: '#666666',
        textSuccess: '#81C784',
        textError: '#E57373'
    },
    spacing: lightTheme.spacing,
    elevationMapping: lightTheme.elevationMapping,
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
