import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name={"pin"}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name={"home"} size={30} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name={"CreatePinScreen"}
        options={{
          title: "Create pin",
          tabBarIcon: ({ color }) => (
            <FontAwesome name={"plus"} size={30} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name={"user"} size={30} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
