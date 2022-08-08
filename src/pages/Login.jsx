import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import {  useState } from "react";
import { useLoginMutation } from "../services/api";
import { setStorage } from "../services/utils";
import log from "../images/login.png";
const Login = () => {
    const navigate = useNavigate();
    const goToNextPage = () => {
        navigate("/list");
    };

    const [state, setState] = useState({
        username: "",
        password: ""
        
        
    });

    const [LoginEmployee, result] = useLoginMutation();

    const loginemp=async()=>{
        
        const output= await LoginEmployee(state);
                if(output){
                    setStorage("idToken",output.data.data.idToken)
                    goToNextPage()
                }
            
        }

    const onChangeValue = (key, value) => {
        console.log(key, '--->', value);
        setState({
            ...state,
            [key]: value

        })
        
    }

    return (
        <div id="container">
<div id="left">
    
  <img  src={log}/>

    

</div>
        
        <div id="right">
       


            

            
            <label className="inlabel" for="username">User Name</label><br />
            <InputField className="inclass" type="text" id="username" placeHolder="user name" onChange={(value) => onChangeValue("username", value)} />
            
             
            <br />
            <br />
            <label className="inlabel" for="password">Password</label><br />
            <InputField className="inclass" type="password" id="password" placeHolder="password" onChange={(value) => onChangeValue("password", value)} />
            
             
            <br />
            <br />
            <button    onClick={()=>{loginemp()}}> Login</button>

            
            </div>
            </div>
    
     

    )
}

export default Login;