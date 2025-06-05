import React,{useState} from "react";
import { Text,View, Button, TextInput } from "react-native";
import { login } from "../api/authService";


const LoginScreen=()=>{
    const[email,setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[error,setError]=useState("");

    const handleLogin = async ()=>{
        setError("");
        try{
            const user = await login(email,password);
            alert("Đăng nhập thành công"+ user.email);
        }catch(err:any){
            setError(err.message);
        }
    };

    return(
        <View>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail}/>
            <TextInput placeholder="Password" value={password} onChangeText={setPassword}/>
            {error ? <Text style={{color:"red"}}>{error}</Text>: null}
            <Button title="Đăng Nhập" onPress={handleLogin}/>
        </View>
    )
};

export default LoginScreen;