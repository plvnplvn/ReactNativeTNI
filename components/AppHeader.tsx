import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/styles";

type AppHeaderProps = {
  fullName: string;
  message: string;
};

const AppHeader = ({
  fullName,
  message,
}: AppHeaderProps): React.JSX.Element => {
  return (
    <View style={stylesPractice.header}>
      <Text style={stylesPractice.headerText}>
        Input your fullname: {fullName}
      </Text>
      <Text style={stylesPractice.subtitleText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#AEC6CF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default AppHeader;
