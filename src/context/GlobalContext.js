import React from 'react'

const GlobalContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  clickBtn: () => {},
  isSelected: '',
})

export default GlobalContext
