
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/Navigator/StackNavigator';

  const App =() =>{
  return (
    <NavigationContainer >
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;


