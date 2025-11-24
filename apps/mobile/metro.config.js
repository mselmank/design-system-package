const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

// Find the project and workspace directories
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];

// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
];

// Force Metro to resolve 'react' and 'react-native' from the mobile app's node_modules
config.resolver.resolveRequest = (context, moduleName, platform) => {
    if (moduleName === 'react' || moduleName === 'react-native') {
        return {
            filePath: require.resolve(moduleName, { paths: [projectRoot] }),
            type: 'sourceFile',
        };
    }
    // Resolve the new package name to the workspace location
    if (moduleName === '@mselmank/design-system-package') {
        return {
            filePath: require.resolve(path.resolve(workspaceRoot, 'packages/design-system/src/index.ts')),
            type: 'sourceFile',
        };
    }
    return context.resolveRequest(context, moduleName, platform);
};

// Update extraNodeModules just in case, though resolveRequest handles it
config.resolver.extraNodeModules = {
    ...config.resolver.extraNodeModules,
    '@mselmank/design-system-package': path.resolve(workspaceRoot, 'packages/design-system'),
};

module.exports = config;
