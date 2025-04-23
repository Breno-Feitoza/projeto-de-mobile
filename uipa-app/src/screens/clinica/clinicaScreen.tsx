import { Button, Text, View } from "react-native"
import { styles } from "./style"
import { router } from "expo-router"

export const Clinica = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Clínica</Text>
            <Text style={styles.description}>A clínica Veterinária UIPA efetua consultas, procedimentos cirurgícos
                e ambulatórios, incluindo esterilização e cirurgias ortopédicas, além de exames laboratoriais.
            </Text>
            <Text style={styles.description}>Não é necessário marcar consulta; o atendimento é por ordem de chegada,
                exceção feita às cirurgias ortopédicas e as realizadas aos sábados.
            </Text>
            <Text style={styles.description}>A clínica está aberta de segunda a sábado das 09h às 17h</Text>
            <Text style={styles.description}>Valor da consulta: R$80,00, estacionamento no local gratuito. 
                qualquer procedimento realizado na clínica não é gratuito mas os preços são muito reduzidos em 
                relação às clínicas particulares e temos a possibilidade de parcelamento, conforme a necessidade do cliente.
            </Text>
            <View style={styles.card_main}>
                <View style={styles.card}>
                    <Text style={styles.description}>Para agendamento aos sábados</Text>
                    <Button title="Clique aqui" onPress={() => router.navigate('/')} />
                </View>
            </View>
        </View>
    )
}