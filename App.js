import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import CardPersonagem from './components/CardPersonagem';
import Personagens from './data/personagens.json';

export default function App() {
  return (

    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.linha}>
          {Personagens.map((personagem) => (
            <CardPersonagem
              key={personagem.id}
              nome={personagem.Nome}
              universo={personagem.Universo}
              imagem={personagem.Imagem} />
          ))}
        </View>
      </ScrollView>
  );
}


const styles = StyleSheet.create({
  titulo:{
    alignItems: 'center'
  },
  scrollContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  linha: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
