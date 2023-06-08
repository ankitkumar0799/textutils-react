
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar.js'
import Textfrom from './components/Textfrom.js'
import Alert from './components/Alert'


import {
  BrowserRouter,  
  Routes ,
  Route,

} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');



  const [alert, setAlert] = useState(null);

 const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type

  })



setTimeout(() => {
  setAlert(null);
}, 1500);

}
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enable","success");
      setInterval(()=>{
      document.title = 'TextUtils - Dark Mode';

    }, 2000)
    }else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable","success");


      document.title = 'TextUtils - light Mode';


    }
  } 




  return (
 <> 

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} home='Home'/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
  
          
          <Textfrom heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
      
      </div>
   
</>


  );
}

export default App;
