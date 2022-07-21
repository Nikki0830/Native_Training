import React from "react";
import { View, StyleSheet } from "react-native";

const FontStyle = () => {
    return (
      <View style={styles.container}>
        <View style={styles.top} />
        <View style={styles.middle} />
        <View style={styles.bottom} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
    // backgroundColor: "#fff",
    padding: 30,
    margin: 10,
  },
  top: {
    flex: 0.3,
    // backgroundColor: "yellow",
    borderWidth: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom:2,
    borderColor:"teal"
  },
  middle: {
    flex: 0.3,
    // backgroundColor: "yellow",
    borderWidth: 10,
    marginBottom:2,
    borderColor:"yellow"
  },
  bottom: {
    flex: 0.3,
    // backgroundColor: "yellow",
    borderWidth: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor:"teal"
  },
});

export default FontStyle