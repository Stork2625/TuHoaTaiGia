import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';



const style = StyleSheet.create({
  iconBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  icon: {
    width: 30,
    height: 30,
  },
  buttoncontainer:{ 
    backgroundColor:'#fff',
    alignSelf:'flex-end',
    width: 50,
    height: 50,
    marginTop:400
  },
  preview:{
    alignSelf: 'stretch',
    flex:1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,// khoảng trắng bên trong
    margin: 20,  // khoảng trắng bên ngoài
    backgroundColor: '#fff', // giúp dễ nhìn nếu cần
    borderRadius: 90, // bo góc nhẹ nếu muốn đẹp hơn
  },
  viewCamera:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default style;