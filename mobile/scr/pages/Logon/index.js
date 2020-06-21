import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png'

import styles from './style';
import api from '../../services/api';

export default function Login() {
    let [username, setUsername] = useState();
    let [password, setPassword] = useState();

    async function userLogin () {
        try{
            const response = await api.post('userlogin', {
                username,
                password
            });
            navigateToIncidents(username);
        } catch (err) {
            alert(err.message);
        }
        
    }

    const navigation = useNavigation();

    function navigateToIncidents(username){
        navigation.navigate('Incidents', {username});
    }

    function navigateToRegister(){
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Faça seu Login</Text>
            
            <TextInput style={styles.input} placeholder="Digite seu Nome de Usuário..." onChangeText={username => setUsername(username)}></TextInput>
            <TextInput style={styles.input} placeholder="Digite sua senha..." secureTextEntry={true} onChangeText={password => setPassword(password)}></TextInput>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={() => userLogin()}>
                    <Text style={styles.actionText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity>
                    <Text style={styles.backText} onPress={() => navigateToRegister()}>Não tenho Cadastro</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}