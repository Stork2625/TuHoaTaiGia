import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/review/home';
import { DetailsScreen } from './components/review/DetailsScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} 
      options={{title:'Trang chủ'}}/>
      <Stack.Screen name='review-detail' component={DetailsScreen}/>
    </Stack.Navigator>
  </NavigationContainer>  
  )
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
