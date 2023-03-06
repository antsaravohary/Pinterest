import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { pins } from "../../../assets/data/pins";
import { Stack } from "expo-router";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import {
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";

const PinScreen = () => {
  const [size, setSize] = useState(1);

  const insets = useSafeAreaInsets();
  const navigate = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const pinId = route.params?.id;

  const pin = pins.find((pin) => pin.id === pinId);

  useEffect(() => {
    if (pin?.image) {
      Image.getSize(pin.image, (width, height) => setSize(width / height));
    }
  }, [pin]);
  const goBack = () => {
    navigate.goBack();
  };

  if (!pin) {
    return <Text>Pin not found</Text>;
  }
  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <StatusBar style="light" />
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.root}>
        <Image
          source={{ uri: pin.image }}
          style={[styles.image, { aspectRatio: size }]}
        />
        <Text style={styles.title}>{pin.title}</Text>
      </View>
      <Pressable
        onPress={goBack}
        style={[styles.backBtn, { top: insets.top + 20 }]}
      >
        <Ionicons name={"chevron-back"} size={35} color={"white"} />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  image: {
    width: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  title: {
    margin: 10,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 35,
  },
  backBtn: {
    position: "absolute",
    left: 10,
  },
});

export default PinScreen;
