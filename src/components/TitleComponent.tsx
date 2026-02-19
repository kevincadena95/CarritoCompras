import React from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { StyleGlobal } from '../theme/appTheme';
//interface deinir los props del componente

interface Props{
    title: string
}

export const TitleComponent = ({title}:Props) => {
const {height} = useWindowDimensions();

    return (
    <Text style={{...StyleGlobal.title, height: height*0.15}}>{title}</Text>
    )
}
