import { useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function Contador() {

  
const [contador, setContador] = useState(0)

const handlePress =() => {
  console.log("clicado");
  setContador (contador+1);
  
}


  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{contador}</Text>

      <Button title= "clique aqui" onPress={handlePress}/>
      
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize:200,

  }
});
