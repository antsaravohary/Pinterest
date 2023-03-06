import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import pins from "../../assets/data/pins";
import Pin from "../../components/Pin";
export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.column}>
          {pins.map((pin, index) => {
            if (+pin.id % 2 === 0)
              return <Pin image={pin.image} title={pin.title} key={index} />;
          })}
        </View>
        <View style={styles.column}>
          {pins.map((pin, index) => {
            if (+pin.id % 2 != 0)
              return <Pin image={pin.image} title={pin.title} key={index} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
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
