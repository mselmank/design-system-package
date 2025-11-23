// packages/design-system/src/components/Box/Box.native.tsx
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { mapBoxPropsToStyles } from './mapStyles';
import { BoxProps } from '../../types';
import { useTheme } from '../../theme/ThemeContext';

// Función Helper RN
const getNativeElevationStyles = (token: string): ViewStyle => {
    if (token === 'z1') return { elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 1.41 };
    if (token === 'z2') return { elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.23, shadowRadius: 2.62 };
    if (token === 'z3') return { elevation: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65 };
    return {};
};

export const Box: React.FC<BoxProps> = ({ children, ...props }) => {
    const { theme } = useTheme();
    const calculatedStyles = mapBoxPropsToStyles(props, theme);

    const elevationStyle = calculatedStyles.elevationToken
        ? getNativeElevationStyles(calculatedStyles.elevationToken)
        : {};

    // Extract only valid ViewStyle props
    const viewStyles: ViewStyle = {
        padding: calculatedStyles.padding,
        margin: calculatedStyles.margin,
        backgroundColor: calculatedStyles.backgroundColor,
        flexDirection: calculatedStyles.flexDirection,
        display: calculatedStyles.display === 'none' ? 'none' : 'flex', // React Native display supports 'none' | 'flex'
    };

    return (
        <View style={[viewStyles, elevationStyle]}>
            {children}
        </View>
    );
};
