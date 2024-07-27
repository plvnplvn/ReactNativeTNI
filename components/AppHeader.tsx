import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type AppHeaderProps = {
    Username:string;
    Message:string;
}

const AppHeader = ({Username,Message}:AppHeaderProps): React.JSX.Element =>{
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{Username}</Text>
      <Text style={styles.subtitleText}>{Message}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    header: {
        backgroundColor: '#AEC6CF',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
    },
    subtitleText:{
        fontSize: 16,
        color: '#fff',
    },
});

export default AppHeader;