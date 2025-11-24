// packages/design-system/src/components/Button/Button.native.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ButtonProps } from '../../types';
import { useTheme } from '../../theme/ThemeContext';
import { mapButtonPropsToStyles } from './mapStyles';

export const Button: React.FC<ButtonProps> = (props) => {
    const { theme } = useTheme();
    const styles = mapButtonPropsToStyles(props, theme);

    const containerStyle = {
        backgroundColor: styles.backgroundColor,
        padding: styles.padding,
        borderRadius: styles.borderRadius,
        opacity: styles.opacity,
        borderWidth: props.variant === 'secondary' ? 1 : 0,
        borderColor: props.variant === 'secondary' ? styles.color : 'transparent',
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
    };

    const textStyle = {
        color: styles.color,
        fontSize: 16,
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
