import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Helloworld() {
  return (
    <View style={styles.container}>
      <View style={styles.hellotext}>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            textAlign: "center",
            fontStyle:"italic",
          }}
        >
          Hello World
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hellotext: {
    backgroundColor: "teal",
    height: 40,
    width: 200,
    borderRadius: 10,
    marginTop: 10,
  },
});
