import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        padding:20,
        backgroundColor:"#f5f5f5",

    },
    profileImage:{
        borderRadius:50,
        width:100,
        height:100,
        marginRight:20,

    },
    profileContainer:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        padding:20,
        borderRadius:10,
        backgroundColor:"white",
        elevation:5,
        marginTop:50,
        
    },
    profileName:{
        fontSize:20,
        color:"#214761",
        fontWeight:"heavy",
    }
})

export default styles