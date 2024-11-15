import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native"

export const Input = () => {
    const [texto, setTexto] = useState("texto inicial")
return (
    <View style={styles.container}>
        <Text style={styles.texto}> Eu sou componete de texto</Text>;
        <TextInput style={styles.input} value={texto} onChangeText={setTexto}/>
    </View>
)};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    texto:{
        fontSize:35,
        textAlign: "center"
    },

    input:{
        height:40,
        margin: 12,
        borderWidth: 1,
        padding:10


    }
})