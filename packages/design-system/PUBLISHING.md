# Publishing to npm

This guide explains how to publish the `@mselmank/design-system-package` to npm.

## Prerequisites

1. **npm account**: You need an npm account. Create one at https://www.npmjs.com/signup
2. **npm login**: Run `npm login` in your terminal
3. **Package name availability**: The package name `@mselmank/design-system-package` must be available or you must have permission to publish to it

## Pre-publish Checklist

Before publishing, ensure:

- [ ] All changes are committed to git
- [ ] Version number in `package.json` is updated (see Versioning below)
- [ ] Tests pass (if you have any)
- [ ] Build generates all required files

## Versioning

Follow [Semantic Versioning](https://semver.org/):

- **Patch** (1.0.X): Bug fixes, minor changes - `npm version patch`
- **Minor** (1.X.0): New features, backward compatible - `npm version minor`
- **Major** (X.0.0): Breaking changes - `npm version major`

Example:
```bash
npm version patch  # 1.0.2 -> 1.0.3
```

## Publishing Steps

### 1. Clean and Build

```bash
cd packages/design-system
pnpm run clean
pnpm run build
```

Verify the build output:
```bash
ls -la dist/
```

You should see:
- `index.js` (CommonJS for web)
- `index.mjs` (ESM for web)
- `index.native.js` (React Native)
- `index.d.ts` and `index.d.mts` (TypeScript declarations)
- Source maps (`.map` files)

### 2. Test the Package Build

Build both example apps to ensure compatibility:

```bash
# Test web app
cd ../../apps/web
pnpm run build

# Test mobile app (just start it to verify)
cd ../mobile
pnpm run start
```

### 3. Publish to npm

```bash
cd ../../packages/design-system
npm publish --access public
```

> **Note**: The `--access public` flag is required for scoped packages (@mselmank/...) unless you have a paid npm account.

### 4. Verify Publication

Check that your package is live:
- Visit: https://www.npmjs.com/package/@mselmank/design-system-package
- Install in a test project: `npm install @mselmank/design-system-package`

## First-time Setup

If this is your first time publishing:

1. **Set package access**:
   ```bash
   npm access public @mselmank/design-system-package
   ```

2. **Update repository URL** in `package.json` if needed:
   ```json
   "repository": {
     "type": "git",
     "url": "https://github.com/YOUR-USERNAME/fintual-ds-monorepo"
   }
   ```

## Installation Instructions (for users)

### Web Projects (React)

```bash
npm install @mselmank/design-system-package
# or
pnpm add @mselmank/design-system-package
```

Usage:
```tsx
import { ThemeProvider, Box, Text, Button } from '@mselmank/design-system-package';

function App() {
  return (
    <ThemeProvider>
      <Box padding="lg">
        <Text variant="h1" color="textDefault">Hello World</Text>
        <Button label="Click me" variant="primary" />
      </Box>
    </ThemeProvider>
  );
}
```

### Mobile Projects (React Native)

```bash
npm install @mselmank/design-system-package
# or
pnpm add @mselmank/design-system-package
```

Usage:
```tsx
import { ThemeProvider, Box, Text, Button } from '@mselmank/design-system-package';
import { View } from 'react-native';

export default function App() {
  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <Box padding="lg">
          <Text variant="h1" color="textDefault">Hello World</Text>
          <Button label="Click me" variant="primary" />
        </Box>
      </View>
    </ThemeProvider>
  );
}
```

## Troubleshooting

### Build fails
- Ensure `tsup` is installed: `pnpm install`
- Delete `dist/` and rebuild: `pnpm run clean && pnpm run build`

### Apps don't work after update
- Clear workspace cache: `pnpm install --force`
- Restart dev servers

### Package not found after publishing
- Wait a few minutes for npm registry to update
- Verify package name is correct
- Check access permissions: `npm access ls-packages @mselmank`

## Automation (Optional)

Add to root `package.json` for easy publishing from monorepo root:

```json
{
  "scripts": {
    "publish:ds": "cd packages/design-system && pnpm run clean && pnpm run build && npm publish --access public"
  }
}
```

Then publish with: `pnpm run publish:ds`
