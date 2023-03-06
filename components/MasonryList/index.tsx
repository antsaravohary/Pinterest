import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { pins } from "../../assets/data/pins";
import Pin, { PinProps } from "../Pin";

export interface MasonryProps {
  pins: PinProps[];
}
const MasonryList = ({ pins }: MasonryProps) => {
  return (
    <ScrollView contentContainerStyle={{ width: "100%" }}>
      <View style={styles.container}>
        <View style={styles.column}>
          {pins?.map((pin, index) => {
            if (pin?.id && +pin.id % 2 === 0)
              return (
                <Pin
                  id={pin.id}
                  image={pin.image}
                  title={pin.title}
                  key={pin.id}
                />
              );
          })}
        </View>
        <View style={styles.column}>
          {pins?.map((pin, index) => {
            if (pin?.id && +pin.id % 2 != 0)
              return (
                <Pin
                  id={pin.id}
                  image={pin.image}
                  title={pin.title}
                  key={pin.id}
                />
              );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  column: {
    flex: 1,
  },
});

export default MasonryList;
