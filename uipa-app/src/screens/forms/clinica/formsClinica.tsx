import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, TouchableOpacity, Alert } from 'react-native';
import { styles } from './style'; // Importando os estilos do arquivo style.ts
import { router } from 'expo-router';
import axios from 'axios';

export const FormsClinica = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');

    const timeOptions = [
        { id: '1', label: '09:00' },
        { id: '2', label: '10:00' },
        { id: '3', label: '11:00' },
        { id: '4', label: '14:00' },
        { id: '5', label: '15:00' },
        { id: '6', label: '16:00' },
    ];

    const handleSelectTime = (option: { id: string; label: string }) => {
        setSelectedTime(option.label);
        setModalVisible(false);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/dados', {
                nome,
                email,
                celular,
                cpf,
                endereco,
                horario: selectedTime,
            });
            Alert.alert('Sucesso', response.data.message);
            router.navigate('/'); // Navegar após o envio
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

            <View style={{ marginVertical: 20 }}>
                <Button title="Selecionar Horário" onPress={() => setModalVisible(true)} />
                {selectedTime && <Text style={{ marginTop: 10 }}>Horário selecionado: {selectedTime}</Text>}
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPressOut={() => setModalVisible(false)}>
                    <View style={styles.modalContent}>
                        {timeOptions.map((option) => (
                            <TouchableOpacity
                                key={option.id}
                                style={styles.optionButton}
                                onPress={() => handleSelectTime(option)}
                            >
                                <Text style={styles.optionText}>{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </TouchableOpacity>
            </Modal>

            <View style={styles.buttonContainer}>
                <Button title="Enviar" onPress={handleSubmit} />
            </View>
        </View>
    );
};
