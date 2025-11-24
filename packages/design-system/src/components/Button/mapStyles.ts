// packages/design-system/src/components/Button/mapStyles.ts
import { ButtonProps, DesignSystemTheme } from '../../types';

export const mapButtonPropsToStyles = (props: ButtonProps, theme: DesignSystemTheme) => {
    let backgroundColor = theme.colors.primary;
    let textColor = theme.colors.textContrast;

    switch (props.variant) {
        case 'secondary':
            backgroundColor = 'transparent';
            textColor = theme.colors.primary;
            break;
        case 'success':
            backgroundColor = theme.colors.success;
            textColor = theme.colors.textContrast;
            break;
        case 'error':
            backgroundColor = theme.colors.error;
            textColor = theme.colors.textContrast;
            break;
        case 'primary':
        default:
            backgroundColor = theme.colors.primary;
            textColor = theme.colors.textContrast;
            break;
    }

    if (props.disabled) {
        backgroundColor = theme.colors.textDisabled; // Or a specific disabled background
        textColor = theme.colors.textContrast;
    }

    return {
        backgroundColor,
        color: textColor,
        padding: theme.spacing.md,
        borderRadius: 8, // Hardcoded for now, could be a token
        opacity: props.disabled ? 0.6 : 1,
    };
};
