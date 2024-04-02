import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserContext = React.createContext()

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('userToken')))
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserToken = JSON.parse(localStorage.getItem('userToken'))
    if (storedUserToken !== authUser) {
      setAuthUser(storedUserToken)
    }
  }, [])

  useEffect(() => {
    const storedUserToken = JSON.parse(localStorage.getItem('loginToken'))
    if (storedUserToken !== authUser) {
      setAuthUser(storedUserToken)
    }
  }, [])

  const logout = () => {
    setUser(null)
    setAuthUser(null)

    // CLEAR DATA FROM STORAGE
    localStorage.clear()
    sessionStorage.clear()

    navigate('/')
  }

  return (
    <UserContext.Provider value={{ user, setUser, logout, setAuthUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }
