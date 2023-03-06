import React, { useState } from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const CreatePinScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmit = () => {};

  return (
    <View style={styles.root}>
      <Button title="Upload your pin" onPress={pickImage} />
      {image && (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "padding" : "padding"}
            style={{ width: "100%" }}
            keyboardVerticalOffset={-40}
          >
            <TextInput
              placeholder={"Title..."}
              style={styles.input}
              onChangeText={(e) => setTitle(e)}
            />
          </KeyboardAvoidingView>

          <Button title="Submit" onPress={onSubmit} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  image: { width: "100%", aspectRatio: 1, marginVertical: 10 },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    width: "100%",
    marginTop: 5,
    borderRadius: 5,
  },
});

export default CreatePinScreen;
