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
        marginVertical: 5
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

    textRedirect:{
        marginTop: 20,
        fontSize: 16,
        color: PRIMARY_COLOR,
        
    }
})