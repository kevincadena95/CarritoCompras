import React, { useState } from 'react'
import { FlatList, Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Cart, Product } from '../HomeScreen';
import { StyleGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../commons/constants';

interface Props{
    isVisible: boolean; //mostrar modal
    cart: Cart[];
    HiddenModal: () => void; //cerrar el modal
}


export const ModalCartComponent = ({isVisible, cart, HiddenModal}: Props) => {



    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}> 
        <View style={StyleGlobal.containerModal}>  
            <FlatList 
                data={cart}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                keyExtractor = {item => item.id.toString()}/>
        </View>  
    </Modal>
    )
}
