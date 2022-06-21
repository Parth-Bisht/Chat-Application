import React from 'react';
import styled from "styled-components";
import axios from "axios";
import {BiPowerOff} from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const handleClick = async ()=>{
        localStorage.clear();
        navigate("/login");
    }
  return (
    <Button>
      <BiPowerOff onClick={() => handleClick()}/>
    </Button>
  )
}

const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
border-radius: 0.5rem;
background-color: #9a86f3;
border: none;
cursor: pointer;
svg{
    font-size: 1.3rem;
    color: #ebe7ff;
    @media screen and (min-width:350px) and (max-width:750px){
            font-size:0.8rem;
        }
}
`;

export default Logout
