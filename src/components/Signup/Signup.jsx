import React, { useState } from "react";
import { Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  GlobalStatesData,
  userFormDetailsReducer,
} from "../../ReduxToolkit/slice/globalStatesSlice";

function Signup() {
  const globalState = useSelector(GlobalStatesData);
  const userFormDetails = globalState?.globalStatesSlice?.userFormDetails;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [number, setnumber] = useState(null);
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
//   console.log(globalState);


  const userFormDetailsSubmit = (e) => {
    
    e.preventDefault();
    const UserDetails = {
      name,
      number,
      email,
      Password,
    };
    console.log(globalState);
    let updatedUserList = [...userFormDetails, UserDetails]
    console.log(updatedUserList)
    dispatch(userFormDetailsReducer(updatedUserList));
    navigate('/')
  };

  return (
    <div className="container">
      <h1 className="heading">Sign up</h1>
      <div className="inputDivContainer">
        <Input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Full Name"
          className="inputLogin"
        />
        <Input
          onChange={(e) => {
            setnumber(e.target.value);
          }}
          placeholder="Phone Number"
          className="inputLogin"
        />
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your Email"
          className="inputLogin"
        />
        <Input.Password
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your Password"
          className="inputLogin"
        />
        <Button
          type="primary"
          className="loginBtn"
          onClick={userFormDetailsSubmit}
        >
          Sign Up
        </Button>
      </div>
      <div>
        Already have an account <NavLink to="/">Login</NavLink>
      </div>
    </div>
  );
}

export default Signup;
