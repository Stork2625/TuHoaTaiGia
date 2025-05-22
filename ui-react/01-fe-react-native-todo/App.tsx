import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[name, setName] = useState("")
  const[age, setAge] = useState()
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>
      <View>
        <Text style={{color:"Red", fontSize: 20, fontWeight:700}}> Name:{name}</Text>
       <TextInput 
        multiline
        onChangeText={(value) => setName(value)}
        style={{
        borderColor: "green",
        borderWidth: 3,
        width: 200,
        padding: 15,
       }}/>
        </View>
       </Text>
       <View>
        <Text style={{color:"Red", fontSize: 20, fontWeight:700}}> Age:{age}</Text>
       <TextInput 
        multiline
        onChangeText={(value) => setAge(value)}
        style={{
        borderColor: "green",
        borderWidth: 3,
        width: 200,
        padding: 15,
       }}
       keyboardType='numeric'
       maxLength={2}
       />
       
      </View>      
    </View>
  );
}
//css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
