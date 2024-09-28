// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

import React, { useState } from "react";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import { useAppSelector, useAppDispatch } from "./redux-toolkit/hook";
import {
  selectAuthState,
  setIsLoading,
  setIsLogin,
  setProfile,
} from "./auth/auth-slice";
import { getProfile } from "./services/auth-service";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Toast from "react-native-toast-message";
import { ActivityIndicator, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraScreen from "./screens/CameraScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const CameraStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function TabContainer() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";
          if (route.name === "HomeStack") {
            iconName = focused
              ? "home"
              : "home-outline";
          } else if (route.name === "CameraStack") {
            iconName = focused ? "camera" : "camera-outline";
          }
          // You can return any component that you like here!​
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown:false,
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{ tabBarLabel: "หน้าหลัก" }}
      />
      <Tab.Screen
        name="CameraStack"
        component={CameraStackScreen}
        options={{ tabBarLabel: "กล้อง" }}
      />
    </Tab.Navigator>
  );
}

function CameraStackScreen() {
  return (
    <CameraStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <CameraStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ title: "camera" }}
      />
    </CameraStack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "เกี่ยวกับเรา",
          headerStyle: { backgroundColor: "#20b2aa" },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      />
    </HomeStack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen name="Products" component={ProductScreen} />
      <ProductStack.Screen name="Details" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  //ใช้ useAppSelector เพื่อดึง State จาก Store
  const { isLogin, isLoading } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const checkLogin = async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await getProfile();
      if (response?.data.data.user) {
        dispatch(setProfile(response.data.data.user));
        dispatch(setIsLogin(true));
      } else {
        dispatch(setIsLogin(false));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      checkLogin();
    }, [])
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <>
      <HeaderButtonsProvider stackType="native">
        {isLogin ? (
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="Home" component={TabContainer} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        ) : (
          <LoginStackScreen />
        )}
      </HeaderButtonsProvider>
      <Toast />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;
