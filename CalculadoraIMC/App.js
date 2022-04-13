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
    const resultado = peso / (altura * altura) 
    setIMC(resultado);
    if (resultado < 18.5) setLegenda("Magreza");
    if (resultado >= 15.5 && resultado < 25) setLegenda("Normal");
    if (resultado >= 25 && resultado < 30) setLegenda("Sobrepeso");
    if (resultado >= 30 && resultado < 40) setLegenda("Obesidade");
    if (resultado >= 40) setLegenda("Obesidade Grave");
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
          placeholder="Digite seu peso"
          keyboardType="numeric"
        />
        <TextInput 
          style={styles.altura}
          onChangeText={onChangeAltura}  
          value={parseFloat(altura)}
          placeholder="Digite sua altura"
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
