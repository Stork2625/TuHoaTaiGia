import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import  { Button, FlatList, StyleSheet, Text,TouchableOpacity,View} from "react-native";
interface IReview{
    id: number;
    title: string;
    star: number;
}
export const HomeScreen = (props: any)=>{
     const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const [review, setReview]= useState<IReview[]>([
        {id: 1, title: "Tran Hoai Anh", star: 5},
        {id: 2, title: "Vu Minh Thu", star: 5}
    ]);
    const style = StyleSheet.create({
        reviewItem  : {
            padding:15,
            margin: 10,
            backgroundColor:'gray'
        }
    })
    return(
        <View>
            <Text>Home Screen</Text>
            <FlatList
                data={review}
                keyExtractor={(item) => item.id + ""}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('review-detail', item)}>
                             <View style={style.reviewItem}>
                            <Text>{item.title}</Text>
                        </View>
                        </TouchableOpacity>
                    )
                }}
            />
          
        </View>
    )
}