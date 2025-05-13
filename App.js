import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CardPersonagem from './components/CardPersonagem';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.linha}>
        <CardPersonagem
          nome="Tiana"
          universo="Disney"
          imagem="https://m.media-amazon.com/images/M/MV5BMmRkODZlZTQtOWE3OS00ZmE1LWFiZDYtOGFjMjcwMmJjZTllXkEyXkFqcGc@._V1_.jpg"
        />
        <CardPersonagem
          nome="Naveen"
          universo="Disney"
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0cTfjpoRKFn5m8rqIxq7iRPWHGS9WFzf0w&s"
        />
      </View>

      <View style={styles.linha}>
        <CardPersonagem
          nome="Dr. Facilier"
          universo="Disney"
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1f0UQXdqUFEwvYhzeIONGiKaPSoAIybNhw&s"
        />
        <CardPersonagem
          nome="Mama Odie"
          universo="Disney"
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQUjLVflG2IqAD4eU-O8EWUq5bu5CkYr4NQ&s0"
        />
      </View>
      <View>
        <CardPersonagem
          nome="Ray"
          universo="Disney"
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ucsr6GDlZHg-Imk7i07MneM3a3vVlwa_DA&s"
        />
      </View>
    </ScrollView>
  );
}

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

