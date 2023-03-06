import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export interface PinProps {
  id?: string;
  image: string;
  title: string;
}
const Pin = ({ image, title }: PinProps) => {
  const [ratio, setRatio] = useState(1);
  const onLike = () => {};
  Image.getSize(image, (width, height) => setRatio(width / height));
  useEffect(() => {
    Image.getSize(image, (width, height) => setRatio(width / height));
  }, [image]);
  return (
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

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: "100%",
  },
  image: {
    width: "100%",
    borderRadius: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
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