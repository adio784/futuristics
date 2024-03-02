import React, { useContext } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResetPassword from './ResetPassword';
import LivePage from './LivePage';
import Message from './Message';


const Pages = ()=> {
    return (
        <div>
        
                <Router>
                    <Routes>
                        <Route path='/' index element={<Dashboard/>}></Route>
                        <Route path='/login' element={<Login/>}></Route>
                        <Route path='/register' element={<Register/>}></Route>
                        <Route path='/reset-password' element={<ResetPassword/>}></Route>
                        <Route path='/live' element={<LivePage/>}></Route>
                        <Route path='/message' element={<Message/>}></Route>
                    </Routes>
                </Router>
        
        </div>
    )
};

export default Pages;