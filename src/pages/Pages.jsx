import React, { useContext } from 'react'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResetPassword from './ResetPassword'
import LivePage from './LivePage'
import Message from './Message'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedUserRoutes from '../Utils/ProtectedUserRoutes'
import { UserContextProvider } from '../Contexts/userContext'
import VerifyEmail from './VerifyEmail'

const Pages = () => {
  return (
    <div>
      <ToastContainer
        style={{
          '--toastify-color-progress-bar': '#B3B3B3'
        }}
      />

      <Router>
        <UserContextProvider>
          <Routes>
            <Route index element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/reset-password' element={<ResetPassword />}></Route>
            <Route path='/verify-email' element={<VerifyEmail />}></Route>
            <Route path='/live' element={<LivePage />}></Route>
            <Route path='/message' element={<Message />}></Route>
            <Route path='/user-dashboard' element={<ProtectedUserRoutes />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </UserContextProvider>
      </Router>
    </div>
  )
}

export default Pages
