import { NavigationProp, useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import  { Button, Text,View} from "react-native"; 

export const DetailsScreen = ()=>{
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route: RouteProp<RootStackParamList, 'review-detail'> = useRoute();

    return(
        <View>
            <Text>{route.params?.id}</Text>
            <Text>{route.params?.title}</Text>
            <Text>{route.params?.star}</Text>
            <Button title="Go Home" onPress={()=> navigation.navigate("home")}/>
        </View>
    )
}