import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constants';
import { RegisterScreen } from '../screens/RegistroScreen';

const Stack = createStackNavigator();

export const StackNavigator =() => {
    
    return (
    <Stack.Navigator screenOptions={{
        cardStyle:{
        backgroundColor: PRIMARY_COLOR  
    },
    
    headerShown: false
    
        }}>
            
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />
    </Stack.Navigator>
    );
}