import { ThemeProvider, Box, Text, useTheme } from 'fintual-design-system';

const Content = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <Box padding="lg" backgroundColor="background" elevation="z1">
      <Text variant="h1" color="primary">Fintual Design System</Text>
      <Text variant="bodyL" color="textDefault">
        This is a cross-platform component running on Web!
      </Text>
      <Box margin="md" padding="sm" backgroundColor="surface" elevation="z2">
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
