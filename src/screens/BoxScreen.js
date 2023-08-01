import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>BoxScreen</Text>
      <Text style={styles.text}>BoxScreen</Text>
      <Text style={styles.text}>BoxScreen</Text>
    </View>
  );
};

const styles=StyleSheet.create({
    view:{
        borderWidth:2,
        borderColor:'orange'
    },
    text:{
        borderWidth:1,
        borderColor:'yellow',
        margin:8
    }
})

export default BoxScreen;
