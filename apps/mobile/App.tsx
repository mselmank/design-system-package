import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { ThemeProvider, Box, Text, useTheme } from '@mselmank/design-system-package';

const Content = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Box padding="lg" backgroundColor="background" elevation="z1" display="flex" flexDirection="column">
      <Text variant="h1" color="primary">Fintual DS Mobile</Text>
      <Box margin="md" padding="md" backgroundColor="surface" elevation="z2">
        <Text variant="bodyL" color="textDefault">
          This is running on React Native (Expo)!
        </Text>
        <Text variant="bodyL" color="textDefault">
          Theme: {theme.variant}
        </Text>
      </Box>
      <Button title="Toggle Theme" onPress={toggleTheme} />
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
