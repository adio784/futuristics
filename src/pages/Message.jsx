import React from 'react'
import Header from '../components/Navbar/Header';
import SideBar from '../components/SideNav/SideBar';

const Message = () => {
  return (
    <div>
      <Header/>
      <SideBar/>    
      <div style={{background: '#333'}}>
      <h1>Message</h1>  
      </div>
    </div>
  )
}

export default Message;
