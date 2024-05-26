import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is <Text style={{ fontWeight: "bold" }}>Owusu Ansah Joy</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDDC5C",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    color: "white",
  },
  text: {
    fontSize: 24,
  },
});
