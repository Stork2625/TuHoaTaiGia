import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View , Image, StyleSheet} from 'react-native';
import style from '../style/stylesheet';


const FeedScreen = ()=>{
    const navigation:NavigationProp<RootStackParamList> =useNavigation(); 
    return(
        <View style={{flex:1}}>
           <View style={style.iconBar}>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                <Image source={require('./img/Home.png')} style={style.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Chat')}>
                <Image source={require('./img/Chat.png')} style={style.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
                <Image source={require('./img/Profile.png')} style={style.icon}/>
            </TouchableOpacity>
           </View>
        </View>
    )
}
export default FeedScreen;