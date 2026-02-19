import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { StyleGlobal } from '../theme/appTheme'

interface Props {
    buttonText: string;
}

export const ButtonComponent = ({buttonText}: Props) => {
    return (
    <TouchableOpacity style={StyleGlobal.button}>
        <Text  style={StyleGlobal.buttonText} >{buttonText}</Text>
    </TouchableOpacity>
    )
}
