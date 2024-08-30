import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    FlatList,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import axios from "axios";
  
  interface WeatherState {
    data: any;
    loading: boolean;
    error: string | null;
    currentDate: Date | null;
  }
  
  const formatDate = (date: Date | null): string => {
    if (!date) return ""; //return an empty string if date is null
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("th-TH", options);
  };
  
  const WeatherBangkok = () => {
    const [state, setState] = useState<WeatherState>({
      data: null,
      loading: true,
      error: null,
      currentDate: null,
    });
  
    const fetchWeatherData = async () => {
      const APIKEY = "d78aaab2d84844433d115114fb3bb62e";
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=${APIKEY}&units=metric&lang=th`;
  
      try {
        const response = await axios.get<WeatherState[]>(URL);
        setState({
          data: response.data,
          loading: false,
          error: null,
          currentDate: new Date(),
        });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: "Failed to fetch weather data",
          currentDate: null,
        });
      }
    };
  
    useEffect(() => {
      fetchWeatherData();
    }, []);
  
    if (state.loading) {
      return (
        <View style={styles.centeredContainer}>
          <ActivityIndicator size="large" color="#ABCDEF" />
        </View>
      );
    }
  
    if (state.error) {
      return (
        <View style={styles.centeredContainer}>
          <Text style={styles.errorText}>{state.error}</Text>
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.dateText}>{formatDate(state.currentDate)}</Text>
        <Text style={styles.cityName}>{state.data.name}</Text>
        <Text style={styles.temp}>{state.data.main.temp} C</Text>
        <Text style={styles.weatherMain}>{state.data.weather[0].main}</Text>
        <Text style={styles.weatherDescription}>
          {state.data.weather[0].description}
        </Text>
        <FlatList
          style={styles.details}
          data={[
            { key: "รู้สึกเหมือน: ", value: `${state.data.main.feels_like} °C` },
            { key: "อุณหภูมิต่ำสุด: ", value: `${state.data.main.temp_min} °C` },
            { key: "อุณหภูมิสูงสุด: ", value: `${state.data.main.temp_max} °C` },
            { key: "ความชื่น: ", value: `${state.data.main.humidity} %` },
            { key: "ความกดอากาศ: ", value: `${state.data.main.pressure} hPa` },
          ]}
          renderItem={({ item }) => (
            <View style={styles.detailContainer}>
              <Text style={styles.detailKey}>{item.key}</Text>
              <Text style={styles.detailValue}>{item.value}</Text>
            </View>
          )}
        />
      </View>
    );
  };
  
  export default WeatherBangkok;
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      backgroundColor: "#FFF6EA",
    },
    centeredContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    errorText: {
      fontSize: 18,
      color: "red",
    },
    dateText: {
      fontSize: 18,
      color: "#000",
      marginBottom: 16,
      marginTop: 40,
    },
    cityName: {
      fontSize: 36,
      fontWeight: "bold",
      marginBottom: 8,
      color: "#333",
    },
    temp: {
      fontSize: 60,
      fontWeight: "bold",
      marginBottom: 8,
      color: "#295F98",
    },
    weatherMain: {
      fontSize: 35,
      fontWeight: "bold",
      marginBottom: 4,
      color: "#333",
    },
    weatherDescription: {
      fontSize: 20,
      marginTop:10,
      marginBottom: 5,
      color: "#424242",
    },
    details: {
      marginTop: 16,
      paddingHorizontal: 16,
      backgroundColor: "#fff",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    detailContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 4,
    },
    detailKey: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
    },
    detailValue: {
      fontSize: 18,
      color: "#333",
    },
  });