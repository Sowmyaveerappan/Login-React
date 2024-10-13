import { useState } from "react";

import axios from "axios"
import { useNavigate } from "react-router-dom";



function App() {

  const navigate = useNavigate()
  const [user, setuser] = useState("")
  const [pass, setpass] = useState("")

  function handleuser(evt) {
    setuser(evt.target.value)
  }
  function handlepass(evt) {
    setpass(evt.target.value)
  }
  function check(){
    var logindetails = axios.get(`http://localhost:5000/login?username=${user}&password=${pass}`)
    logindetails.then(function(data){
      if(data.data === true){
        navigate("/success")
      }
      else{
        navigate("/fail")
      }
    })
      

  }
  return (
    <div className="outer-box">
    <div className="form-container">
      <h1 className="login-title">Login Form</h1>
      
        <input className="input-field" onChange={handleuser} name="username" placeholder="Username"></input>
        <input className= "input-field"onChange={handlepass} name="password" placeholder="Password"></input>
        <button className="login-button"onClick={check}>Login</button>
      
    </div>
    </div>
  );
}

export default App;
