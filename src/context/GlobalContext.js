import React from 'react'

const GlobalContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  clickBtn: () => {},
  isSelected: '',
  savedVideos: [],
  saveVideoBtn: () => {},
})

export default GlobalContext
