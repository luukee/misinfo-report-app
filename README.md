# Misinfo Report App

_working readme. . ._
## Links
- _Project started from_: [Integrating Firebase authentication](https://blog.logrocket.com/integrating-firebase-authentication-expo-mobile-app/) into an Expo mobile app Logrocket Tutorial

- [Search React Native Directory](https://reactnative.directory/?search=firebase&expo=true) for packages

- [Expo Dev Forum](https://forums.expo.dev/)

## Troubleshoot build errors and crashes
- [_Troubleshooting link_](https://docs.expo.dev/build-reference/troubleshooting/)

### Key notes:

1. Run `npx expo-doctor` to determine that the versions of Expo SDK dependencies in your project are compatible with your Expo SDK version.

3. You can build the production bundle locally by running `npx expo export` to bypass all of the other build steps.
	- [expo link](https://docs.expo.dev/build-reference/troubleshooting/#verify-that-your-javascript-bundles-locally)
	
4. Verify that your project builds and runs locally
	- You can verify that your project builds on your local machine with the `npx expo run:android` and `npx expo run:ios` commands. For more information, see [Android build process](https://docs.expo.dev/build-reference/android-builds/) and [iOS build process](https://docs.expo.dev/build-reference/ios-builds/).
	Related:
```
# Locally compile and run the Android app in release mode
npx expo run:android --variant release

# Locally compile and run the iOS app in release mode
npx expo run:ios --configuration Release
	
```

5. You can alternatively run a local build with `eas build --local` — this command will run a series of steps that is as close as it can be to what runs remotely on the hosted EAS Build service. It will copy your project to a temporary directory and make any necessary changes there. [Learn how to set this up and use it for debugging](https://docs.expo.dev/build-reference/local-builds/#using-local-builds-for-debugging).

## Command reference
Start the development server for your project:

```
npx expo start
```

Start your Expo project with production-like settings:

```
npx expo start --no-dev --minify
```

_When you run this command you are starting the Expo development server with the following characteristics:_

_It runs in "no-dev" mode, potentially skipping some development-specific checks and optimizations. It minifies the JavaScript code for production use, reducing its size and improving performance._

_This command is useful when you want to start your Expo project with production-like settings for testing or building your app for deployment to a production environment._

## File structure

- `index.js`
	The root `index.js` file at the root of your React Native Expo project is the entry point for your Expo application. It is responsible for setting up the root component of your app. Here's an explanation of the code with comments:

	```javascript
	// Import the 'registerRootComponent' function from 'expo'
	import { registerRootComponent } from 'expo';

	// Import the 'App' component from './App'
	import App from './App';

	// Register the 'App' component as the root component of the application
	registerRootComponent(App);
	```

	Here's what each part of this `index.js` file does:

	1. `import { registerRootComponent } from 'expo';`: This line imports the `registerRootComponent` function from the `expo` package. This function is used to register the root component of your Expo application.

	2. `import App from './App';`: This line imports the `App` component from the './App' file. The `App` component is typically the main entry point of your Expo app, where you define the overall structure and behavior of your application.

	3. `registerRootComponent(App);`: This line registers the `App` component as the root component of your Expo application. This means that when your app is launched, it will start by rendering the `App` component as the root of your component tree.

	The comment provided in the code also explains the purpose of `registerRootComponent`. It ensures that whether you load the app in Expo Go (Expo's development app) or in a native build (e.g., an APK or IPA file), the environment is set up appropriately to start your app with the specified root component.

	In summary, the `index.js` file is crucial for setting up the initial configuration of your Expo app and specifying the root component that should be rendered when your app is launched.
	
- `src/navigation`

	- `index.tsx`
	
		In summary, this index.tsx file serves as the entry point for your app's navigation logic, where it checks the user's authentication status using the useAuthentication hook and renders the appropriate navigation stack based on whether the user is authenticated or not.

## Firebase

- At the root `.env` file includes the Firebase SDK setup code.

- [Emulators](https://firebase.google.com/docs/emulator-suite/connect_and_prototype?authuser=0&hl=en)

- Commands

	Install [Firebase CLI](https://firebase.google.com/docs/cli?authuser=0#test-locally)
	```
	curl -sL https://firebase.tools | bash
	```
	
	Login to Firebase from terminal
	```
	firebase login    
	```
	
	List Firebase projects:
	```
	firebase projects:list
	```
	
	Firebase init
	```
	 firebase init
	```
	
	If installed emulators you can start them with this command:
	```
	firebase emulators:start
	```