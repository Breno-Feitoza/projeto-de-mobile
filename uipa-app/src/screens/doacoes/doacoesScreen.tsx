import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import React from 'react';
import { styles } from './style';
import { router } from 'expo-router';

export const Doacoes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doações</Text>
      
      {/* Card 1: Produtos/Materiais de Limpeza */}
      <View style={styles.cardContainer}>
        {/*imagem*/}
        <Text style={styles.cardDescription}>
          Doe produtos de limpeza como sabão, desinfetante, esponjas e outros materiais que nos ajudam a manter o abrigo limpo e higienizado para os animais.
        </Text>
        <Button title="Doar Produtos" onPress={() => router.navigate('/')} />
      </View>

      {/* Card 2: Ração */}
      <View style={styles.cardContainer}>
        {/*imagem*/}

        <Text style={styles.cardDescription}>
          Doe rações para cães, gatos ou outros animais de todos os portes. Sua contribuição ajuda a alimentar os animais que resgatamos diariamente.
        </Text>
        <Button title="Doar Ração" onPress={() => router.navigate('/')} />
      </View>

      {/* Card 3: Dinheiro */}
      <View style={styles.cardContainer}>
        {/*imagem*/}

        <Text style={styles.cardDescription}>
          Doações em dinheiro nos ajudam a cobrir custos veterinários, medicamentos, castrações e outras necessidades urgentes dos animais.
        </Text>
        <Button title="Doar Dinheiro" onPress={() => router.navigate('/')} />
      </View>
    </View>
  );
};