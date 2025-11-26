// packages/design-system/src/components/Box/mapStyles.ts
import { BoxProps, DesignSystemTheme, SpacingToken } from '../../types';

export const mapBoxPropsToStyles = (props: BoxProps, theme: DesignSystemTheme) => {
    const getSpacing = (token?: SpacingToken) => (token && token !== 'none' ? theme.spacing[token] : 0);

    const padding = props.padding ? getSpacing(props.padding) : undefined;
    const pt = props.pt ? getSpacing(props.pt) : (props.py ? getSpacing(props.py) : padding);
    const pb = props.pb ? getSpacing(props.pb) : (props.py ? getSpacing(props.py) : padding);
    const pl = props.pl ? getSpacing(props.pl) : (props.px ? getSpacing(props.px) : padding);
    const pr = props.pr ? getSpacing(props.pr) : (props.px ? getSpacing(props.px) : padding);

    const margin = props.margin ? getSpacing(props.margin) : undefined;
    const mt = props.mt ? getSpacing(props.mt) : (props.my ? getSpacing(props.my) : margin);
    const mb = props.mb ? getSpacing(props.mb) : (props.my ? getSpacing(props.my) : margin);
    const ml = props.ml ? getSpacing(props.ml) : (props.mx ? getSpacing(props.mx) : margin);
    const mr = props.mr ? getSpacing(props.mr) : (props.mx ? getSpacing(props.mx) : margin);

    const backgroundColor = props.backgroundColor ? theme.colors[props.backgroundColor] : undefined;
    const borderColor = props.borderColor ? theme.colors[props.borderColor] : undefined;

    // Elevation is handled differently in Web vs Native, so we return the token
    const elevationToken = props.elevation;

    return {
        // Spacing
        paddingTop: pt,
        paddingBottom: pb,
        paddingLeft: pl,
        paddingRight: pr,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,

        // Layout
        width: props.width,
        height: props.height,
        minWidth: props.minWidth,
        minHeight: props.minHeight,
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,
        display: props.display,

        // Flexbox
        flexDirection: props.flexDirection,
        flexWrap: props.flexWrap,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        alignContent: props.alignContent,
        alignSelf: props.alignSelf,
        flex: props.flex,
        flexGrow: props.flexGrow,
        flexShrink: props.flexShrink,
        gap: props.gap,
        rowGap: props.rowGap,
        columnGap: props.columnGap,

        // Positioning
        position: props.position,
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
        zIndex: props.zIndex,

        // Visual
        backgroundColor,
        elevationToken,
        opacity: props.opacity,
        overflow: props.overflow,

        // Borders
        borderWidth: props.borderWidth,
        borderColor,
        borderRadius: props.borderRadius === 'full' ? 9999 : (typeof props.borderRadius === 'string' ? undefined : props.borderRadius), // Handle 'full' or numbers. Named sizes need mapping if defined in theme.
    };
};
