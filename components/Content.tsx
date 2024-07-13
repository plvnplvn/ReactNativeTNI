import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from 'react'

type ContentProp = {
  Username:string;
  Message:string;

}
const Content = ({Username,Message}:ContentProp):React.JSX.Element => {
  const onClickMe = () => {
    Alert.alert("Hello", Username);

  };
  return (
    <View>
      <Text>{Message}</Text>
      <Button title="Clickme" onPress={onClickMe}></Button>
    </View>
  )
}

export default Content

const styles = StyleSheet.create({})