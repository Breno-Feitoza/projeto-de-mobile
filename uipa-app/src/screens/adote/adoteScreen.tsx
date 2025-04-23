import { View, Text, Image, Button } from 'react-native';
import React from 'react';
import { styles } from './style';
import { router } from 'expo-router';

export const Adote = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../images/Imagem1.jpeg')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Thor, 3 anos</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Adotar" onPress={() => router.navigate('/forms_adotar')} />
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../images/Imagem2.jpg')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Rex, 1 ano</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Adotar" onPress={() => router.navigate('/forms_adotar')} />
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../images/Imagem3.jpeg')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Luna, 4 anos</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Adotar" onPress={() => router.navigate('/forms_adotar')} />
          </View>
        </View>
      </View>
      <Button title="Voltar" onPress={() => router.navigate('/')} />
    </View>
  );
};