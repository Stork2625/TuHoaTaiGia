import React,{useState} from "react";
import { Text,View,TextInput,Button } from "react-native";
import { register } from "../api/authService";

const RegisterScreen = ()=>{
    const[email, setEmail]=useState("");
    const[password, setPassword]= useState("")
    const[error, setError]= useState("")

    const handieRegister = async ()=>{
        setError("");
        try{
            const user = await register(email,password);
            alert("Đăng Ký thành công"+ user.email);
        }catch(err: any){
            setError(err.message);
        }
    };
    return(
        <View>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail}/>
            <TextInput placeholder="Password" value={password} onChangeText={setPassword}/>
            {error ? <Text style={{color:"red"}}>{error}</Text>:null}
            <Button title="Đăng Ký" onPress={handieRegister}/>
        </View>
    )
};
export default RegisterScreen;