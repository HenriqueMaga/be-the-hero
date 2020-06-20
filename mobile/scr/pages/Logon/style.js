import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        alignItems: 'center'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

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
        fontSize: 35,
        lineHeight: 50,
        marginBottom: 60,
        color: '#737380'
    },

    input: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        fontSize: 25,
        color: '#737380',
        width: '100%',
        
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    action: {
        color: '#fff',
        fontWeight: '700',
        marginTop: 5,
        textAlign: 'center',
        fontSize: 18,
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
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
});