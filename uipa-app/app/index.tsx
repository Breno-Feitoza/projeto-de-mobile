import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à UIPA</Text>
      <Text style={styles.description}>
        A UIPA é uma organização dedicada à proteção e adoção de animais. Nossa missão é encontrar lares amorosos para os animais abandonados e promover a conscientização sobre a importância da adoção.
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Adote" onPress={() => {}} />
        <Button title="Doações" onPress={() => {}} />
        <Button title="Conheça Mais" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#C6F4D6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: "Impact, sans-serif",
    letterSpacing: 2,
    color: "#3A6F47",
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: "lora, serif",
    letterSpacing: 1.5,
  },
  buttonContainer: {
    width: '40%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export default Home;
