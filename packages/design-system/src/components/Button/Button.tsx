// packages/design-system/src/components/Button/Button.tsx
import React from 'react';
import { ButtonProps } from '../../types';
import { useTheme } from '../../theme/ThemeContext';
import { mapButtonPropsToStyles } from './mapStyles';

export const Button: React.FC<ButtonProps> = (props) => {
    const { theme } = useTheme();
    const styles = mapButtonPropsToStyles(props, theme);

    const webStyles: React.CSSProperties = {
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        padding: `${styles.padding}px`,
        borderRadius: `${styles.borderRadius}px`,
        opacity: styles.opacity,
        border: props.variant === 'secondary' ? `1px solid ${styles.color}` : 'none',
        cursor: props.disabled ? 'not-allowed' : 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        transition: 'all 0.2s ease',
    };

    return (
        <button
            onClick={props.onPress}
            disabled={props.disabled}
            style={webStyles}
        >
            {props.label}
        </button>
    );
};
