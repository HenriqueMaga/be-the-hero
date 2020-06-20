import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Button, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png'

import styles from './style';
import api from '../../services/api';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0); 
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToIncidents(incident){
        navigation.navigate('Incidents');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Faça seu Login</Text>
            
            <TextInput style={styles.input} placeholder="Digite seu Nome de Usuário..."></TextInput>
            <TextInput style={styles.input} placeholder="Digite sua senha..." secureTextEntry={true} ></TextInput>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={() => {}}>
                    <Text style={styles.actionText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity>
                    <Text style={styles.backText}>Não tenho Cadastro</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}