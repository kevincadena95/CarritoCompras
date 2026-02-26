import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent'
import { BodyComponent } from '../../components/BodyComponent';
import { CardProductComponent } from './components/CardProductComponent';
import Icon from '@expo/vector-icons/MaterialIcons';
import { QUATERNARY_COLOR } from '../../commons/constants';
import { StyleGlobal } from '../../theme/appTheme';
import { ModalCartComponent } from './components/ModalCartComponent';


export interface Product{
    id: number,
    name: string,
    price: number,
    stock: number,
    pathImage: string,
}

export interface Cart{
    id: number,
    name: string,
    price: number,
    quantity: number,
    total: number,
}

export const HomeScreen = () => {

    //datos de prueba
    const products: Product[] = [
        {id: 1, name: 'Funda de arroz', price: 2.00, stock: 0, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjklxI8MWPHgyQAaDS5uRdJTKgQHFEjPVfA&s'},
        {id: 2, name: 'Funda de azucar', price: 1.50, stock: 4, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/84571_G.jpg'},
        {id: 3, name: 'Funda de papas', price: 3.00, stock: 10, pathImage: 'https://media.istockphoto.com/id/182792873/es/foto/bolsa-de-nueva-papas-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=LYJ67G_DIinIIYuN7NdcfLlBeBpZFnvkUINGKbhF-Nw='},
        {id: 4, name: 'Funda de fideos', price: 1.00, stock: 8, pathImage: 'https://www.comisariatoeconomico.com/wp-content/uploads/2025/01/7861026004280.jpg'},
        {id: 5, name: 'Funda de sal', price: 0.50, stock: 2, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Lb7ewmkhVd--lnN9saa8QklRZnEq97_MAA&s'},
        {id: 6, name: 'Funda de papas', price: 3.00, stock: 10, pathImage: 'https://media.istockphoto.com/id/182792873/es/foto/bolsa-de-nueva-papas-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=LYJ67G_DIinIIYuN7NdcfLlBeBpZFnvkUINGKbhF-Nw='},
        {id: 7, name: 'Funda de fideos', price: 1.00, stock: 8, pathImage: 'https://www.comisariatoeconomico.com/wp-content/uploads/2025/01/7861026004280.jpg'},
        {id: 8, name: 'Funda de sal', price: 0.50, stock: 2, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Lb7ewmkhVd--lnN9saa8QklRZnEq97_MAA&s'},

    ];

    //hook useState: perimite gestionar la inofrmacion de los productos
    const [productsState, setProductsState] = useState<Product[]>(products);

    //hook uuseState: permite gestionar el estado de los productos del acrrito
    const [cart, setCart] = useState<Cart[]>([]); //arreglo carrito

    const[showModal, setShowModal] = useState<Boolean>(false)

    const HiddenModal = (): void => {
        setShowModal(!showModal)
    }

    //funcion para controlar el stock de los productos
    const changeStockProduct = (id: number, quantity: number): void => {
        const updateProduct = productsState.map( item => item.id == id
            ?{...item, stock: item.stock - quantity}
        :item);
        //modificar el arreglo de productos
        setProductsState(updateProduct);
        //llamar a la funcion para añadir productos al carrito
        addProduct(id, quantity)
    }

    //funcion para añadir productos al carrito
    const addProduct = (id: number, quantity: number): void => {
        const product = productsState.find(product => product.id == id)

        //si no existe el producto
        if (!product){
            return;
        }

        //crear el objeto del producto
        const newCart: Cart = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price*quantity,
        }

        //añadir al arreglo del carrito
        setCart([...cart, newCart]);
        console.log(cart);
    }


    return (
    <View>
        <View style={StyleGlobal.heatherHome}>
        <TitleComponent title='Productos'/>
        <Text>{cart.length}</Text>
        <Icon name='shopping-cart' color={QUATERNARY_COLOR} size={30} style={StyleGlobal.iconHome}
        onPress={HiddenModal}/>
        </View>
        <BodyComponent>
            <FlatList 
                data={products}
                //renderItem={({ item }) => <Text>{item.name}</Text>}
                renderItem={({ item }) => <CardProductComponent item={item} changeStockProduct={changeStockProduct} />}
                keyExtractor = {item => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
            />
        </BodyComponent>
        <ModalCartComponent isVisible={true} cart={cart} HiddenModal={HiddenModal}/>
    </View>
    )
}
