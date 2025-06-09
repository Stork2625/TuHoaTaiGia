import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, Image, SafeAreaView, Button} from 'react-native';
import style from '../style/stylesheet';
import { Camera, CameraCapturedPicture, CameraView } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';


const HomeScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  let camereRef = useRef<CameraView | null>(null);
  const[hasCameraPermission, setHasCameraPermission] = useState<boolean | undefined>();
  const[hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<boolean | undefined>();
  const [photo, setPhoto] = useState<CameraCapturedPicture | undefined>(undefined);

  useEffect(()=>{
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  },[])
    
  if(hasCameraPermission === undefined){
    return <Text>Dang cap phep su dung camera...</Text>
  }else if(!hasCameraPermission){
    return <Text>Vui long cho phep su dung camera de tiep tuc su dung app</Text>
  }


  let takePic = async ()=>{
    let options = {
      quality:1,
      base64: true,
      exif: false
  };
  let newPhoto = await camereRef.current?.takePictureAsync(options);
  setPhoto(newPhoto);
};

if(photo){
  let sharePic = ()=>{
      shareAsync(photo.uri).then(()=>{
        setPhoto(undefined);
      });
  };
  let savePhoto = ()=>{
      MediaLibrary.saveToLibraryAsync(photo.uri).then(()=>{
        setPhoto(undefined);
      });
  };
  return(
    <SafeAreaView style={style.container}>
      <Image style={style.preview} source={{uri:"data:image/jpg;base64,"+ photo.base64}}/>
      <Button title='Share' onPress={sharePic}/>
      {hasMediaLibraryPermission ? <Button title='Save' onPress={savePhoto}/>: undefined} 
      <Button title='Discard' onPress={() => setPhoto(undefined)}/>
    </SafeAreaView>
  );
}


  return (
    <View style={{ flex: 1 }}>
      <CameraView style = {style.viewCamera} ref={camereRef}>
          <TouchableOpacity onPress={takePic}>
              <Image source={require('./img/TakePhoto.png')} style = {style.buttoncontainer}/>
          </TouchableOpacity>
      </CameraView>

      <View style={style.iconBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
          <Image source={require('./img/Feed.png')} style={style.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Image source={require('./img/Chat.png')} style={style.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('./img/Profile.png')} style={style.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;