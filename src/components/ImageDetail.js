import { View, Text, Image } from "react-native";
import React from "react";

const ImageDetail = ({title,img}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image source={{uri:img}}/>
    </View>
  );
};

export default ImageDetail;
