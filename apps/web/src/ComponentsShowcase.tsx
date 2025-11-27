import React from 'react';
import { Box, Text, Button, useTheme, type ButtonVariant, type ColorTokens } from '@mselmank/design-system-package';

interface RetroHeadingProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  color?: keyof ColorTokens;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const RetroHeading = ({
  children,
  style,
  color = "textDefault",
  as: Component = 'h1'
}: RetroHeadingProps) => {
  const { theme } = useTheme();
  return (
    <Component
      style={{
        fontFamily: '"Press Start 2P", cursive',
        color: theme.colors[color],
        margin: 0,
        lineHeight: "1.5",
        textTransform: "uppercase",
        ...style,
      }}
    >
      {children}
    </Component>
  );
};

const CodeBlock = ({ children }: { children: string }) => {
  const { theme } = useTheme();
  return (
    <pre style={{
      backgroundColor: theme.colors.surface,
      border: `2px solid ${theme.colors.textSecondary}`,
      borderRadius: 4,
      padding: '12px',
      margin: '8px 0',
      overflow: 'auto',
      fontFamily: 'monospace',
      fontSize: '13px',
      lineHeight: '1.4',
      color: theme.colors.textDefault,
    }}>
      <code>{children}</code>
    </pre>
  );
};

const ExampleCard = ({ title, children, code }: { title: string; children: React.ReactNode; code: string }) => {
  const { theme } = useTheme();
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{
        marginBottom: '8px',
        fontWeight: 600,
        color: theme.colors.textDefault,
        fontFamily: '"VT323", monospace',
        fontSize: '18px'
      }}>
        {title}
      </div>
      <div style={{
        padding: '12px',
        backgroundColor: theme.variant === 'light' ? '#f5f5f5' : 'rgba(255,255,255,0.05)',
        borderRadius: 4,
        marginBottom: '8px',
        border: `1px solid ${theme.colors.textSecondary}`,
      }}>
        {children}
      </div>
      <CodeBlock>{code}</CodeBlock>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <section style={{
      padding: '16px',
      backgroundColor: 'rgba(128, 128, 128, 0.08)',
      borderRadius: 8,
      border: `2px solid ${theme.colors.textSecondary}`,
    }}>
      <RetroHeading as="h2" style={{ fontSize: '18px', marginBottom: 12 }}>{title}</RetroHeading>
      {children}
    </section>
  );
};

