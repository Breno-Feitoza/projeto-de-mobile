import { Button, Linking, Text, View } from "react-native"
import { styles } from "./style"
import { router } from "expo-router"

export const Contato = () => {
    return(
        <View style={styles.container}>
            <View style={styles.card_main}>
            <View style={styles.card}>
                <Text style={styles.title}>Localização e Horário de funcionamento</Text>
                <Text style={styles.description}>Av. Presidente Castelo Branco, 3200 - Canindé, São Paulo - SP, 03036-000</Text>
                <Text style={styles.description}>Segunda a sábado: 9h às 17h</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Telefones:</Text>
                <Text style={styles.description}>Administração: 11 3228-1462</Text>
                <Text style={styles.description}>Administração (WhatsApp): 11 97950-1090</Text>
                <Text style={styles.description}>clínica: 11 3227-8937</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>E-mail:</Text>
                <Text style={styles.description}>uipasp@uol.com.br</Text>
            </View>
            <View style={styles.card}>
                    <Text style={styles.title}>Redes sociais:</Text>
                    <Button title="Instagram" onPress={() => Linking.openURL('https://www.instagram.com/uipasp/')} />
            </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Voltar" onPress={() => router.navigate('/')} />
            </View>
        </View>
    )
}