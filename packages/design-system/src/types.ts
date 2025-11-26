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
    // Spacing
    padding?: SpacingToken;
    margin?: SpacingToken;
    px?: SpacingToken;
    py?: SpacingToken;
    pt?: SpacingToken;
    pb?: SpacingToken;
    pl?: SpacingToken;
    pr?: SpacingToken;
    mx?: SpacingToken;
    my?: SpacingToken;
    mt?: SpacingToken;
    mb?: SpacingToken;
    ml?: SpacingToken;
    mr?: SpacingToken;

    // Layout
    width?: string | number;
    height?: string | number;
    minWidth?: string | number;
    minHeight?: string | number;
    maxWidth?: string | number;
    maxHeight?: string | number;
    display?: 'flex' | 'none' | 'block' | 'inline-block' | 'grid';

    // Flexbox
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    flex?: number | string;
    flexGrow?: number;
    flexShrink?: number;
    gap?: number | string;
    rowGap?: number | string;
    columnGap?: number | string;

    // Positioning
    position?: 'absolute' | 'relative' | 'fixed' | 'sticky';
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    zIndex?: number;

    // Visual
    backgroundColor?: keyof ColorTokens;
    elevation?: ElevationToken;
    opacity?: number;
    overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';

    // Borders
    borderWidth?: number;
    borderColor?: keyof ColorTokens;
    borderRadius?: number | 'sm' | 'md' | 'lg' | 'full';

    children?: React.ReactNode;
    style?: any; // Escape hatch
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
