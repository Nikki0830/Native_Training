import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Flatlist from "./.expo/Flatten/Flatlist";
import HitSlop from "./Hitslop/Hitslop";

export default function App() {
  const [color, setColor] = useState(true);

  const onPress = () => {
    Alert.alert(
      "hi",
      "selected",
      [{ onPress: () => setColor(true) }]
      // { cancelable: false }
    );
    setColor(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.calender_main}>
        <View style={styles.calender_view}>
          <Text style={{ fontWeight: "bold", fontSize: 19 }}>May, 2022</Text>
          <View style={styles.arrow}>
            <Icon
              name="angle-left"
              style={{ color: "navy", fontSize: 30, fontWeight: "bold" }}
            />
            <Icon
              name="angle-right"
              style={{
                color: "navy",
                fontSize: 30,
                paddingLeft: 20,
                fontWeight: "bold",
              }}
            />
          </View>
        </View>

        <View style={styles.day_view}>
          <Text style={{ fontWeight: "bold" }}>Su</Text>
          <Text style={{ fontWeight: "bold" }}>Mo</Text>
          <Text style={{ fontWeight: "bold" }}>Tu</Text>
          <Text style={{ fontWeight: "bold" }}>We</Text>
          <Text style={{ fontWeight: "bold" }}>Th</Text>
          <Text style={{ fontWeight: "bold" }}>Fr</Text>
          <Text style={{ fontWeight: "bold" }}>Sa</Text>
        </View>
        <View style={styles.all_date}>
          <View style={styles.date_one}>
            <TouchableHighlight
              onPress={onPress}
              // activeOpacity={0.6}
              underlayColor="blue"
              // color2="white"
              style={{height:20,width:15}}
            >
              {color ? (
                <Text
                  style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}
                >
                  1
                </Text>
              ) : (
                <Text
                  style={{ fontWeight: "bold", fontSize: 19, color: "white" }}
                >
                  1
                </Text>
              )}
            </TouchableHighlight>

            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              2
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              3
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              4
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              5
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              6
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              7
            </Text>
          </View>

          <View style={styles.date_two}>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              8
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              9
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              10
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              11
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              12
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              13
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              14
            </Text>
          </View>

          <View style={styles.date_three}>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              15
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              16
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              17
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              18
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              19
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              20
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              21
            </Text>
          </View>

          <View style={styles.date_four}>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              22
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              23
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              24
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              25
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              26
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              20
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "navy" }}>
              27
            </Text>
          </View>

          <View style={styles.date_five}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 19,
                color: "navy",
                paddingLeft: 30,
              }}
            >
              28
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 19,
                color: "navy",
                paddingLeft: 30,
              }}
            >
              29
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 19,
                color: "navy",
                paddingLeft: 30,
              }}
            >
              30
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 19,
                color: "navy",
                paddingLeft: 30,
              }}
            >
              31
            </Text>
          </View>
        </View>
      </View>

      {/* <StatusBar style="auto" /> */}
      {/* <Flatlist/> */}
      <HitSlop/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
  calender_main: {
    height: 375,
    width: 365,
    backgroundColor: "pink",
    borderRadius: 10,
    elevation: 50,
    shadowColor: "black",
    marginTop:50
  },
  calender_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  day_view: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  date_one: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  date_two: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  date_three: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  date_four: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  date_five: {
    flexDirection: "row",
    // justifyContent: "space-around",
    marginTop: 20,
  },
  arrow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "white",
    padding: 5,
  },
});
