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
        padding: styles.padding,
        borderRadius: styles.borderRadius,
        opacity: styles.opacity,
        border: 'none',
        cursor: props.disabled ? 'not-allowed' : 'pointer',
        fontSize: '14px',
        fontWeight: 600,
        transition: 'all 0.2s ease',
        boxShadow: styles.boxShadow,
        textTransform: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '100px',
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
