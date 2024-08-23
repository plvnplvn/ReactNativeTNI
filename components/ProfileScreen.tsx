import { Button, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { styles,stylesLogin,stylesPractice }  from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/pfp.jpg");
  const secondProfileImage = require("../assets/smile.jpg");
  const [name, setName] = useState("Patsakorn Chinplikanon");
  const [image, setImage] = useState(profileImage);
  const handleChangeName = () => {
    setName(name == "Patsakorn Chinplikanon" ? "Smile" : "Patsakorn Chinplikanon");
  };
  const handleChangeImage = () => {
    setImage(image == profileImage ? secondProfileImage : profileImage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={image} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="CHANGE NAME" onPress={handleChangeName}></Button>
          <Text/>
          <Button title="CHANGE IMAGE" onPress={handleChangeImage}></Button>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
