import React from "react";
class MyConponent extends React.Component{
    
    //Key:value
    state ={
        name:'Minh Thư',
        age: 20
    }
    
    /* 
    JSX => return block
    
    
    */
   handleClickButton = ()=>{
    alert('click me')
   }
    render(){
        
        return(
            // lưu ý trong này chỉ được dùng một div nếu muốn dùng từ hai div trở lên thig phải có lớp bọc: <div></div>,
            //  <React.fragment></React.fragment>, <></>.
            <>
             <div>
                Dit con me tuc vai lon u hoc thi buon ngu{this.state.name}
            </div>
            <div>
                Tuoi: {this.state.age}
            </div>
            <div className="third">
                <button onClick={()=> this.handleClickButton()}>Click me</button>
            </div>
            </>
           
        )
    }
}
export default MyConponent;