import React from 'react';
import { TypographyProps } from '../../types';
import { mapTypographyPropsToStyles } from './mapStyles';
import { useTheme } from '../../theme/ThemeContext';

const getSemanticTag = (variant: TypographyProps['variant']): keyof JSX.IntrinsicElements => {
    if (variant === 'h1') return 'h1';
    return 'p';
};

export const Text: React.FC<TypographyProps> = ({ children, variant, ...props }) => {
    const { theme } = useTheme();
    const styles = mapTypographyPropsToStyles({ variant, ...props }, theme);
    const Tag = getSemanticTag(variant);

    return <Tag style={{ ...styles, margin: 0, boxSizing: 'border-box', ...props.style }}>{children}</Tag>;
};
