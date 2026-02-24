import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent'
import { BodyComponent } from '../../components/BodyComponent';


interface Product{
    id: number,
    name: string,
    price: number,
    stock: number,
    pathImage: string,
}

export const HomeScreen = () => {

    //datos de prueba
    const products: Product[] = [
        {id: 1, name: 'Funda de arroz', price: 2.00, stock: 5, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjklxI8MWPHgyQAaDS5uRdJTKgQHFEjPVfA&s'},
        {id: 2, name: 'Funda de azucar', price: 1.50, stock: 4, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/84571_G.jpg'},
        {id: 3, name: 'Funda de papas', price: 3.00, stock: 10, pathImage: 'https://media.istockphoto.com/id/182792873/es/foto/bolsa-de-nueva-papas-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=LYJ67G_DIinIIYuN7NdcfLlBeBpZFnvkUINGKbhF-Nw='},
        {id: 4, name: 'Funda de fideos', price: 1.00, stock: 8, pathImage: 'https://www.comisariatoeconomico.com/wp-content/uploads/2025/01/7861026004280.jpg'},
        {id: 5, name: 'Funda de sal', price: 0.50, stock: 2, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Lb7ewmkhVd--lnN9saa8QklRZnEq97_MAA&s'},

    ];

    return (
    <View>
        <TitleComponent title='Productos'/>
        <BodyComponent>
            <FlatList 
                data={products}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                keyExtractor = {item => item.id.toString()}
            />
        </BodyComponent>
    </View>
    )
}
