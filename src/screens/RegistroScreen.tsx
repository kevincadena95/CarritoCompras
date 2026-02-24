import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent'
import { StyleGlobal } from '../theme/appTheme';
import { InputComponent } from '../components/inputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../Navigator/StackNavigator';

interface FormerRegister {
    name: string;
    email: string;
    password: string
}

//Interfaz que defie las propiedades de un componente

interface Props{
    listUsers:User[];
    handleAddUser: (user: User) => void; //actualizar el arreglo
}

export const RegisterScreen = ({listUsers, handleAddUser}:Props) => {
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

    //funcion para verificar si existe el usuario
    const verifyUser = (): User => {
        const existUser =listUsers.filter(user => user.email == formRegister.email)[0];
        return existUser
    }

    //funcion para generar los ids de los nuevos usuarios
    const getTdUser = () =>{
        const getId = listUsers.length + 1;
        return getId;
    }

    //funcion para registrarse
    const handleRegister = () => {
    //Validar los campos
    if(formRegister.name=='' || formRegister.email=='' || formRegister.password==''){
        Alert.alert("Error","Por favor complete todos los campos")
            return;
    }

    //Validar campo de inicio de sesion
    if(verifyUser()){
        Alert.alert("Error","El usuario ya se encuentra registrado")
        return;
    }
    //Registrar usuarios
        //Crear objeto user
        const newUser: User ={
            id: getTdUser(),
            name: formRegister.name,
            email: formRegister.email,
            password: formRegister.password
        }

        //agregar objeto al arreglo
        handleAddUser(newUser);
        Alert.alert("Registrado","Usuario registrado con éxito")
        //redireccionar al login
        navigation.goBack();
        
        //console.log(formRegister)
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
