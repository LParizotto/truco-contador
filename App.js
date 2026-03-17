import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  const [win, setWin] = useState(0);
  const [win2, setWin2] = useState(0);

  function contadorNos(valor) {
    const novo = contador + valor;

    if (novo >= 12) {
      setContador(0);
      setContador2(0);
      setWin((prev) => prev + 1);
    } else {
      setContador(novo);
    }
  }

  function contadorEles(valor) {
    const novo = contador2 + valor;

    if (novo >= 12) {
      setContador(0);
      setContador2(0);
      setWin2((prev) => prev + 1);
    } else {
      setContador2(novo);
    }
  }

  function restart() {
    setContador(0);
    setContador2(0);
  }

  function newGame() {
    setContador(0);
    setContador2(0);
    setWin(0);
    setWin2(0);
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://toppng.com/uploads/preview/logo-unipar5-horizontal-sem-fundo-logotipo-unipar-11563207391ynw4uhpenk.png",
        }}
        style={{ width: 150, height: 100 }}
      />
      <View style={styles.counters}>
        <View style={styles.section}>
          <Text style={styles.title}>NÓS</Text>

          <Text style={styles.count}>{contador}</Text>

          <Text>Ganhou: {win}</Text>

          <View style={styles.buttons}>
            <View style={styles.button}>
              <Button
                color={"#157512"}
                title="+"
                onPress={() => contadorNos(1)}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={"#8d0000"}
                title="-"
                onPress={() => contador > 0 && setContador(contador - 1)}
              />
            </View>
          </View>
          <View style={styles.buttonsespeciais}>
            <Button
              color={"#0067ac"}
              title="Truco"
              onPress={() => contadorNos(3)}
            />
            <Button
              color={"#000981"}
              title="Seis"
              onPress={() => contadorNos(6)}
            />
            <Button
              color={"#5f009e"}
              title="Nove"
              onPress={() => contadorNos(9)}
            />
            <Button
              color={"#580000"}
              title="Doze"
              onPress={() => contadorNos(12)}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>ELES</Text>

          <Text style={styles.count}>{contador2}</Text>

          <Text>Ganhou: {win2}</Text>

          <View style={styles.buttons}>
            <View style={styles.button}>
              <Button
                color={"#157512"}
                title="+"
                onPress={() => contadorEles(1)}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={"#8d0000"}
                title="-"
                onPress={() => contador2 > 0 && setContador2(contador2 - 1)}
              />
            </View>
          </View>
          <View style={styles.buttonsespeciais}>
            <Button
              color={"#0067ac"}
              title="Truco"
              onPress={() => contadorEles(3)}
            />
            <Button
              color={"#000981"}
              title="Seis"
              onPress={() => contadorEles(6)}
            />
            <Button
              color={"#5f009e"}
              title="Nove"
              onPress={() => contadorEles(9)}
            />
            <Button
              color={"#580000"}
              title="Doze"
              onPress={() => contadorEles(12)}
            />
          </View>
        </View>
      </View>

      <View style={styles.options}>
        <Button color="#1a0000" title="REINICIAR" onPress={restart} />
        <Button color="#1a0000" title="NOVO JOGO" onPress={newGame} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  section: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  count: {
    fontSize: 60,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  button: {
    width: 50,
    height: 50,
  },
  buttonsespeciais: {
    flexDirection: "column",
    gap: 10,
    width: 150,
    fontSize: 40,
  },
  counters: {
    flex: 1,
    flexDirection: "row",
  },
  options: {
    width: 200,
    height: 150,
    gap: 10,
    marginBottom: 100,
  },
});
