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
@media screen and (min-width: 508px) and (max-width: 678px) {
  img{
    height: 15rem;
  }
  h1{
    font-size: 1.5rem;
  }
  h3{
    font-size: 15px;
  }
}
@media screen and (min-width: 350px) and (max-width: 508px) {
  img{
    height: 10rem;
  }
  h1{
    font-size: 19px;
  }
  h3{
    font-size: 12px
  }
}
`;

export default Welcome
