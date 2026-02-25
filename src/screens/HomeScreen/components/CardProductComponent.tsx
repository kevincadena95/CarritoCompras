import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Product } from '../HomeScreen';
import { StyleGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../commons/constants';
import { ModalProductComponent } from './ModalProductComponent';

interface Props {
    item: Product;

}


export const CardProductComponent = ({item}: Props) => {
    //hook usestate: gestionar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    //funcion para mostara o ocultar el modal
    const hiddenModal = (): void => {
        setShowModal(!showModal);
    }

    return (
        //framme
        <> 
        <View style={StyleGlobal.ContainerCard}>
            <Image source={{uri: item.pathImage}}
            style={StyleGlobal.imageCard}/>
            <View>
                <Text style={StyleGlobal.titleCard}>{item.name}</Text>
                <Text >${item.price.toFixed(2)}</Text>
            </View>
            <View style={{margin: 15}}>
                <Icon name='add-shopping-cart' 
                size={33} 
                color={TERTIARY_COLOR}
                onPress={hiddenModal}
                />  
            </View>          
            </View>
        <ModalProductComponent isVisible={showModal} item={item} hiddenModal={hiddenModal}/>
        </> 
    )
}
