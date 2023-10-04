// Import the 'registerRootComponent' function from 'expo'
import { registerRootComponent } from 'expo';

// Import the 'App' component from './App'
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// Register the 'App' component as the root component of the application
registerRootComponent(App);
