import React from 'react';
import { Text, Button, useTheme } from '@mselmank/design-system-package';

const RetroText = ({ children, style, variant = 'bodyL', color = 'textDefault' }: any) => {
    return (
        <Text
            variant={variant}
            color={color}
            style={{
                fontFamily: '"VT323", monospace',
                fontSize: '24px',
                ...style
            }}
        >
            {children}
        </Text>
    );
};

const RetroHeading = ({ children, style, color = 'textDefault' }: any) => {
    const { theme } = useTheme();
    return (
        <h1 style={{
            fontFamily: '"Press Start 2P", cursive',
            color: theme.colors[color as keyof typeof theme.colors],
            margin: 0,
            lineHeight: '1.5',
            textTransform: 'uppercase',
            ...style
        }}>
            {children}
        </h1>
    );
};

export const LandingPage = () => {
    const { theme, toggleTheme } = useTheme();

    const pageStyle: React.CSSProperties = {
        minHeight: '100vh',
        width: '100%',
        backgroundColor: theme.colors.background,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '"VT323", monospace',
    };

    const navLinkStyle = {
        color: theme.colors.textSecondary,
        textDecoration: 'none',
        fontSize: '12px',
    };

    return (
        <div style={pageStyle}>
            {/* Header */}
            <header style={{
                padding: '40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: `4px solid ${theme.colors.textSecondary}`,
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: theme.colors.primaryMain,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `4px solid ${theme.colors.textDefault}`,
                        boxShadow: `4px 4px 0px 0px ${theme.colors.textDefault}`
                    }}>
                        <span style={{ fontFamily: '"Press Start 2P"', color: theme.colors.textContrast, fontSize: '20px' }}>P</span>
                    </div>
                    <RetroHeading style={{ fontSize: '16px' }}>PixelComponents</RetroHeading>
                </div>

                <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>

                    <Button
                        label={theme.variant === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
                        variant="secondary"
                        onPress={toggleTheme}
                    />
                </nav>
            </header>

            {/* Hero Section */}
            <main style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 20px',
                textAlign: 'center',
            }}>
                <div style={{
                    backgroundColor: theme.colors.successLight,
                    padding: '8px 16px',
                    marginBottom: '32px',
                    border: `2px solid ${theme.colors.successDark}`,
                    boxShadow: `4px 4px 0px 0px ${theme.colors.textDefault}`,
                    transform: 'rotate(-2deg)'
                }}>
                    <span style={{ fontFamily: '"Press Start 2P"', fontSize: '12px', color: theme.colors.textDefault }}>
                        [NEXT-GEN COMPONENT LIBRARY]
                    </span>
                </div>

                <RetroHeading style={{ fontSize: '48px', marginBottom: '16px', textShadow: `4px 4px 0px ${theme.colors.textSecondary}` }}>
                    BUILD FASTER.
                </RetroHeading>
                <RetroHeading style={{ fontSize: '48px', marginBottom: '40px', textShadow: `4px 4px 0px ${theme.colors.textSecondary}` }}>
                    CODE SMARTER.
                </RetroHeading>

                <RetroText style={{ maxWidth: '600px', marginBottom: '60px', fontSize: '24px', lineHeight: '1.4' }}>
                    The ultimate retro-styled component library for modern React applications.
                    Zero runtime overhead. 100% Type-safe.
                </RetroText>

                <div style={{ display: 'flex', gap: '24px' }}>
                    <Button label="START BUILDING" variant="success" onPress={() => { }} />
                    <Button label="VIEW COMPONENTS" variant="error" onPress={() => { }} />
                </div>

                {/* Stats */}
                <div style={{
                    marginTop: '100px',
                    display: 'flex',
                    gap: '80px',
                    borderTop: `4px solid ${theme.colors.textSecondary}`,
                    paddingTop: '40px'
                }}>
                    {[
                        { label: 'Components', value: '50+' },
                        { label: 'TypeScript', value: '100%' },
                        { label: 'Runtime', value: '0KB' }
                    ].map((stat) => (
                        <div key={stat.label} style={{ textAlign: 'center' }}>
                            <RetroHeading style={{ fontSize: '32px', marginBottom: '8px' }}>{stat.value}</RetroHeading>
                            <RetroText style={{ fontSize: '18px', color: 'textSecondary' }}>{stat.label}</RetroText>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer style={{
                padding: '40px',
                textAlign: 'center',
                borderTop: `4px solid ${theme.colors.textSecondary}`,
            }}>
                <div style={{ animation: 'blink 1s step-end infinite' }}>
                    <RetroHeading style={{ fontSize: '14px' }}>PRESS START TO CONTINUE... 👆</RetroHeading>
                </div>
                <style>{`
                    @keyframes blink {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0; }
                    }
                `}</style>
            </footer>
        </div>
    );
};
