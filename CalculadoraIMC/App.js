import React, {useState} from 'react';
import {
  View,
  Text, 
  StyleSheet,
  useColorScheme, 
  TextInput,
  Button} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [peso, onChangePeso] = useState(null);
  const [altura, onChangeAltura] = useState(null);
  const [legenda, setLegenda] = useState(null);
  const [imc, setIMC] = useState();

  const calcularIMC = () => {
    setIMC(peso / (altura * altura));
    if (imc < 18.5) setLegenda("Magreza");
    if (imc >= 15.5 && imc < 25) setLegenda("Normal");
    if (imc >= 25 && imc < 30) setLegenda("Sobrepeso");
    if (imc >= 30 && imc < 40) setLegenda("Obesidade");
    if (imc >= 40) setLegenda("Obesidade Grave");
  };

  return(
    <View style={styles.container}>
      <Text 
        style={[
          styles.legenda,
          {
            color: isDarkMode ? '#CCC' : 'black',
          },
        ]}> Seu IMC</Text>

      <View>
        <Text style={styles.resultado}>{imc}</Text>
        <Text style={styles.resultadoTexto}>{legenda}</Text>
      </View>

      <View>
        <TextInput
          style={styles.peso}
          onChangeText={onChangePeso}
          value={parseFloat(peso)}
          keyboardType="numeric"
        />
        <TextInput 
          style={styles.altura}
          onChangeText={onChangeAltura}  
          value={parseFloat(altura)}
          keyboardType="numeric"
        />
        <Button 
          title='Calcular' 
          color={'#666'}
          onPress={calcularIMC}
          />
      </View>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
  },
  legenda:{
    textAlign:"center",
    fontWeight:'bold',
  },
  resultado:{
    textAlign: 'center',
    fontSize:22,
    fontWeight:'bold',
  },
  resultadoTexto:{
    textAlign: 'center',
    fontSize:16,
  },
  peso:{
    borderColor:'white',
    borderWidth:1,
  },
  altura:{
    borderColor:'white',
    borderWidth:1,
  }
});

export default App;
