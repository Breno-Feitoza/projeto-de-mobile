import { router } from 'expo-router';
import React from 'react';
import { View, Text, Button, Image, } from 'react-native';
import {styles} from './style'

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à UIPA</Text>
      <Image source={require('../../images/uipa_logo.png')} style={{ width: 200, height: 200, marginBottom: 20 }} />
      <Text style={styles.description}>
        A UIPA é uma organização dedicada à proteção e adoção de animais. Nossa missão é encontrar lares amorosos para os animais abandonados e promover a conscientização sobre a importância da adoção.
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Adote" onPress={() => router.navigate('/adote')} />
        <Button title="Doações" onPress={() => router.navigate('/doacoes')} />
        <Button title="Conheça Mais" onPress={() => router.navigate('/sobre')} />
        <Button title="clínica" onPress={() => router.navigate('/clinica')} />
      </View>
    </View>
  );
};