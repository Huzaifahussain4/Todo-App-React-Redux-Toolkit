import React from "react";
import "./logoutBtnStyle.css";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
    const navigate = useNavigate()

    const LogoutHandle = () =>{
        navigate('/')
    }


  return (
    <div>
      <Button danger type="text" onClick={LogoutHandle} className="logOutBtn">Log out</Button>
    </div>
  );
}

export default LogoutBtn;