export const ComponentsShowcase: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const buttonVariants: ButtonVariant[] = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: theme.colors.background,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '"VT323", monospace',
  };

  return (
    <div style={pageStyle}>
      <header
        style={{
          padding: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: `4px solid ${theme.colors.textSecondary}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: theme.colors.primaryMain,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `4px solid ${theme.colors.textDefault}`,
              boxShadow: `4px 4px 0px 0px ${theme.colors.textDefault}`,
            }}
          >
            <span
              style={{
                fontFamily: '"Press Start 2P"',
                color: theme.colors.textContrast,
                fontSize: "20px",
              }}
            >
              C
            </span>
          </div>
          <RetroHeading style={{ fontSize: "16px" }}>
            Components Showcase
          </RetroHeading>
        </div>

        <nav>
          <Button
            label={theme.variant === "light" ? "DARK MODE" : "LIGHT MODE"}
            variant="secondary"
            onPress={toggleTheme}
          />
        </nav>
      </header>

      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: '24px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <Section title="Layout Components (Box)">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ExampleCard
              title="Basic Box with padding and background"
              code={`<Box padding="sm" backgroundColor="surface" elevation="z1" borderRadius="sm">
  <Text variant="bodyL" color="textDefault">
    Content inside Box
  </Text>
</Box>`}
            >
              <Box padding="sm" backgroundColor="surface" elevation="z1" borderRadius="sm">
                <Text variant="bodyL" color="textDefault">
                  Content inside Box
                </Text>
              </Box>
            </ExampleCard>

            <ExampleCard
              title="Flex layout with gap"
              code={`<Box display="flex" flexDirection="row" gap={12}>
  <Box padding="md" backgroundColor="primaryLight" borderRadius="sm" flex={1}>
    <Text variant="bodyL" color="textDefault">Item 1</Text>
  </Box>
  <Box padding="md" backgroundColor="secondaryLight" borderRadius="sm" flex={1}>
    <Text variant="bodyL" color="textDefault">Item 2</Text>
  </Box>
</Box>`}
            >
              <Box display="flex" flexDirection="row" gap={12}>
                <Box padding="md" backgroundColor="primaryLight" borderRadius="sm" flex={1}>
                  <Text variant="bodyL" color="textDefault">Item 1</Text>
                </Box>
                <Box padding="md" backgroundColor="secondaryLight" borderRadius="sm" flex={1}>
                  <Text variant="bodyL" color="textDefault">Item 2</Text>
                </Box>
              </Box>
            </ExampleCard>
          </div>
        </Section>

        <Section title="Typography (Text)">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ExampleCard
              title="Text variants and colors"
              code={`<Text variant="bodyL" color="textDefault">Default text</Text>
<Text variant="bodyL" color="textSecondary">Secondary text</Text>
<Text variant="bodyL" color="textSuccess">Success text</Text>
<Text variant="bodyL" color="textError">Error text</Text>`}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Text variant="bodyL" color="textDefault">Default text</Text>
                <Text variant="bodyL" color="textSecondary">Secondary text</Text>
                <Text variant="bodyL" color="textSuccess">Success text</Text>
                <Text variant="bodyL" color="textError">Error text</Text>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Heading variant"
              code={`<Text variant="h1" color="textDefault">
  This is a heading
</Text>`}
            >
              <Text variant="h1" color="textDefault">
                This is a heading
              </Text>
            </ExampleCard>
          </div>
        </Section>

        <Section title="Buttons">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ExampleCard
              title="Button variants"
              code={`<Button label="Primary" variant="primary" />
<Button label="Secondary" variant="secondary" />
<Button label="Error" variant="error" />
<Button label="Success" variant="success" />`}
            >
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Button label="Primary" variant="primary" />
                <Button label="Secondary" variant="secondary" />
                <Button label="Error" variant="error" />
                <Button label="Success" variant="success" />
              </div>
            </ExampleCard>

            <ExampleCard
              title="Button shades"
              code={`<Button label="Light" variant="primary" shade="light" />
<Button label="Main" variant="primary" shade="main" />
<Button label="Dark" variant="primary" shade="dark" />`}
            >
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Button label="Light" variant="primary" shade="light" />
                <Button label="Main" variant="primary" shade="main" />
                <Button label="Dark" variant="primary" shade="dark" />
              </div>
            </ExampleCard>

            <ExampleCard
              title="All variants comparison"
              code={`// Primary
<Button label="Light" variant="primary" shade="light" />
<Button label="Main" variant="primary" shade="main" />
<Button label="Dark" variant="primary" shade="dark" />

// Secondary, Error, Warning, Info, Success...`}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {buttonVariants.map((variant) => (
                  <div key={variant}>
                    <div style={{
                      fontSize: 12,
                      marginBottom: 6,
                      opacity: 0.7,
                      fontWeight: 600,
                      textTransform: 'uppercase'
                    }}>
                      {variant}
                    </div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      <Button label="Light" variant={variant} shade="light" />
                      <Button label="Main" variant={variant} shade="main" />
                      <Button label="Dark" variant={variant} shade="dark" />
                    </div>
                  </div>
                ))}
              </div>
            </ExampleCard>
          </div>
        </Section>
      </main>

      <footer style={{ padding: "24px", textAlign: 'center', borderTop: `4px solid ${theme.colors.textSecondary}` }}>
        <Button label="BACK TO HOME" variant="secondary" onPress={() => { window.location.hash = '#home'; }} />
      </footer>
    </div>
  );
};
