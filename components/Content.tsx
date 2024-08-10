import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/styles";

type ContentProp = {
  fullName: string;
  message: string;
};
const Content = ({ fullName, message }: ContentProp) => {
  const [displayFullname, setDisplayFullname] = React.useState("");

  const handleButtonClick = () =>{
    setDisplayFullname(fullName);
    Alert.alert("Hello",`Input your fullname : ${fullName}`);
  };

  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      <Text style={stylesPractice.text}>{displayFullname}</Text>
      <Button title="CLICK ME" onPress={handleButtonClick} />
    </View>
  );
};

export default Content;