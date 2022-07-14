import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors.light.tint,
        position:"absolute",
        bottom:30,
        right:30,
        width:60,
        height:60,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",

        /* shadow effect not workin or i am not able to use them correctly, tweek it later */
        
        // shadowColor:"grey",
        // shadowRadius:100,
        // shadowOffset:{
        //     width:100,
        //     height:100
        // }
    }
});

export default styles;