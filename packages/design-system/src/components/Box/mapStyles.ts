// packages/design-system/src/components/Box/mapStyles.ts
import { BoxProps, DesignSystemTheme } from '../../types';

export const mapBoxPropsToStyles = (props: BoxProps, theme: DesignSystemTheme) => {
    const padding = props.padding ? theme.spacing[props.padding] : undefined;
    const margin = props.margin ? theme.spacing[props.margin] : undefined;
    const backgroundColor = props.backgroundColor ? theme.colors[props.backgroundColor] : undefined;

    // Elevation is handled differently in Web vs Native, so we return the token
    // and let the platform component handle the specific implementation.
    const elevationToken = props.elevation;

    return {
        padding,
        margin,
        backgroundColor,
        elevationToken,
        display: props.display,
        flexDirection: props.flexDirection,
    };
};
