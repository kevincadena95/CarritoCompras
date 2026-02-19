import React, { ReactNode } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { StyleGlobal } from '../theme/appTheme'

interface Props{
 children: ReactNode; //componente react
}

export const BodyComponent = (props: Props) => {
const {height} = useWindowDimensions();

    return (
    <View style={{...StyleGlobal.containerBody, height: height*0.85}}>
        {props.children}
    </View>
    )
}
