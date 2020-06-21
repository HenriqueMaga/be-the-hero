import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png'

import styles from './style';
import api from '../../services/api';

export default function Register() {
    let [username, setUsername] = useState();
    let [password, setPassword] = useState();
    let [email, setEmail] = useState();
    let [city, setCity] = useState();
    let [uf, setUf] = useState();

    async function userRegister () {

        try{
            const response = await api.post('users', {
                username,
                password,
                email,
                city,
                uf
            });
            
            navigateToIncidents(username);
        } catch (err) {
            alert(err);
        }
        
    }

    const navigation = useNavigation();

    function navigateToIncidents(username){
        navigation.navigate('Incidents', {username});
    }

    function navigateToLogin(){
        navigation.navigate('Logon');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>
            <Text style={styles.description}>Digite seus dados e venha ajudar o mundo a ser um lugar melhor!</Text>
            
            <Text style={styles.inputText}>Crie seu Usuário</Text>
            <TextInput style={styles.input} placeholder="Nome de Usuário..." onChangeText={username => setUsername(username)}></TextInput>

            <Text style={styles.inputText}>Crie uma Senha</Text>
            <TextInput style={styles.input} placeholder="Senha..." secureTextEntry={true} onChangeText={password => setPassword(password)}></TextInput>

            <Text style={styles.inputText}>Digite seu E-mail</Text>
            <TextInput style={styles.input} placeholder="Exemplo@email.com..." onChangeText={email => setEmail(email)}></TextInput>

            <Text style={styles.inputText}>Digite o nome da sua Cidade</Text>
            <TextInput style={styles.input} placeholder="Cidade..." onChangeText={city => setCity(city)}></TextInput>

            <Text style={styles.inputText}>Digite o nome do seu Estado</Text>
            <TextInput style={styles.input} placeholder="UF..." onChangeText={uf => setUf(uf)}></TextInput>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={() => userRegister()}>
                    <Text style={styles.actionText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity onPress={() => navigateToLogin()}>
                    <Text style={styles.backText}>
                        <Feather name="arrow-left" size={28} color="#13131a" />
                        Já possuo Cadastro
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}