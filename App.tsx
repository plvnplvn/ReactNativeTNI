import { StatusBar } from "expo-status-bar";
import { View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import { styles } from "./styles/styles";

export default function App(): React.JSX.Element {
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("Message from App.tsx");
  const [footerMessage, setFootermessage] = useState(
    "Thai-Nichi Institute of Technology"
  );

  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  useEffect(() => {
    console.log(`Fullname has changed to: ${fullname}`);
  }, [fullname]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppHeader fullName={fullname} message={message} />
      <Content message={message} fullName={fullname} />
      <AppFooter footerMessage={footerMessage} />
      <TextInput
        style={styles.input}
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={setFullname}
      />
    </View>
  );
}
