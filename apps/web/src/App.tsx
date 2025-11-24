import { ThemeProvider, Box, Text, useTheme, Button } from '@mselmank/design-system-package';

const Content = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <Box padding="lg" backgroundColor="background" elevation="z1">
      <Text variant="h1" color="primary">Fintual Design System</Text>

      <Box margin="md" padding="sm" backgroundColor="surface" elevation="z2">
        <Text variant="bodyL" color="textDefault">
          This is a cross-platform component running on Web!
        </Text>
        <Text variant="bodyL" color="textSecondary">
          Subtitle text (textSecondary)
        </Text>
        <Text variant="bodyL" color="textSuccess">
          Operation successful (textSuccess)
        </Text>
        <Text variant="bodyL" color="textError">
          An error occurred (textError)
        </Text>
        <Text variant="bodyL" color="textDisabled">
          Disabled text (textDisabled)
        </Text>
      </Box>

      <Box margin="md" padding="sm" backgroundColor="surface" elevation="z1">
        <Text variant="bodyL" color="textDefault">Buttons:</Text>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
          <Button label="Primary" variant="primary" onPress={() => alert('Primary')} />
          <Button label="Secondary" variant="secondary" onPress={() => alert('Secondary')} />
          <Button label="Success" variant="success" onPress={() => alert('Success')} />
          <Button label="Error" variant="error" onPress={() => alert('Error')} />
          <Button label="Disabled" variant="primary" disabled onPress={() => { }} />
        </div>
      </Box>

      <Box margin="md" padding="sm" backgroundColor="surface" elevation="z1">
        <Text variant="bodyL" color="textDefault">Current Theme: {theme.variant}</Text>
      </Box>

      <button onClick={toggleTheme} style={{ marginTop: 20, padding: 10 }}>
        Toggle Theme
      </button>
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
