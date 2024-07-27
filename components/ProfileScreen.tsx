import { Button, Text, View, Image } from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/pfp.jpg");
  const secondProfileImage = require("../assets/smile.jpg");
  const [name, setName] = useState("Patsakorn Chinplikanon");
  const [image, setImage] = useState(profileImage);
  const handleChangeName = () => {
    setName("Smile");
  };
  const handleChangeImage = () => {
    setImage(require("../assets/smile.jpg"));
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
