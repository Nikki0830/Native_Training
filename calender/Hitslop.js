import React from "react";

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

export default function HitSlop() {
  return (
    <SafeAreaView style={styleSheet.MainContainer}>
      <View style={styleSheet.buttonStyle}>
        <TouchableOpacity
          onPress={() => alert("Hello Nikki! How are you")}
          hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
        >
          {/* <Text style={{ fontSize: 26, textAlign: "center", color: "white" }}>
            {" "}
            Button With hitSlop{" "}
          </Text> */}
          <Image
            source={{
              uri: "https://www.noody.de/wp-content/uploads/2020/07/hooray.gif",
            }}
            style={{ width: 300, height: 450, marginTop: 20 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styleSheet.eye}>
        <TouchableOpacity
          onPress={() => alert("Hey Nikki Please don't touch my nose")}
          hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
        ></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  eye: {
    position: "absolute",
    // borderWidth: 4,
    height: 50,
    width: 50,
    borderColor: "red",
    top: 350,
  },

  //   buttonStyle: {
  //     alignItems: "center",
  //     justifyContent: "center",
  //     backgroundColor: "#00C853",
  //     width: 350,
  //     height: 100,
  //     borderRadius: 5,
  //   },
});
