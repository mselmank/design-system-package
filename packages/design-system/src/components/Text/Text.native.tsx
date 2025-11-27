import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { TypographyProps } from '../../types';
import { mapTypographyPropsToStyles } from './mapStyles';
import { useTheme } from '../../theme/ThemeContext';

export const Text: React.FC<TypographyProps> = ({ children, variant, ...props }) => {
    const { theme } = useTheme();
    const styles = mapTypographyPropsToStyles({ variant, ...props }, theme);

    return (
        <RNText style={[styles, props.style]}>
            {children}
        </RNText>
    );
};
