import  { Button, Text,View} from "react-native";
export const HomeScreen = ()=>{
    return(
        <View>
            <Text>Home Screen</Text>
            <Button title="Detail" onPress={()=>alert('con cac')}/>
        </View>
    )
}