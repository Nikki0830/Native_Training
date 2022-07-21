import React, { Component } from "react";
import { View, Alert, StyleSheet, Text } from "react-native";

class AlertExample extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ height: 40, width: 100, backgroundColor: "#E75480", borderRadius:10 }}

          onStartShouldSetResponder={
              () => Alert.alert('onStartShouldSetResponder','Clicked on View')
          }
        >
          <Text
            onPress={() => Alert.alert("OnPress", "Clicked on View")}
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
              fontStyle: "italic",
              fontWeight: "bold",
             
            }}
          >
            hello
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "black",
  },
});

export default AlertExample;
