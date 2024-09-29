import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './pages/cadastro';
import EsqSenha from './pages/esqSenha';
import Login from './pages/login';
import Principal from './pages/principal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Entrar" component={Login} />
        <Stack.Screen name="Cadastrar-se" component={Cadastro} />
        <Stack.Screen name="Redefinir senha" component={EsqSenha} />
        <Stack.Screen name="Principal" component={Principal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
