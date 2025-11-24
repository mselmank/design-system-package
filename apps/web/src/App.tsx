import React from 'react';
import { ThemeProvider, Box, Text, useTheme, Button, type ButtonVariant, type ColorTokens } from '@mselmank/design-system-package';

const Content = () => {
  const { toggleTheme, theme } = useTheme();
  const buttonVariants: ButtonVariant[] = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];
  const textColors: Array<keyof ColorTokens> = ['textDefault', 'textSecondary', 'textSuccess', 'textError', 'textDisabled'];

  return (
    <Box padding="lg" backgroundColor="background" elevation="z1">
      <Text variant="h1" color="textDefault">Fintual Design System</Text>
      <Text variant="bodyL" color="textSecondary">Web Demo - {theme.variant} mode</Text>

      {/* LAYOUT SECTION */}
      <Box margin="none" padding="xs" backgroundColor="surface" elevation="z2">
        <Text variant="h1" color="textDefault">Layout</Text>
        <Text variant="bodyL" color="textSecondary">Box Component Examples</Text>

        <Box margin="none" padding="xs" backgroundColor="background" elevation="z1">
          <Text variant="bodyL" color="textDefault">Box with background + z1 elevation</Text>
        </Box>

        <Box margin="none" padding="xs" backgroundColor="surface" elevation="z2">
          <Text variant="bodyL" color="textDefault">Box with surface + z2 elevation</Text>
        </Box>

        <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
          <Box padding="xs" backgroundColor="background" elevation="z1" display="flex" flexDirection="column">
            <Text variant="bodyL" color="textDefault">Flex Box 1</Text>
          </Box>
          <Box padding="xs" backgroundColor="surface" elevation="z2" display="flex" flexDirection="column">
            <Text variant="bodyL" color="textDefault">Flex Box 2</Text>
          </Box>
        </div>
      </Box>

      {/* TYPOGRAPHY SECTION */}
      <Box margin="none" padding="xs" backgroundColor="surface" elevation="z2">
        <Text variant="h1" color="textDefault">Typography</Text>
        <Text variant="bodyL" color="textSecondary">Text Color Variants</Text>

        {textColors.map((color) => (
          <Box key={color}>
            <Text variant="bodyL" color={color}>{color}: The quick brown fox jumps</Text>
          </Box>
        ))}
      </Box>

      {/* BUTTONS SECTION */}
      <Box margin="none" padding="xs" backgroundColor="surface" elevation="z1">
        <Text variant="h1" color="textDefault">Buttons</Text>
        <Text variant="bodyL" color="textSecondary">All Variants & Shades</Text>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', alignItems: 'center' }}>
          <Text variant="bodyL" color="textDefault"><strong>Light</strong></Text>
          <Text variant="bodyL" color="textDefault"><strong>Main</strong></Text>
          <Text variant="bodyL" color="textDefault"><strong>Dark</strong></Text>

          {buttonVariants.map((variant) => (
            <React.Fragment key={variant}>
              <Button label={`${variant} Light`} variant={variant} shade="light" />
              <Button label={`${variant} Main`} variant={variant} shade="main" />
              <Button label={`${variant} Dark`} variant={variant} shade="dark" />
            </React.Fragment>
          ))}
        </div>
      </Box>

      <Button label={`Toggle Theme (${theme.variant})`} variant="primary" onPress={toggleTheme} />
    </Box>
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
