// Learn more https://docs.expo.io/guides/customizing-metro

// Import the `getDefaultConfig` function from 'expo/metro-config'
const { getDefaultConfig } = require('expo/metro-config');

// Export the result of calling `getDefaultConfig` with the current directory (__dirname) as an argument
module.exports = getDefaultConfig(__dirname);
