import React from 'react'

const GlobalContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  clickBtn: () => {},
  values: [],
  isSelected: '',
})

export default GlobalContext
