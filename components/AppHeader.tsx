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

export default AppHeader;
