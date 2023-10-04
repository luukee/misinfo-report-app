// Import necessary modules and components
import React from 'react'; // Import React library
import './config/firebase'; // Import Firebase configuration (assuming it's located in ./config/firebase)
import { ThemeProvider } from 'react-native-elements'; // Import ThemeProvider from the react-native-elements library
import RootNavigation from './navigation'; // Import the RootNavigation component from the './navigation' file

// Define the main App component
export default function App() {
  return (
    // Wrap the entire application in a ThemeProvider component from react-native-elements
    <ThemeProvider>
      {/* Render the RootNavigation component */}
      <RootNavigation />
    </ThemeProvider>
  );
}
