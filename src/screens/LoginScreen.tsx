import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { StyleGlobal } from '../theme/appTheme'
import { InputComponent } from '../components/inputComponent';
import { ButtonComponent } from '../components/ButtonComponent'

interface FormLogin {
    email: string
    password: string
}

export const LoginScreen = () => {
    //hook UseState:m permite gestionar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    //funcion para capturar los valores de mi formulario
    const handleChangeValue = (name: string, value: string) => {
    //console.log(name, " ", value);
    setFormLogin({...formLogin, [name]: value }); 
    //... es el oprador de funcion, saca copias de un objeto
    //En react native nunca cambiar directamente de un objeto, si o sacar una copia del objeto pra cambiar su estado
    }

    //funcios para iniciar sesion
    const handleSingIn=(): void =>{
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
                
                </View>
            <ButtonComponent buttonText='Iniciar' onPress={handleSingIn}/>
        </BodyComponent>
        
    </View>

    )
}
