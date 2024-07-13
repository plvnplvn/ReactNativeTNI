import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type AppHeaderProps = {
    Username:string;
    Message:string;
}

const AppHeader = ({Username,Message}:AppHeaderProps): React.JSX.Element =>{
  return (
    <View>
      
    </View>
  )
}

export default AppHeader

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