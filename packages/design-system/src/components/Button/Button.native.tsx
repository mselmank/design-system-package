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
        borderRadius: 8,
        opacity: styles.opacity,
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
        minWidth: 100,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // Elevation for Android
        elevation: props.disabled ? 0 : 3,
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
