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
  buttoncontainer: { 
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: -230, // cách mép dưới 100 đơn vị, có thể điều chỉnh
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 40, // làm tròn nút
    borderWidth: 5,   // viền dày rõ
    borderColor: '#fff', // màu viền trắng
    backgroundColor: 'transparent', // trong suốt
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