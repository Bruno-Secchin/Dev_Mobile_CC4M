import React from 'react'
import { Text, SafeAreaView, StyleSheet, TextInput, Button, View, Pressable } from 'react-native';

export default function Cadastro({navigation}) {
  const [name, onChangeName] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [cpassword, onChangeCpassword] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Cadastrar-se:
      </Text>
      <Text style={styles.paragraph}>
        Nome de usuário: 
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Fulano_de_Tal"
        placeholderTextColor="gray"
      />
      <Text style={styles.paragraph}>
        Telefone: 
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="(99) 99999-9999"
        keyboardType="numeric"
        placeholderTextColor="gray"
      />
      <Text style={styles.paragraph}>
        E-mail: 
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="example@email.com"
        placeholderTextColor="gray"
      />
      <Text style={styles.paragraph}>
        Senha: 
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="12345@Ab"
        placeholderTextColor="gray"
        secureTextEntry={true}
      />
      <Text style={styles.paragraph}>
        Confirmar senha: 
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCpassword}
        value={cpassword}
        placeholder="12345@Ab"
        placeholderTextColor="gray"
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            color='green'
            title="registrar"
            onPress={() => navigation.navigate('Entrar')}
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
          Já tem uma conta? Faça Login
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
    marginBottom: 0,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 20,
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
