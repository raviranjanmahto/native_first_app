import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
  return (
    <View>
      <TextInput 
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false} 
      autoFocus 
      value={name}
      onChangeText={(e)=>setName(e)}
      placeholder="Enter name"
      />
      <TextInput 
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false} 
      value={password}
      onChangeText={(e)=>setPassword(e)}
      placeholder="Enter password"
      password
      />
      <Text>Your name is : {name}</Text>
    </View>
  );
};

const styles=StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1,
        padding:2
    }
})

export default TextScreen;
