import { View, Text, TextInput, Button, } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';

export const FormsAdotar = () => {
    return(
    <View style={styles.container}>
        <Text style={styles.title}>Nome:</Text>
        <TextInput style={styles.textInput}
        placeholder="Nome"
        />
        <Text style={styles.title}>E-mail:</Text>
        <TextInput style={styles.textInput}
        placeholder="E-mail"
        keyboardType="email-address"
        />
        <Text style={styles.title}>Celular:</Text>
        <TextInput style={styles.textInput}
        placeholder="Celular"
        keyboardType="phone-pad"
        />
        <Text style={styles.title}>CPF:</Text>
        <TextInput style={styles.textInput}
        placeholder="CPF"
        />
        <Text style={styles.title}>Endereço Residencial:</Text>
        <TextInput style={styles.textInput}
        placeholder="Endereço Residencial"
        />
        <View style={styles.buttonContainer}>
            <Button title="Enviar" onPress={() => router.navigate('/')} />
        </View>
    </View>
    )
}