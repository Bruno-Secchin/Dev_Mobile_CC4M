import React from 'react';
import { Text, Image, SafeAreaView, StyleSheet, TextInput, Button, View, Pressable } from 'react-native';

import Icon from '../images/icon.png';
import Paisagem from '../images/paisagem.jpg';
import dados from '../data/dados';
import Card from '../components/Card';

export default function Principal({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bar}>
        <Image 
          style={styles.profile_icon}
          source={Icon} />
      </View>
      <View>
        dados.map(dado => <Card dado={dado} />)
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    paddingTop: 50,
  },
  bar: {
    paddingRight:20,
    width: '100%',
    height: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'end',
    justifyContent: 'center',
    backgroundColor: 'gray',
  }, 
  profile_icon: {
    width: 40,
    height: 40,
    backgroundColor: '#ecf0f1',
    borderRadius: 50,
  },
  conteudo:{
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  title:{
    marginBottom: 15,
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0.5 },
    textShadowRadius: 6,
  },
  paragraph: {
    marginBottom: 15 ,
    fontSize: 18,
    textAlign: 'justify',
  }, 
  img: {
    width: 250,
    height: 170,
    marginTop: 15,
    borderWidth: 1,
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
  },

});
