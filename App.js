import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MARCADOR</Text>
      
      <Text style={styles.count}>{contador}</Text>

    <View style={styles.buttons}>

    <View style={styles.button}>
      <Button 
      color={'#157512'} title='+' onPress={() => setContador(contador + 1)} />
          </View>
    <View style={styles.button}>
      <Button color={'#ff0000'} title='-' onPress={() => contador > 0 && setContador(contador - 1)} />
    </View>
    </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold', 
    marginBottom: 20,
  },
  count: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 100,
  },
  button: {
    width: 50,
    height: 100,
  }

});
