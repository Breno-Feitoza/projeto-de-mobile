import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';
import axios from 'axios';

export const FormsAdotar = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/dados', {
                nome,
                email,
                celular,
                cpf,
                endereco,
            });
            Alert.alert('Sucesso', response.data.message);
            router.navigate('/');
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao enviar os dados.');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nome:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <Text style={styles.title}>E-mail:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="E-mail"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.title}>Celular:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Celular"
                keyboardType="phone-pad"
                value={celular}
                onChangeText={setCelular}
            />
            <Text style={styles.title}>CPF:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="CPF"
                value={cpf}
                onChangeText={setCpf}
            />
            <Text style={styles.title}>Endereço Residencial:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Endereço Residencial"
                value={endereco}
                onChangeText={setEndereco}
            />
            <View style={styles.buttonContainer}>
                <Button title="Enviar" onPress={handleSubmit} />
            </View>
        </View>
    );
};
