import React from "react";

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image
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
              uri: "https://i.pinimg.com/originals/87/1d/13/871d13b8dcbea5cddd3878b172f5480f.gif",
            }}
            style={{ width: 200, height: 250,  marginTop: 20 }}
          />
        </TouchableOpacity>
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

//   buttonStyle: {
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#00C853",
//     width: 350,
//     height: 100,
//     borderRadius: 5,
//   },
});
