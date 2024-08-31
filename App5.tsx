import { Modal, View } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import UseEffectExample from "./components/UseEffectExample";
import FlatListExample from "./components/FlatListExample";
import FlatListCallBackend from "./components/FlatListCallBackend";
import NewsApp from "./components/NewsApp";
import AxiosgetData from "./components/AxiosgetData";
import AxiosPostData from "./components/AxiosPostData";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";
import ModalExample from "./components/ModalExample";
import WeatherApp from "./components/WeatherApp";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
const App = ():React.JSX.Element => {
  return (
    <View>
      {/*<ProfileScreen>*/}
      {/*<UseEffectExample>*/}
      {/*<FlatListExample>*/}
      {/*<FlatListCallBackend>*/}
      {/*<NewsApp/>*/}
      {/*<WeatherBangkok/>*/}
      {/*<ModalExample/>*/}
      {/*<WeatherApp/>*/}
      <AboutScreen/>
    </View>
  );
};

export default App;