import React from 'react'

const GlobalContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  values: '',
  savedVideos: [],
  saveVideoBtn: () => {},
})

export default GlobalContext
