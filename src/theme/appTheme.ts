import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, QUATERNARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../commons/constants';

export const StyleGlobal = StyleSheet.create({
    title: {
        color: SECONDARY_COLOR,
        fontSize: 20,
        paddingHorizontal: 30,
        paddingTop: 65,
        fontWeight: 'bold',
    },

    containerBody: {
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 30,
        paddingBottom: 30,
        
    },

    titleWelcome: {
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 30,
    },

    input:{
        backgroundColor: QUATERNARY_COLOR,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 5
    },

    button:{
        backgroundColor: TERTIARY_COLOR,
        borderRadius: 15,
        marginVertical: 5,
        padding: 15
    },

    buttonText:{
        color: SECONDARY_COLOR,
        textAlign: 'center',
        borderRadius: 5,
        marginVertical: 5,
        fontWeight: 'bold',
    },

    IconPassword:{
        
        position: 'absolute',
        bottom: 15,
        right: 10,
        
    },

    textRedirect: {
        marginTop: 20,
        fontSize: 15,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    ContainerCard: {
        width: 160,
        height: 220, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: TERTIARY_COLOR,
        marginBottom: 10,
        borderRadius: 10,
        
        
    },

    titleCard: {
        fontSize: 18,
        fontWeight: 'bold',
        //textAlign: 'center'
    },

    

    imageCard: {
        width: 80,
        height: 80,       
    },

    iconCard: {
        flex: 1,
        alignItems: 'flex-end',
        
    },

    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    
    bodyModal: {
        padding: 20, 
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10
    },

    HeatherModal: {
        flexDirection: 'row', 
        borderColor: TERTIARY_COLOR,
        borderBottomWidth: 1,
        padding: 10
    },

    titleModal: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    imageModal:{
        width: 200,
        height: 200
    },

    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonQuantity:{
        backgroundColor: TERTIARY_COLOR,
        height: 50,
        width: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25
    },

    buttonQuantitytext:{
        backgroundColor: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },

    textTotalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },

    textStock: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        margin: 20,
        textAlign: 'center'
    },

    heatherHome: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    iconHome: {
        flex: 1,
        alignItems: 'flex-end',
        paddingTop: 30,
        paddingHorizontal: 30
    }

})