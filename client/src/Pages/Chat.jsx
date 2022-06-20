import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import { allUsersRoute } from '../utils/APIRoutes';
import Contacts from '../components/Contacts';

const Chat = () => {
  const navigate = useNavigate();
  const [contacts,setContacts] = useState([]);
  const [currentUser,setCurrentUser] = useState(undefined);
  useEffect(()=>{
    if(!localStorage.getItem('chat-app-user')){
      navigate("/login")
    }
    else{
      setCurrentUser(JSON.parse(localStorage.getItem('chat-app-user')))
    }
  },[])
  useEffect(()=>{
   if(currentUser){
    if(currentUser.isAvatarImageSet){
      async function getOll(){
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data);
      }
      getOll();
    }
    else{
      navigate("/setavatar")
    }
   }
  },[currentUser])
  return (
    <Container>
      <div className="container">
          <Contacts contacts={contacts} currentUser={currentUser}/>
      </div>
    </Container>
  )
}

const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #131324;
.container{
  height:85vh;
  width:85vw;
  background-color: #00000076;
  display: grid;
  grid-template-columns: 25% 75%;
  @media screen and (min-width:720px) and (max-width:1080px){
    gird-template-columns : 35% 65%;
  }
}
`;

export default Chat