// packages/design-system/src/types.ts

export type SpacingToken = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ElevationToken = 'none' | 'z1' | 'z2' | 'z3';
export type ThemeVariant = 'light' | 'dark';

export interface ColorTokens {
    // Backgrounds
    background: string;
    surface: string;

    // Primary
    primaryLight: string;
    primaryMain: string;
    primaryDark: string;

    // Secondary
    secondaryLight: string;
    secondaryMain: string;
    secondaryDark: string;

    // Error
    errorLight: string;
    errorMain: string;
    errorDark: string;

    // Warning
    warningLight: string;
    warningMain: string;
    warningDark: string;

    // Info
    infoLight: string;
    infoMain: string;
    infoDark: string;

    // Success
    successLight: string;
    successMain: string;
    successDark: string;

    // Text
    textDefault: string;
    textContrast: string;
    textSecondary: string;
    textDisabled: string;
    textSuccess: string;
    textError: string;
}

export interface DesignSystemTheme {
    variant: ThemeVariant;
    colors: ColorTokens;
    spacing: Record<SpacingToken, number>;
    elevationMapping: Record<ElevationToken, string>;
    typography: {
        h1: { fontSize: number; fontWeight: string; lineHeight: number };
        bodyL: { fontSize: number; fontWeight: string; lineHeight: number };
    };
}

export interface TypographyProps {
    variant: keyof DesignSystemTheme['typography'];
    color?: keyof ColorTokens;
    children: React.ReactNode;
    style?: any;
}

export interface BoxProps {
    padding?: SpacingToken;
    margin?: SpacingToken;
    backgroundColor?: keyof ColorTokens;
    elevation?: ElevationToken;
    children?: React.ReactNode;
    flexDirection?: 'row' | 'column';
    display?: 'flex' | 'none';
}

// Button Props
export type ButtonVariant = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
export type ButtonShade = 'light' | 'main' | 'dark';

export interface ButtonProps {
    variant?: ButtonVariant;
    shade?: ButtonShade;
    label: string;
    onPress?: () => void;
    disabled?: boolean;
}
