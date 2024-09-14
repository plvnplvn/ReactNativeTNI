import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "./screens/CreatePostScreen";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //headerStyle: { backgroundColor: "#1724FA" },
        //headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        // headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          //   title: "เกี่ยวกับเรา",
          headerStyle: { backgroundColor: "#1724FA" },
          headerTintColor: "white",
          //   headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />
    </HomeStack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
        // headerShown: false,
      }}
    >
      <ProductStack.Screen name="Products" component={ProductScreen} />
      <ProductStack.Screen name="Details" component={DetailScreen}/>
    </ProductStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <HeaderButtonsProvider stackType="native">
        <NavigationContainer>
          <Drawer.Navigator 
          screenOptions={{headerShown: false}}
          drawerContent={(props) => <MenuScreen{...props}/>}
          >
            <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </HeaderButtonsProvider>
    </SafeAreaProvider>
  );
};

export default App;