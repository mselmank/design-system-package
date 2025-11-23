// packages/design-system/src/components/Text/mapStyles.ts
import { TypographyProps, DesignSystemTheme } from '../../types';

export const mapTypographyPropsToStyles = (props: Omit<TypographyProps, 'children'>, theme: DesignSystemTheme) => {
    const variantStyles = theme.typography[props.variant];
    const color = props.color ? theme.colors[props.color] : theme.colors.textDefault;

    return {
        ...variantStyles,
        color: color,
    };
};
