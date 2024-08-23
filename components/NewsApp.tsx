import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  
  interface NewsItem {
    url: string;
    title: string;
    publishedAt: string;
  }
  
  const NewsApp = (): React.JSX.Element => {
    // State for storing data and loading status
    const [data, setData] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const APIKEY = "e937f220e8394a51882fc49726474c8c";
    const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`;
  
    //กำหนด useEffect สำหรับเรียกข้อมูลจาก API เมื่อ component mount
    useEffect(() => {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setData(data.articles);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, []);
  
    // Render item function for FlatList
    const _renderItem = ({ item }: { item: NewsItem }) => (
      <TouchableOpacity style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>
          {new Date(item.publishedAt).toLocaleDateString()}
        </Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        {loading ? (
          // Show ActivityIndicator while loading
          <ActivityIndicator size="large" color="red" />
        ) : (
          // Show FlatList once data is loaded
          <FlatList
            data={data}
            renderItem={_renderItem}
            keyExtractor={(item) => item.url}
          />
        )}
      </View>
    );
  };
  export default NewsApp;
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: "#508C9B",
      padding: 16,
      marginVertical: 8,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
    container: {
      backgroundColor: "#EEEEEE",
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#FFF",
    },
    date: {
      fontSize: 16,
      color: "#FFF",
    },
  });
  