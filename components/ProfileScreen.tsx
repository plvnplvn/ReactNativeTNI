import { View, Text, Image, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { styles, stylesLogin, stylesPractice } from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/smile.jpg");
  const profileImage2 = require("../assets/pfp.jpg");

  const myName = "Patsakorn Chinplikanon";
  const notMyName = "alt Profile";
  const [name, setName] = useState("Patsakorn Chinplikanon");
  const [image, setImage] = useState(profileImage);

  const handleChangeName = () => {
    setName(name == myName ? notMyName : myName);
  };

  const handleChangeImage = () => {
    setImage(image == profileImage ? profileImage2 : profileImage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={image} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="change name" onPress={handleChangeName} />
          <Text />
          <Button title="change image" onPress={handleChangeImage} />
        </View>
      </View>
      
    </View>
    
  );
};

export default ProfileScreen;
