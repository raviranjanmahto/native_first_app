import { View, Text, StyleSheet} from "react-native";
import React from "react";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title='Forest' img='https://vikreta.in/assets/img/home.svg'/>
      <ImageDetail title='Beach' img='https://vikreta.in/assets/img/home.svg'/>
      <ImageDetail title='Mountain' img='https://vikreta.in/assets/img/home.svg'/>
    </View>
  );
};

const styles=StyleSheet.create({

})

export default ImageScreen;
