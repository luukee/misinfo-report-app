// Import the 'dotenv' module to load environment variables from a '.env' file
import 'dotenv/config';

// Export a configuration object for Expo
export default {
  "expo": {
    // The name of your Expo app
    "name": "expo-with-firebase-auth-demo",

    // The slug is used for URLs and filenames
    "slug": "expo-with-firebase-auth-demo",

    // The version of your app
    "version": "1.0.0",

    // The orientation of your app (portrait or landscape)
    "orientation": "portrait",

    // The path to the app icon image
    "icon": "./assets/icon.png",

    // The preferred user interface style (light or dark)
    "userInterfaceStyle": "dark",

    // Configuration for the app's splash screen
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },

    // Patterns to include when bundling assets
    "assetBundlePatterns": [
      "**/*"
    ],

    // iOS-specific configuration
    "ios": {
      "supportsTablet": true
    },

    // Android-specific configuration
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },

    // Web-specific configuration
    "web": {
      "favicon": "./assets/favicon.png"
    },

    // Extra environment-specific variables, for Firebase configuration
    "extra": {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID
    }
  }
}
