// packages/design-system/src/components/Button/Button.native.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { ButtonProps } from '../../types';
import { useTheme } from '../../theme/ThemeContext';
import { mapButtonPropsToStyles } from './mapStyles';

export const Button: React.FC<ButtonProps> = (props) => {
    const { theme } = useTheme();
    const styles = mapButtonPropsToStyles(props, theme);

    // Parse padding string "12px 24px" to numbers for RN if needed, or just use numbers
    // For simplicity in this PoC, we'll hardcode numbers that match the "look"
    const paddingVertical = 12;
    const paddingHorizontal = 24;

    const containerStyle = {
        backgroundColor: styles.backgroundColor,
        paddingVertical,
        paddingHorizontal,
        borderRadius: 0,
        opacity: styles.opacity,
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
        minWidth: 100,
        // Retro "hard shadow" using borders
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderColor: theme.colors.textDefault,
        // Remove default shadows/elevation
        shadowColor: 'transparent',
        elevation: 0,
    };

    const textStyle = {
        color: styles.color,
        fontSize: 14,
        fontWeight: '600' as const,
    };

    return (
        <TouchableOpacity
            onPress={props.onPress}
            disabled={props.disabled}
            style={containerStyle}
            activeOpacity={0.7}
        >
            <Text style={textStyle}>{props.label}</Text>
        </TouchableOpacity>
    );
};
