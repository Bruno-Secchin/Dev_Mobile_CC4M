import React from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, Button, View, Pressable } from 'react-native';

export default function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Entrar:
      </Text>
      <Text style={styles.paragraph}>
        Login: 
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="example@email.com"
        placeholderTextColor="gray"
      />
      <Text style={styles.paragraph}>
        Senha: 
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="12345@Ab"
        placeholderTextColor="gray"
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            color='green'
            title="Logar"
            onPress={() => navigation.navigate('Principal')}
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate('Redefinir senha')}
          style={({ pressed }) => [
            {
              color: pressed ? 'blue' : 'black',
            },
            styles.ess,
          ]}
        >
          <Text>
            Esqueceu sua senha?
          </Text>
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
          <Text>
            Não tem conta? Registre-se
          </Text>
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
