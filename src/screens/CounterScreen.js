import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const CounterScreen = () => {
    const [count,setCount]=useState(0)
  return (
    <View>
      <Text style={styles.text}>CounterScreen</Text>
      <Button  title="Increase" value={count} onPress={()=>setCount((i)=>i+1)}/>
      <Button title="Decrease" value={count} onPress={()=>setCount((i)=>i-1)}/>
      <Text style={styles.text}>Current count: {count}</Text>
    </View>
  );
};
const styles=StyleSheet.create({
    text:{
        textAlign:'center',marginBottom:20
    }
})

export default CounterScreen;
