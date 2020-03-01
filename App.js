import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TextInput placeholder="A goal" style={styles.input} />
        <Button title="+" style={styles.button} />
      </View>
      <View>
        <Text>Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "90%"
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
    // width: "10%"
  },
  button: { paddingTop: 10 }
});
