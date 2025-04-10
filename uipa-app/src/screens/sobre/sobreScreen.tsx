import { Button, Image, Text, View } from "react-native"
import { styles } from "./style"
import { router } from "expo-router"
import React from "react"

export const Sobre = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sobre a UIPA</Text>
            <Text style={styles.description}>
            ​A União Internacional Protetora dos Animais (UIPA) é uma entidade brasileira dedicada à proteção e defesa dos direitos dos animais. Fundada em 1895, é considerada a associação civil mais antiga do país nesse segmento. A UIPA atua no combate à exploração, abandono e crueldade contra os animais, promovendo o reconhecimento de seus direitos e o cumprimento das leis que os protegem.
            A sede da UIPA está localizada na cidade de São Paulo, e a organização mantém atividades como resgate de animais em situação de risco, atendimento veterinário e campanhas de conscientização pública sobre a importância do respeito aos animais. Além disso, a UIPA trabalha ativamente na proposição e fiscalização de legislações que visam garantir o bem-estar animal.
            </Text>
            <Image source={require('../../images/sobreImage.png')} style={{ width: 200, height: 200, marginBottom: 20 }} />
            <View style={styles.buttonContainer}>
                <Button title="entre em contato" onPress={() => router.navigate('/contato')} />
                <Button title="voltar" onPress={() => router.back()} />
            </View>
        </View>
    )
}