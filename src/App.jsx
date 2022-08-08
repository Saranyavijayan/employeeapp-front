import logo from './logo.svg';
import './App.css';
import Button from "./components/Button"
import InputField from './components/InputField';
import { useEffect, useState } from 'react';
import TextField from './components/TextField';
import CreateEmployee from './pages/CreateEmployee';
function App() {
  const [userName,setUserName]=useState('your username');
  const [displayName,setDisplayName]=useState('')

 

  const onUserNameChange=(value)=>{

    setUserName(value);
  };

  const onDisplayName=()=>{
    setDisplayName(userName)
  }
  
  useEffect(()=>{
    console.log('displayName ->', displayName)
    setUserName('');  
  },[displayName]);

  useEffect(() => {
console.log('userName->', userName);
  }, [userName]);

  useEffect(()=>{
    setUserName('hello');
  },[]);



  return (
    <div className="App">
    < Button label="Click Me" handleClick={onDisplayName}/>
    <InputField label="User Name" name={userName} onChange ={onUserNameChange}/>
    <TextField label={userName}/>
    <TextField label={displayName}/>
    <CreateEmployee/>
    </div>
   
  );


}

export default App;
