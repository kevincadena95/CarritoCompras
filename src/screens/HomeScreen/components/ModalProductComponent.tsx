import React, { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Product } from '../HomeScreen';
import { StyleGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../commons/constants';

//animacion fade se meustra desde atars y el slide dese abajo

interface Props{
    isVisible: boolean; //mostrar modal
    item: Product;
    hiddenModal: () => void; //se encargra de ocultar el modal pero va a atrabajar con el estado
}

export const ModalProductComponent = ({isVisible, item, hiddenModal}: Props) => {

    const{width} = useWindowDimensions();

    //hook useState: permite manejar el estado del contador
    const [contador, setContador] = useState <number>(1);



    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}> 
        <View style={StyleGlobal.containerModal}>  
            <View style={{...StyleGlobal.bodyModal, width: width*0.80}}>

                <View style={StyleGlobal.HeatherModal}> 
                    <Text style={StyleGlobal.titleModal}>{item.name} - ${item.price.toFixed(2)} </Text>
                    <View style={StyleGlobal.iconCard}>
                        <Icon name='cancel'
                        size={24}
                        color={TERTIARY_COLOR}
                        onPress={hiddenModal}/>
                    </View>
                </View>  
                
                <View style={{alignItems: 'center'}}>
                    <Image source={{uri: item.pathImage}}
                    style={StyleGlobal.imageModal}/>
                </View>
                {
                    (item.stock==0)
                    ? <Text style={StyleGlobal.textStock}>Producto Agotado</Text>
                    :
                <>
                <View style={StyleGlobal.containerQuantity}>
                    <TouchableOpacity style={StyleGlobal.buttonQuantity}
                    onPress={()=> setContador(contador+1)}>
                        <Text style={StyleGlobal.buttonText}>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity><Text>{contador}</Text></TouchableOpacity>

                    <TouchableOpacity style={StyleGlobal.buttonQuantity}
                    onPress={()=> setContador(contador-1)}
                    disabled={contador == 1}> 
                    {/* //disable para desabilitar el boton cuando la cantidad llegue a 1 */}
                        <Text style={StyleGlobal.buttonText}>-</Text>
                    </TouchableOpacity>
                    
                    
                </View>

                <View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={StyleGlobal.textTotalPrice}>Total: $ {(item.price*contador).toFixed(2)} </Text>
                    </View>
                    <TouchableOpacity style={StyleGlobal.button}>
                        <Text style={StyleGlobal.buttonText}>Agregar al carrito</Text>
                    </TouchableOpacity>
                </View>
                </>
                }

                

            </View>
        </View>  
    </Modal>
    )
}
