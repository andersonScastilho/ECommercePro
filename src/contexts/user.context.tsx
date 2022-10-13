import React, { createContext, FunctionComponent, useState } from 'react'

interface childrenProps {
  children: React.ReactNode
}

export const UserContext = createContext({
  currentUser: null
})

const UserContextProvider: FunctionComponent<childrenProps> = ({
  children
}) => {
  const [currentUser] = useState(null)
  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider
