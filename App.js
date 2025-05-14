import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CardPersonagem from './components/CardPersonagem';
import Personagens from './data/personagens.json';

export default function App() {
  return (
    <View style= {styles.container}>
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.row}>
      {Personagens.map((Personagens)=> (
       <CardPersonagem
       key={Personagens.id}
       nome={Personagens.Nome}
       universo={Personagens.Universo}
       imagem={Personagens.Imagem}
       />
      )
      
      )
}
    </View>
    </ScrollView>
    </View>
  )

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 20,
    width: '100%',
  },
});
}
