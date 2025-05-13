import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardPersonagem = ({ nome, universo, imagem }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.universo}>{universo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderColor: '#1a1818',
    borderWidth: 3,
    padding: 16,
    margin: 10,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 25,
    marginBottom: 12,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  universo: {
    fontSize: 16,
    color: '#666',
  },
});

export default CardPersonagem;
