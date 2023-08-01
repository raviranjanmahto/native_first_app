import { View, Text,StyleSheet, FlatList } from "react-native";
import React from "react";

const ListScreen = () => {
    const friends=[
        {
        name:'Friend 1',
        age:'20'
        },
        {
        name:'Friend 2',
        age:'26'
        },
        {
        name:'Friend 3',
        age:'25'
        },
        {
        name:'Friend 4',
        age:'24'
        },
        
        {
        name:'Friend 6',
        age:'23'
        },
        {
        name:'Friend 7',
        age:'22'
        },
        {
        name:'Friend 8',
        age:'21'
        },
]
  return (
    <FlatList data={friends} renderItem={({item})=><Text style={styles.text}>{item.name} - Age {item.age}</Text>} keyExtractor={(friend)=>friend.name} showsVerticalScrollIndicator={false}/>
      
  );
};

const styles=StyleSheet.create({
    text:{
        marginVertical:70
    }

})

export default ListScreen;
