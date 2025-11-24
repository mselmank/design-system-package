// packages/design-system/src/components/Button/mapStyles.ts
import { ButtonProps, DesignSystemTheme, ColorTokens } from '../../types';

export const mapButtonPropsToStyles = (props: ButtonProps, theme: DesignSystemTheme) => {
    const shade = props.shade || 'main';
    const variant = props.variant || 'primary';

    let backgroundColor = theme.colors.primaryMain;
    let textColor = theme.colors.textContrast;

    // Explicit mapping to ensure type safety
    const getBackgroundColor = (): string => {
        switch (variant) {
            case 'primary':
                return shade === 'light' ? theme.colors.primaryLight : shade === 'dark' ? theme.colors.primaryDark : theme.colors.primaryMain;
            case 'secondary':
                return shade === 'light' ? theme.colors.secondaryLight : shade === 'dark' ? theme.colors.secondaryDark : theme.colors.secondaryMain;
            case 'error':
                return shade === 'light' ? theme.colors.errorLight : shade === 'dark' ? theme.colors.errorDark : theme.colors.errorMain;
            case 'warning':
                return shade === 'light' ? theme.colors.warningLight : shade === 'dark' ? theme.colors.warningDark : theme.colors.warningMain;
            case 'info':
                return shade === 'light' ? theme.colors.infoLight : shade === 'dark' ? theme.colors.infoDark : theme.colors.infoMain;
            case 'success':
                return shade === 'light' ? theme.colors.successLight : shade === 'dark' ? theme.colors.successDark : theme.colors.successMain;
            default:
                return theme.colors.primaryMain;
        }
    };

    backgroundColor = getBackgroundColor();
    textColor = theme.colors.textContrast;

    if (props.disabled) {
        backgroundColor = theme.colors.textDisabled;
        textColor = theme.colors.textContrast;
    }

    return {
        backgroundColor,
        color: textColor,
        padding: '12px 24px',
        borderRadius: '8px',
        opacity: props.disabled ? 0.6 : 1,
        boxShadow: props.disabled ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        fontWeight: '600',
    };
};
