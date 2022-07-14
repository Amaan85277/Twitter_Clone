//stylesheet for mainContainer 
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"white",
        marginHorizontal:10
    },
    tweetheaderContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    tweetHeaderContainer:{
        flexDirection:"row"
    },
    name:{
        marginRight:5,
        fontWeight:"bold"
    },
    username:{
        marginRight:5,
        color:"grey"
    },
    createdAt:{
        marginRight:5,
        color:"grey"
    },
    content:{
        lineHeight:19,
        marginTop:5
    },
    image:{
        width:"100%",
        height:300,
        resizeMode:'cover',
        borderRadius:15,
        overflow:"hidden",  // only for ios devices, somehow doesn't take the margins else
        marginVertical:10
    }
})

export default styles;