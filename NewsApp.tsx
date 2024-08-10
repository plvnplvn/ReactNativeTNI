import { StyleSheet, Text, View ,FlatList, TouchableOpacity } from 'react-native'
import React ,{useEffect, useState} from 'react'
interface User{
    title:string ;
    description: string;
    publishedAt:string;
    url: string;
}
const NewsApp =():React.JSX.Element =>{
    const [news,setNews] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);

    useEffect(()=>{
        const API_KEY = 'e937f220e8394a51882fc49726474c8c';//ใส่ API Key ของคุณที่นี่
        const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
        
    }
    )
const renderItem = ({item} : {item: NewsItem}) =>(
    <TouchableOpacity style={styles.card}>
        <Text style={styles.headline}>{item.title}</Text>
        <Text style={styles.date}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
        <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
)
  return (
     

  );
};

export default FlatListCallBackendPractice

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f0f0f0',
        padding: 16,
    },
    loadingContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    errorText:{
        fontSize:18,
        color:'red',
    },
    card:{
        backgroundColor:'#fff',
        padding:16,
        marginVertical:8,
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:8,
        elevation:3,
    },
    headline:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:8,
    },
    date:{
        fontSize:14,
        color:'#888',
        marginBottom:8,
    },
    description:{
        fontSize:16,
        color:'#333',
    },
});