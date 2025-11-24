import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider, Box, Text, useTheme, Button } from '@mselmank/design-system-package';

const Content = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Box padding="lg" backgroundColor="background" elevation="z1" display="flex" flexDirection="column">
      <Text variant="h1" color="primary">Fintual DS Mobile</Text>

      <Box margin="md" padding="md" backgroundColor="surface" elevation="z2">
        <Text variant="bodyL" color="textDefault">
          This is running on React Native (Expo)!
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

      <Box margin="md" padding="md" backgroundColor="surface" elevation="z2">
        <Text variant="bodyL" color="textDefault">Buttons:</Text>
        <Box margin="xs" />
        <Button label="Primary" variant="primary" onPress={() => console.log('Primary')} />
        <Box margin="xs" />
        <Button label="Secondary" variant="secondary" onPress={() => console.log('Secondary')} />
        <Box margin="xs" />
        <Button label="Success" variant="success" onPress={() => console.log('Success')} />
        <Box margin="xs" />
        <Button label="Error" variant="error" onPress={() => console.log('Error')} />
        <Box margin="xs" />
        <Button label="Disabled" variant="primary" disabled onPress={() => { }} />
      </Box>

      <Box margin="md" padding="md" backgroundColor="surface" elevation="z2">
        <Text variant="bodyL" color="textDefault">
          Theme: {theme.variant}
        </Text>
      </Box>

      <Button label="Toggle Theme" onPress={toggleTheme} />
      <StatusBar style="auto" />
    </Box>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
