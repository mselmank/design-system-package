import React from 'react';
import { mapBoxPropsToStyles } from './mapStyles';
import { BoxProps } from '../../types';
import { useTheme } from '../../theme/ThemeContext';

export const Box: React.FC<BoxProps> = ({ children, ...props }) => {
    const { theme } = useTheme();
    const styles = mapBoxPropsToStyles(props, theme);

    const elevationStyle = styles.elevationToken && styles.elevationToken !== 'none'
        ? { boxShadow: theme.elevationMapping[styles.elevationToken] }
        : {};

    const { elevationToken, ...otherStyles } = styles;

    const finalStyle: React.CSSProperties = {
        ...otherStyles,
        ...elevationStyle,
    } as React.CSSProperties;

    return (
        <div style={finalStyle}>
            {children}
        </div>
    );
};
