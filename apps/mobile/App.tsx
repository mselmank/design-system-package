import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider, Box, Text, useTheme, Button, type ButtonVariant, type ColorTokens } from '@mselmank/design-system-package';

// Section component for consistent styling
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <View style={{ marginBottom: 24, padding: 16, backgroundColor: 'rgba(128, 128, 128, 0.1)', borderRadius: 12 }}>
    <Text variant="h1" color="textDefault" style={{ marginBottom: 8 }}>{title}</Text>
    {children}
  </View>
);

const Content = () => {
  const { toggleTheme, theme } = useTheme();
  const buttonVariants: ButtonVariant[] = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];
  const textColors: Array<keyof ColorTokens> = ['textDefault', 'textSecondary', 'textSuccess', 'textError', 'textDisabled'];

  // Page container style using theme colors
  const containerStyle = {
    backgroundColor: theme.colors.background,
  };

  return (
    <SafeAreaView style={[styles.safeArea, containerStyle]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text variant="h1" color="textDefault" style={{ fontSize: 24, marginBottom: 4 }}>
              Fintual Design System
            </Text>
            <Text variant="bodyL" color="textSecondary">
              Mobile Component Showcase
            </Text>
          </View>
          <View style={styles.headerButton}>
            <Button
              label={`${theme.variant === 'light' ? 'Dark' : 'Light'} Mode`}
              variant="primary"
              onPress={toggleTheme}
            />
          </View>
        </View>

        {/* Layout Section */}
        <Section title="Layout Components (Box)">
          <Text variant="bodyL" color="textSecondary" style={{ marginBottom: 12 }}>
            Box with padding, background, and elevation
          </Text>

          {/* Actual DS Component Usage */}
          <Box padding="md" backgroundColor="surface" elevation="z1" borderRadius="md" mb="md">
            <Text variant="bodyL" color="textDefault">
              I am a Box with padding, surface background, and z1 elevation.
            </Text>
          </Box>

          <Text variant="bodyL" color="textSecondary" style={{ marginBottom: 12, marginTop: 8 }}>
            Flexbox layout with gap
          </Text>

          {/* Flexbox Example */}
          <Box display="flex" flexDirection="row" gap={12}>
            <Box padding="md" backgroundColor="primaryLight" borderRadius="sm" flex={1}>
              <Text variant="bodyL" color="textDefault">Flex Item 1</Text>
            </Box>
            <Box padding="md" backgroundColor="secondaryLight" borderRadius="sm" flex={1}>
              <Text variant="bodyL" color="textDefault">Flex Item 2</Text>
            </Box>
          </Box>
        </Section>

        {/* Typography Section */}
        <Section title="Typography (Text)">
          <Text variant="bodyL" color="textSecondary" style={{ marginBottom: 12 }}>
            Text color variants
          </Text>
          <View style={{ gap: 8 }}>
            {textColors.map((color) => (
              <View key={color} style={styles.textRow}>
                <Text variant="bodyL" color="textSecondary" style={{ width: 120, fontSize: 11, fontFamily: 'monospace' }}>
                  {color}
                </Text>
                <Text variant="bodyL" color={color}>
                  The quick brown fox jumps
                </Text>
              </View>
            ))}
          </View>
        </Section>

        {/* Buttons Section */}
        <Section title="Buttons">
          <Text variant="bodyL" color="textSecondary" style={{ marginBottom: 12 }}>
            All variants and shades
          </Text>
          <View style={{ gap: 16 }}>
            {buttonVariants.map((variant) => (
              <View key={variant} style={styles.buttonGroup}>
                <Text variant="bodyL" color="textDefault" style={styles.variantLabel}>
                  {variant.toUpperCase()}
                </Text>
                <View style={styles.buttonRow}>
                  <View style={{ flex: 1 }}>
                    <Button label="Light" variant={variant} shade="light" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Button label="Main" variant={variant} shade="main" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Button label="Dark" variant={variant} shade="dark" />
                  </View>
                </View>
              </View>
            ))}
          </View>
        </Section>
      </ScrollView>
      <StatusBar style={theme.variant === 'light' ? 'dark' : 'light'} />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Content />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 16,
    gap: 12,
  },
  headerText: {
    flex: 1,
    flexShrink: 1,
  },
  headerButton: {
    flexShrink: 0,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  buttonGroup: {
    gap: 8,
  },
  variantLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    opacity: 0.7,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 8,
  },
});
