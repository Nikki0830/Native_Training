import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import AlertExample from "./AlertEx/AlertExample";
import FontStyle from "./Fontstyle/Fontstyle";
import Helloworld from "./Helloworld/Helloworld";
import TextExample from "./TextExample/TextExample";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.maindiv}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4qtGyoSxoOFVMB_8VJQWD1hEqTpNAUcb5A&usqp=CAU",
          }}
          style={{ width: 70, height: 70,marginLeft:120,marginTop:20,}}
        />
        <Text
          style={{
            color: "navy",
            fontSize: 20,
            marginTop: 25,
            textAlign: "center",
          }}
        >
          Name : Nikita Patel
        </Text>
        <Text
          style={{
            color: "navy",
            fontSize: 20,
            marginTop: 12,
            textAlign: "center",
          }}
        >
          Address : xyz,Bangalore
        </Text>
        <Text
          style={{
            color: "navy",
            fontSize: 20,
            marginTop: 12,
            textAlign: "center",
          }}
        >
          Phone no : +918907656767
        </Text>
        <Text
          style={{
            color: "navy",
            fontSize: 20,
            marginTop: 12,
            textAlign: "center",
          }}
        >
          Email : nikita@gmail.com
        </Text>
        <StatusBar style="auto" />
      </View>
      <Helloworld/>
      <FontStyle/> 
      <AlertExample/>
      <TextExample/>
    </View>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop:30

    // marginTop:200
  },
  maindiv: {
    height: 280,
    width: 290,
    backgroundColor: "pink",
  },
});
