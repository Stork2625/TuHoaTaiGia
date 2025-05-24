import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const[hienThi,setHienThi]=useState('');
  const[firstNum,setFirstNum]=useState<string | null>(null);
  const[toanTu,setToanTu]=useState<string | null>(null);
  const bamSo = (num:String)=>{
    setHienThi(prev => prev + num);
  };
  const bamToanTu = (op:String)=>{
    setFirstNum(hienThi);
    setToanTu(op);
    setHienThi('');
  };
  const ketQua = () =>{
    if(firstNum && toanTu){
      const secondNum = hienThi;
      let kq = 0;
    
    switch(toanTu){
      case'+':
      kq = parseFloat(firstNum) + parseFloat(secondNum);
      break;
      case'-':
      kq = parseFloat(firstNum) - parseFloat(secondNum);
      break;
      case'*':
      kq = parseFloat(firstNum) * parseFloat(secondNum);
      break;
      case'/':
      kq = parseFloat(firstNum) / parseFloat(secondNum);
      break;
    }
    setHienThi(kq.toString());
    setFirstNum(null);
    setToanTu(null);
  };
}
const clear = ()=>{
  setHienThi('');
  setFirstNum('');
  setToanTu('');
};
  return (
 <View style={styles.container}>
  <Text style={styles.display}>{hienThi}</Text>
  <View style={styles.row}>
  <TouchableOpacity style={styles.button} onPress={()=> bamSo('1')}>
      <Text style={styles.buttonText}>1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=> bamSo('2')}>
      <Text style={styles.buttonText}>2</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=> bamSo('3')}>
      <Text style={styles.buttonText}>3</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=> bamToanTu('+')}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.row}>
  <TouchableOpacity style={styles.button} onPress={()=> bamSo('4')}>
      <Text style={styles.buttonText}>4</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=> bamSo('5')}>
      <Text style={styles.buttonText}>5</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=> bamSo('6')}>
      <Text style={styles.buttonText}>6</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=> bamToanTu('-')}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
  </View>
    <View style={styles.row}>
    <TouchableOpacity style={styles.button} onPress={()=> bamSo('7')}>
        <Text style={styles.buttonText}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=> bamSo('8')}>
        <Text style={styles.buttonText}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=> bamSo('9')}>
        <Text style={styles.buttonText}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=> bamToanTu('*')}>
        <Text style={styles.buttonText}>x</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
    <TouchableOpacity style={styles.button} onPress={()=> clear()}>
        <Text style={styles.buttonText}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=> bamSo('0')}>
        <Text style={styles.buttonText}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=> ketQua()}>
        <Text style={styles.buttonText}>=</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=> bamToanTu('/')}>
        <Text style={styles.buttonText}>/</Text>
      </TouchableOpacity>
      
    </View>
 </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end', 
    padding: 20,
  },
  display: {
    fontSize: 48,
    textAlign: 'right',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    backgroundColor: '#ededed',
    padding: 20,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
  },
});
