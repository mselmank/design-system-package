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

    const finalStyle: React.CSSProperties = {
        padding: styles.padding,
        margin: styles.margin,
        backgroundColor: styles.backgroundColor,
        display: styles.display,
        flexDirection: styles.flexDirection,
        ...elevationStyle,
    };

    return (
        <div style={finalStyle}>
            {children}
        </div>
    );
};
