import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication'
import { Button } from 'react-native-elements';
import MButton from '../component/MButton';
import { getAuth, signOut } from 'firebase/auth';
import { Dimensions } from 'react-native';

const auth = getAuth();

export default function HomeScreen() {
  const { user } = useAuthentication();
  const getWindowWidth = () => {
      return (Dimensions.get('window').width);
  };
  const onLoginPress = () => {
    console.log('login pressed!');  
  }
  
  return (
    <View style={styles.container}>
      <Text>Welcome {user?.email}!</Text>

      <Button title="Sign Out" style={styles.button} onPress={() => signOut(auth)} />
      <MButton
          buttonStyle={{ width: getWindowWidth() - 100 }}
          buttonTextStyle={{ fontSize: 14 }}
          title={'Log In'}
          onPress={() => {
              onLoginPress()
          }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10
  }
});
