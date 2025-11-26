// packages/design-system/src/components/Box/Box.tsx
import React from 'react';
import { mapBoxPropsToStyles } from './mapStyles';
import { BoxProps } from '../../types';
import { useTheme } from '../../theme/ThemeContext';

export const Box: React.FC<BoxProps> = ({ children, ...props }) => {
    const { theme } = useTheme();
    const styles = mapBoxPropsToStyles(props, theme);

    // Mapeo simple de elevación a box-shadow (para Web)
    const elevationStyle = styles.elevationToken && styles.elevationToken !== 'none'
        ? { boxShadow: theme.elevationMapping[styles.elevationToken] }
        : {};

    const { elevationToken, ...otherStyles } = styles;

    const finalStyle: React.CSSProperties = {
        ...otherStyles,
        ...elevationStyle,
        // Ensure display is valid for web if not specified (default to block or flex depending on usage, but div is block)
        // If display is not passed, it will be undefined, so div defaults to block.
    } as React.CSSProperties;

    return (
        <div style={finalStyle}>
            {children}
        </div>
    );
};
