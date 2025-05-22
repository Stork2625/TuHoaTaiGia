import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[name, setName]= useState<String>("Hoai Anh");
  const[test, setTest]= useState({
    name: 'Minh Thu',
    age: 20,
  });

  // lam dem
  const[count, setCount]= useState(0);
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>
        {name}Hello word
        {test.name}Hello word
        {JSON.stringify(test)}Hello word
        Count ={count}
        <View>
          <Button 
          title='Enter' onPress={()=> setCount(count + 1)}/>
        </View>
      </Text>
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
