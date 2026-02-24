import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constants';
import { RegisterScreen } from '../screens/RegistroScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

export interface User {
    id: number;
    name: string;
    email: string;
    password: string
}

export const StackNavigator =() => {

    //datos de prueba
    const users: User[]=[
        {id: 1, name: 'Kevin Cadena', email: 'kevgeek5@gmail.com', password: '12345'},
        {id: 2, name: 'Mika Cadena', email: 'mikaela@gmail.com', password: '54321'}
    ]

    //hook useState: permite gestionar la lista de usuarios
    const [listUsers, setListUsers] = useState<User[]>(users);  //arreglo con la lista de usuario

    //función para agregar el usuaio al arreglo listUsers
    const handleAddUser = (user: User): void => {
        //modificar el estado del arreglo
        setListUsers([...listUsers, user]);
    }
    
    return (
    <Stack.Navigator screenOptions={{
        cardStyle:{
        backgroundColor: PRIMARY_COLOR  
    },
    
    headerShown: false
    
        }}>
            
        <Stack.Screen name="Login" 
        options={{headerShown: false}}
        children={()=> <LoginScreen users={listUsers} />} 
        />
        <Stack.Screen name="Register" 
        options={{headerShown: false}}
        children={()=> <RegisterScreen listUsers={listUsers} handleAddUser={handleAddUser} />} 
        />
        <Stack.Screen name="Home" 
        options={{headerShown: false}}
        component={HomeScreen} 
        />
    </Stack.Navigator>
    );
}