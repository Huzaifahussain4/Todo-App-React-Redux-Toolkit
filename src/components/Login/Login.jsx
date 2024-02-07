import React, { useState } from "react";
import "./login.css";
import { Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  GlobalStatesData,
  userFormDetailsReducer,
} from "../../ReduxToolkit/slice/globalStatesSlice";
import Todo from "../Todo/Todo";

function Login() {
  const globalState = useSelector(GlobalStatesData);
  const userFormDetails = globalState?.globalStatesSlice?.userFormDetails;
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = () => {
    console.log(userFormDetails)
    userFormDetails.find((element)=>{
      if(element.email === loginName && element.Password === loginPassword){
        navigate("/todo")
      }else{
        console.log("Not Found")
      }
    })
  };

  return (
    <div className="container">
      <h1 className="heading">Login your account</h1>
      <div className="inputDivContainer">
        <Input placeholder="Enter your Email" className="inputLogin" onChange={(e)=>{setLoginName(e.target.value)}}/>
        <Input.Password
        onChange={(e)=>{setLoginPassword(e.target.value)}}
          placeholder="Enter your Password"
          className="inputLogin"
        />
        <Button type="primary" className="loginBtn" onClick={loginSubmit}>
          Login
        </Button>
      </div>
      <div>
        Already have an account <NavLink to="/signup">Sign up</NavLink>
      </div>
    </div>
  );
}

export default Login;
