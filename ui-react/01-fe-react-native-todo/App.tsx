import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[student,setStudent] = useState([
    {id:1,name:"Hoai Anh", age:20},
    {id:2,name:" Anh", age:20},
    {id:3,name:"Hi Anh", age:20},
    {id:4,name:"oai Anh", age:20},
    {id:5,name:"Hai Anh", age:20},
    {id:6,name:"Hoa Anh", age:20},
    {id:7,name:"Hoai nh", age:20},
    {id:8,name:"Hoai Ah", age:20},
    {id:9,name:"Hoai An", age:20},
  ])
  return (
    <View style={styles.container}>
      
        <Text>Hello word</Text>
        <ScrollView>
         {student.map(item =>{
            return (
              <View key={item.id} style={styles.array}>
                  <Text>{item.name}</Text>
              </View>
            )
         })}
        </ScrollView>
    </View>
  );
}
//css in js
const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  array:{
    backgroundColor:"pink",
    padding:15,
    marginBottom:30
  }
});
