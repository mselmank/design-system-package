import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemeProvider, Box, Text, useTheme, Button, ButtonVariant, ColorTokens } from '@mselmank/design-system-package';

const Content = () => {
  const { toggleTheme, theme } = useTheme();
  const buttonVariants: ButtonVariant[] = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];
  const textColors: Array<keyof ColorTokens> = ['textDefault', 'textSecondary', 'textSuccess', 'textError', 'textDisabled'];

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Box padding="md" backgroundColor="background" elevation="z1">
        <Text variant="h1" color="textDefault">Fintual Design System</Text>
        <Text variant="bodyL" color="textSecondary">Mobile Demo - {theme.variant} mode</Text>

        {/* LAYOUT SECTION */}
        <Box margin="md" padding="sm" backgroundColor="surface" elevation="z2">
          <Text variant="h1" color="textDefault">Layout</Text>
          <Text variant="bodyL" color="textSecondary">Box Component Examples</Text>

          <Box margin="sm" padding="md" backgroundColor="background" elevation="z1">
            <Text variant="bodyL" color="textDefault">Box with background + z1 elevation</Text>
          </Box>

          <Box margin="sm" padding="md" backgroundColor="surface" elevation="z2">
            <Text variant="bodyL" color="textDefault">Box with surface + z2 elevation</Text>
          </Box>

          <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
            <View style={{ flex: 1 }}>
              <Box padding="sm" backgroundColor="background" elevation="z1" display="flex" flexDirection="column">
                <Text variant="bodyL" color="textDefault">Flex Box 1</Text>
              </Box>
            </View>
            <View style={{ flex: 1 }}>
              <Box padding="sm" backgroundColor="surface" elevation="z2" display="flex" flexDirection="column">
                <Text variant="bodyL" color="textDefault">Flex Box 2</Text>
              </Box>
            </View>
          </View>
        </Box>

        {/* TYPOGRAPHY SECTION */}
        <Box margin="md" padding="sm" backgroundColor="surface" elevation="z2">
          <Text variant="h1" color="textDefault">Typography</Text>
          <Text variant="bodyL" color="textSecondary">Text Color Variants</Text>

          {textColors.map((color) => (
            <Box key={color} margin="xs">
              <Text variant="bodyL" color={color}>{color}: The quick brown fox jumps</Text>
            </Box>
          ))}
        </Box>

        {/* BUTTONS SECTION */}
        <Box margin="md" padding="sm" backgroundColor="surface" elevation="z2">
          <Text variant="h1" color="textDefault">Buttons</Text>
          <Text variant="bodyL" color="textSecondary">All Variants & Shades</Text>

          {buttonVariants.map((variant) => (
            <Box key={variant} margin="xs" display="flex" flexDirection="column">
              <Text variant="bodyL" color="textDefault" style={{ marginBottom: 5, fontWeight: 'bold', textTransform: 'capitalize' }}>{variant}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10, marginBottom: 15 }}>
                <View style={{ flex: 1 }}><Button label="Light" variant={variant} shade="light" /></View>
                <View style={{ flex: 1 }}><Button label="Main" variant={variant} shade="main" /></View>
                <View style={{ flex: 1 }}><Button label="Dark" variant={variant} shade="dark" /></View>
              </View>
            </Box>
          ))}
        </Box>

        <Button label={`Toggle Theme (${theme.variant})`} variant="primary" onPress={toggleTheme} />
      </Box>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Content />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
