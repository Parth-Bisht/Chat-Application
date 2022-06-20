import React from 'react'
import styled from "styled-components";
import Robo from "../assets/robot.gif";
const Welcome = ({currentUser}) => {
  return (
    <Container>
      <img src={Robo} alt="" />
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please select a user to start chat</h3>
    </Container>
  )
}

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;
img{
    height: 20rem;
}
span{
    color: #4e0eff;
}
`;

export default Welcome
