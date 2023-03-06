import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  ParamListBase,
  StackNavigationState,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { pins } from "../../assets/data/pins";

export interface PinProps {
  id: string;
  image: string;
  title: string;
}
const Pin = ({ image, title, id }: PinProps) => {
  const [ratio, setRatio] = useState(1);
  const onLike = () => {};

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const onPress = () => {
    navigation.navigate("PinScreen", { id });
  };

  useEffect(() => {
    Image.getSize(image, (width, height) => setRatio(width / height));
  }, [image]);
  return (
    <Pressable onPress={onPress}>
      <View style={styles.pin}>
        <View>
          <Image
            style={[styles.image, { aspectRatio: ratio }]}
            source={{
              uri: image,
            }}
          />
          <Pressable onPress={onLike} style={styles.heartBtn}>
            <AntDesign name={"hearto"} size={15} />
          </Pressable>
        </View>

        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: "100%",
    padding: 4,
  },
  image: {
    width: "100%",
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    margin: 5,
    color: "#181818",
  },
  heartBtn: {
    backgroundColor: "#D3CFD4",
    position: "absolute",
    bottom: 10,
    right: 10,
    borderRadius: 50,
    padding: 5,
  },
});

export default Pin;
