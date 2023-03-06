import { Image, ScrollView, StyleSheet, View } from "react-native";

import Pin from "../../components/Pin";
export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Pin
          title={"Title"}
          image={
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg"
          }
        />
        <Pin
          title={"Title 2"}
          image={
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/1.jpeg"
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
});
