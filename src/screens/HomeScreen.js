import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>

    <View>
      <Text>HomeScreen</Text>
      <Button title="Go to List" onPress={()=>navigation.navigate('ListScreen')}/>
      <Button title="Go to Image screen" onPress={()=>navigation.navigate('ImageScreen')}/>
      <Button title="Go to Counter screen" onPress={()=>navigation.navigate('CounterScreen')}/>
      <Button title="Go to Color screen" onPress={()=>navigation.navigate('ColorScreen')}/>
      <Button title="Go to One Color screen" onPress={()=>navigation.navigate('OneColor')}/>
      <Button title="Go to Text screen" onPress={()=>navigation.navigate('TextScreen')}/>
      <Button title="Go to Box screen" onPress={()=>navigation.navigate('BoxScreen')}/>
      <TouchableOpacity onPress={()=>navigation.navigate('ListScreen')}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
