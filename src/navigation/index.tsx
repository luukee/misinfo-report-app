import React from 'react';
import { useAuthentication } from '../utils/hooks/useAuthentication'; // Import the custom hook for managing authentication state.
import UserStack from './userStack'; // Import the stack for authenticated users.
import AuthStack from './authStack'; // Import the stack for authentication and sign-in.

// Define the RootNavigation component responsible for routing based on authentication.
export default function RootNavigation() {
  // Use the useAuthentication hook to check the user's authentication status.
  const { user } = useAuthentication();

  // Conditional rendering:
  // If the user is authenticated, render the UserStack (for authenticated users).
  // If the user is not authenticated, render the AuthStack (for authentication and sign-in).
  return user ? <UserStack /> : <AuthStack />;
}
