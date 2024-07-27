import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
export default function App(): React.JSX.Element {
  
  
  return (
    <View style={styles.container}>
      
      <AppHeader Username="Patsakorn Chinplikanon" Message="Message from App.tsx"/>
      <Content Username="Patsakorn Chinplikanon" Message="Message from App.tsx"/>
      <AppFooter Message="สถาบันเทคโนโลยีไทย-ญี่ปุ่น"/>  
  
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
