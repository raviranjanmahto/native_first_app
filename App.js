import { StyleSheet, Text, View } from "react-native";
import HomeScreen from './src/screens/HomeScreen'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import OneColor from "./src/screens/OneColor";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} options={{title:''}}/>
        <Stack.Screen name="CounterScreen" component={CounterScreen} options={{title:''}}/>
        <Stack.Screen name="ColorScreen" component={ColorScreen} options={{title:'This is a color screen'}}/>
        <Stack.Screen name="OneColor" component={OneColor} options={{title:'This is One color screen'}}/>
        <Stack.Screen name="TextScreen" component={TextScreen} options={{title:'Text screen'}}/>
        <Stack.Screen name="BoxScreen" component={BoxScreen} options={{title:'Box screen'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
