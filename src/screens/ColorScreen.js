import { View, StyleSheet, Button, FlatList } from "react-native";
import React, { useState } from "react";

const ColorScreen = () => {
    const [color,setColor]=useState([])
  return (
    <View>
      <Button title="Add a Color" onPress={()=>setColor([...color,RandomRgb()])} />
      <FlatList keyExtractor={(item)=>item} data={color} renderItem={({item})=><View style={{height:100,width:100,backgroundColor:item}} ></View>
}/>
    
    </View>
  );
};

const RandomRgb=()=>{
    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)

    return `rgb(${red}, ${green}, ${blue})`
}

export default ColorScreen;
