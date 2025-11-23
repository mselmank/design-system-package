// packages/design-system/src/components/Text/Text.tsx
import React from 'react';
import { TypographyProps } from '../../types';
import { mapTypographyPropsToStyles } from './mapStyles';
import { useTheme } from '../../theme/ThemeContext';

// Helper para seleccionar el tag HTML semántico
const getSemanticTag = (variant: TypographyProps['variant']): keyof JSX.IntrinsicElements => {
    if (variant === 'h1') return 'h1';
    // Add more mappings as needed
    return 'p';
};

export const Text: React.FC<TypographyProps> = ({ children, variant, ...props }) => {
    const { theme } = useTheme();
    const styles = mapTypographyPropsToStyles({ variant, ...props }, theme);
    const Tag = getSemanticTag(variant);

    return <Tag style={styles}>{children}</Tag>;
};
