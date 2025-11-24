import { defineConfig } from 'tsup';

export default defineConfig([
    // Web build (CommonJS + ESM)
    {
        entry: ['src/index.ts'],
        format: ['cjs', 'esm'],
        dts: true,
        sourcemap: true,
        clean: true,
        external: ['react', 'react-dom', 'react-native'],
        esbuildOptions(options) {
            // Resolve .tsx before .native.tsx for web
            options.resolveExtensions = ['.tsx', '.ts', '.jsx', '.js'];
        },
    },
    // React Native build
    {
        entry: ['src/index.ts'],
        format: ['cjs'],
        outDir: 'dist',
        outExtension() {
            return {
                js: '.native.js',
            };
        },
        sourcemap: true,
        external: ['react', 'react-native'],
        esbuildOptions(options) {
            // For React Native, prefer .native.tsx files
            options.resolveExtensions = ['.native.tsx', '.native.ts', '.tsx', '.ts', '.jsx', '.js'];
        },
        // Don't generate types for native build (already generated in web build)
        dts: false,
        clean: false,
    },
]);
