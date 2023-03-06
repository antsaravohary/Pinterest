import { Image, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import MasonryList from "../../components/MasonryList";
import { pins } from "../../assets/data/pins";
import { Entypo, Feather } from "@expo/vector-icons";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.icons}>
          <Feather
            name={"share"}
            size={24}
            color={"black"}
            style={styles.icon}
          />
          <Entypo
            name={"dots-three-horizontal"}
            size={24}
            color={"black"}
            style={styles.icon}
          />
        </View>
        <Image
          source={require("../../assets/images/antsa.jpg")}
          style={styles.image}
        />
        <Text style={styles.title}>Antsa Ravohary</Text>
        <Text style={styles.subTitle}>123 Followers | 500 Followings</Text>
      </View>

      <MasonryList pins={pins} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  profile: {
    alignItems: "center",
    marginBottom: 10,
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
  subTitle: {
    color: "#181818",
    fontWeight: "600",
  },
});
