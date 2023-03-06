import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import { pins } from "../../../assets/data/pins";
import Pin from "../../../components/Pin";
import MasonryList from "../../../components/MasonryList";
export default function HomeScreen() {
  return <MasonryList pins={pins} />;
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },

  column: {
    flex: 1,
  },
});
