import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";

type ContentProp = {
  Username: string;
  Message: string;
};
const Content = ({ Username, Message }: ContentProp): React.JSX.Element => {
  const onClickMe = () => {
    Alert.alert("Hello", Username);
  };
  return (
    <View style={styles.content}>
      <Text>{Message}</Text>
      <Button title="Clickme" onPress={onClickMe}></Button>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontSize:18,
    marginBottom:20,
  },
});
