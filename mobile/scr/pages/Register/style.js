import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 35,
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 60,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 23,
        lineHeight: 25,
        marginBottom: 25,
        color: '#737380',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    inputText: {
        color: '#a4a4ad',
        fontSize: 15,
        textAlign: 'left',
        fontWeight: 'bold',
        width: '100%',
        marginBottom: 2
    },

    input: {
        padding: 14,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 10,
        fontSize: 18,
        color: '#737380',
        width: '100%',
        
    },
    actions: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    action: {
        color: '#fff',
        fontWeight: '700',
        marginTop: 5,
        textAlign: 'center',
        fontSize: 15,
        lineHeight: 60,
        borderRadius: 8,
        backgroundColor: '#e02041',
        height: 60,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },

    backText: {
        color: '#41414d',
        fontSize: 20,
        fontWeight: 'bold'
    }
});