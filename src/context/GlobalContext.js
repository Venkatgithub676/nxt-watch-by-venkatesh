import React from 'react'

const GlobalContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
})

export default GlobalContext
