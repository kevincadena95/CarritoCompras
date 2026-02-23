import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent'
import { StyleGlobal } from '../theme/appTheme';
import { InputComponent } from '../components/inputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { PRIMARY_COLOR } from '../commons/constants'
import Icon from '@expo/vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface FormLogin {
    email: string;
    password: string
}

interface User {
    id: number;
    name: string;
    email: string;
    password: string
}

export const LoginScreen = () => {
    //hook use navigation
    const navigation=useNavigation();

    //datos de prueba
    const users: User[]=[
        {id: 1, name: 'Kevin Cadena', email: 'kevgeek5@gmail.com', password: '12345'},
        {id: 2, name: 'Mika Cadena', email: 'mikaela@gmail.com', password: '54321'}
    ]

    //funcion para verificar el usuario
    const verifyUser =(): User =>{
        const existUser = users.filter(user => user.email == formLogin.email && user.password == formLogin.password)[0]; 
        return existUser
    }

    //hook UseState:m permite gestionar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    //hook para  el icono de cocultra o  mostar 
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);


    //funcion para capturar los valores de mi formulario
    const handleChangeValue = (name: string, value: string) => {
    //console.log(name, " ", value);
    setFormLogin({...formLogin, [name]: value }); 
    //... es el oprador de funcion, saca copias de un objeto
    //En react native nunca cambiar directamente de un objeto, si o sacar una copia del objeto pra cambiar su estado
    }

    //funcios para iniciar sesion
    const handleSingIn=(): void =>{
    if (formLogin.email == '' || formLogin.password == ''){
        //mensaje de alerta
        Alert.alert('Error','Campos Incompletos');
        return;

    }

    //verificar si existe el usuario
    if(!verifyUser()){
        Alert.alert('Error','Usuario y/o Contraseña Incorrectos');
        return;
    }

        console.log(formLogin)
    }


    return (
    <View>
        <TitleComponent title="Iniciar Sesion"/>
        <BodyComponent>
            <Text style={StyleGlobal.titleWelcome}>Bienevenido de vuevo</Text>
            <Text>Realiza tus compras de manera rapida!</Text>
                <View>
                <InputComponent placeholder='Email' keyboardType='email-address' 
                handleChangeValue={handleChangeValue}
                name='email'/>

                <InputComponent placeholder='Contraseña' keyboardType='default'
                handleChangeValue={handleChangeValue}
                name='password'
                isPassword = {true} //propiedad opcional  
                />
                <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'}
                color={PRIMARY_COLOR}
                style={StyleGlobal.IconPassword}
                onPress={()=> setHiddenPassword(!hiddenPassword)}
                />  
                </View>

            <ButtonComponent buttonText='Iniciar' onPress={handleSingIn}/>
            
            <TouchableOpacity onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Registro'}))}>
                <Text style={StyleGlobal.textRedirect}>No tienes una cuenta? Registrate ahora</Text>
            </TouchableOpacity>

        </BodyComponent>
        
    </View>

    )
}
