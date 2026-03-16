import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  return (
    <View style={styles.container}>


      <View style={styles.section}>
        <Text style={styles.title}>NÓS</Text>

        <Text style={styles.count}>{contador}</Text>

        <View style={styles.buttons}>

          <View style={styles.button}>
            <Button
              color={'#157512'} title='+' onPress={() => setContador(contador + 1)} />
          </View>
          <View style={styles.button}>
            <Button color={'#8d0000'} title='-' onPress={() => contador > 0 && setContador(contador - 1)} />
          </View>
        </View>
        <View style={styles.buttonsespeciais}>
          <Button color={'#0067ac'} title='Truco' onPress={() => setContador(contador + 3)} />
          <Button color={'#000981'} title='Seis' onPress={() => setContador(contador + 6)} />
          <Button color={'#5f009e'} title='Nove' onPress={() => setContador(contador + 9)} />
          <Button color={'#580000'} title='Doze' onPress={() => setContador(contador + 12)} />
        </View>
      </View>


      <View style={styles.section}>
        <Text style={styles.title}>ELES</Text>

        <Text style={styles.count}>{contador2}</Text>

        <View style={styles.buttons}>

          <View style={styles.button}>
            <Button
              color={'#157512'} title='+' onPress={() => setContador2(contador2 + 1)} />
          </View>
          <View style={styles.button}>
            <Button color={'#8d0000'} title='-' onPress={() => contador2 > 0 && setContador2(contador2 - 1)} />
          </View>
        </View>
        <View style={styles.buttonsespeciais}>
          <Button color={'#0067ac'} title='Truco' onPress={() => setContador2(contador2 + 3)} />
          <Button color={'#000981'} title='Seis' onPress={() => setContador2(contador2 + 6)} />
          <Button color={'#5f009e'} title='Nove' onPress={() => setContador2(contador2 + 9)} />
          <Button color={'#580000'} title='Doze' onPress={() => setContador2(contador2 + 12)} />
        </View>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex1: 1,
    flexDirection: 'row',
    marginTop: 200,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
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
    height: 50,
  },
  buttonsespeciais: {
    flexDirection: 'collumn',
    gap: 10,
    width: 150,
  },

});
