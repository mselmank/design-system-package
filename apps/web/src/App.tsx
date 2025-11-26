import React from 'react';
import { ThemeProvider, Box, Text, useTheme, Button, type ButtonVariant, type ColorTokens } from '@mselmank/design-system-package';

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
    <h2 style={{ fontFamily: 'system-ui', fontSize: '20px', marginBottom: '16px', color: '#333' }}>{title}</h2>
    {children}
  </section>
);

const Content = () => {
  const { toggleTheme, theme } = useTheme();
  const buttonVariants: ButtonVariant[] = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];
  const textColors: Array<keyof ColorTokens> = ['textDefault', 'textSecondary', 'textSuccess', 'textError', 'textDisabled'];

  // Page Layout Styles (Not using DS Box to avoid circular dependency on "broken" layout)
  const pageStyle: React.CSSProperties = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: theme.colors.background, // We can still use theme tokens for values
    minHeight: '100vh',
    transition: 'background-color 0.3s ease',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
    paddingBottom: '20px',
    borderBottom: `1px solid ${theme.colors.textSecondary}`,
  };

  return (
    <main style={pageStyle}>
      <header style={headerStyle}>
        <div>
          <h1 style={{ margin: 0, fontSize: '28px', color: theme.colors.textDefault }}>Fintual Design System</h1>
          <p style={{ margin: '8px 0 0', color: theme.colors.textSecondary }}>Component Showcase</p>
        </div>
        <Button label={`Switch to ${theme.variant === 'light' ? 'Dark' : 'Light'} Mode`} variant="primary" onPress={toggleTheme} />
      </header>

      <Section title="Layout Components (Box)">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <code style={{ background: '#f4f4f4', padding: '4px 8px', borderRadius: '4px', color: '#333' }}>&lt;Box padding="md" elevation="z1" /&gt;</code>
          </div>

          {/* Actual DS Component Usage */}
          <Box padding="md" backgroundColor="surface" elevation="z1" borderRadius="md">
            <Text variant="bodyL" color="textDefault">I am a Box with padding, surface background, and z1 elevation.</Text>
          </Box>

          <div style={{ marginBottom: '10px', marginTop: '20px' }}>
            <code style={{ background: '#f4f4f4', padding: '4px 8px', borderRadius: '4px', color: '#333' }}>&lt;Box display="flex" gap="16px" /&gt;</code>
          </div>

          {/* Flexbox Example */}
          <Box display="flex" gap="16px" flexWrap="wrap">
            <Box padding="md" backgroundColor="primaryLight" borderRadius="sm" flex={1} minWidth="200px">
              <Text variant="bodyL" color="textDefault">Flex Item 1</Text>
            </Box>
            <Box padding="md" backgroundColor="secondaryLight" borderRadius="sm" flex={1} minWidth="200px">
              <Text variant="bodyL" color="textDefault">Flex Item 2</Text>
            </Box>
          </Box>
        </div>
      </Section>

      <Section title="Typography (Text)">
        <div style={{ display: 'grid', gap: '16px' }}>
          {textColors.map((color) => (
            <div key={color} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ width: '120px', fontSize: '12px', color: '#666', fontFamily: 'monospace' }}>{color}</span>
              <Text variant="bodyL" color={color}>The quick brown fox jumps over the lazy dog.</Text>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Buttons">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {buttonVariants.map((variant) => (
            <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', fontWeight: 'bold', color: '#888' }}>{variant}</span>
              <Button label="Light" variant={variant} shade="light" />
              <Button label="Main" variant={variant} shade="main" />
              <Button label="Dark" variant={variant} shade="dark" />
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
