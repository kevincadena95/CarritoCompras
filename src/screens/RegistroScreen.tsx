import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent'
import { StyleGlobal } from '../theme/appTheme';
import { InputComponent } from '../components/inputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface FormerRegister {
    name: string;
    email: string;
    password: string
}

export const RegisterScreen = () => {
    //hook use navigation
    const navigation=useNavigation();

    //hoook useState: pemrite gestionar el estado de un formulario
    const [formRegister, setFormRegister] = useState<FormerRegister>({
    name: '',
    email: '',
    password: ''
    })

    //funciom para capturar los valores del formulario
    const handleChangeValue = (name: string, value: string) => {
        //Modifificar el estado del formaulrio
        setFormRegister({...formRegister, [name]: value});
    }

    //funcion para registrarse
    const handleRegister = () => {
        console.log(formRegister)
    }

    return (
    <View>
        <TitleComponent title="Registro"/>
        <BodyComponent>
            <Text style={StyleGlobal.titleWelcome}>Bienevenido de vuevo</Text>
            <Text>Realiza tus compras de manera rapida!</Text>
                <View>
                <InputComponent placeholder='Nombre' keyboardType='default' 
                handleChangeValue={handleChangeValue}
                name='name'/>
                <InputComponent placeholder='Email' keyboardType='email-address' 
                handleChangeValue={handleChangeValue}
                name='email'/>
                <InputComponent placeholder='Contraseña' keyboardType='default'
                handleChangeValue={handleChangeValue}
                name='password'/> 
                </View>

            <ButtonComponent buttonText='Registrar' onPress={handleRegister}/>
            
        <TouchableOpacity
            onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
            <Text style={StyleGlobal.textRedirect}>
                Ya tienes una cuenta? Inicia sesión ahora
            </Text>
        </TouchableOpacity>
        </BodyComponent>
        
    </View>
    )
}
