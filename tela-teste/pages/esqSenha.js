import React from 'react'
import { Text, SafeAreaView, StyleSheet, TextInput, Button, View, Pressable } from 'react-native';

export default function EsqSenha({navigation}) {
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Redefinir senha:
      </Text>
      <Text style={styles.paragraph}>
        E-mail cadastrado: 
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="example@email.com"
        placeholderTextColor="gray"
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            color='green'
            title="enviar requisição"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate('Entrar')}
          style={({ pressed }) => [
            {
              color: pressed ? 'blue' : 'black',
            },
            styles.ess,
          ]}
        >
          Voltar ao Login
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Cadastrar-se')}
          style={({ pressed }) => [
            {
              color: pressed ? 'blue' : 'black',
            },
            styles.ess,
          ]}
        >
          Registre-se
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title:{
    marginBottom: 10,
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0.5 },
    textShadowRadius: 6,
  },
  paragraph: {
    marginTop: 20 ,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }, 
  input: {
    height: 40,
    margin: 30,
    marginBottom: 20,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 0,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'gray',
    width: 200,
  },
  ess:{
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
