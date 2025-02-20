import {Route, Switch} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import GlobalContext from './context/GlobalContext'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'

import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Saved from './components/Saved'
import VideoItems from './components/VideoItems'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here

const optionConstants = {
  homeBtn: 'HomeBtn',
  trendingBtn: 'TrendingBtn',
  saveBtn: 'SaveBtn',
  gamingBtn: 'GamingBtn',
}

const values = [
  {
    id: uuidv4(),
    path: '/',
    type: optionConstants.homeBtn,
    text: 'Home',
  },
  {
    id: uuidv4(),
    path: '/trending',
    type: optionConstants.trendingBtn,
    text: 'Trending',
  },
  {
    id: uuidv4(),
    path: '/gaming',
    type: optionConstants.gamingBtn,
    text: 'Gaming',
  },
  {
    id: uuidv4(),
    path: '/saved-videos',
    type: optionConstants.saveBtn,
    text: 'Saved Videos',
  },
]

class App extends Component {
  state = {isDark: false, savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  saveVideoBtn = (videoItems, saved) => {
    const {id} = videoItems
    const {savedVideos} = this.state
    console.log(videoItems, saved)
    let filteredValues
    if (!saved) {
      filteredValues = [...savedVideos, videoItems]
    } else {
      filteredValues = savedVideos.filter(each => each.id !== id)
    }
    // console.log(filteredValues, saved, videoItems)

    this.setState({savedVideos: filteredValues})
  }

  render() {
    const {isDark, savedVideos} = this.state
    return (
      <GlobalContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          values,
          savedVideos,
          saveVideoBtn: this.saveVideoBtn,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={Saved} />
          <ProtectedRoute exact path="/videos/:id" component={VideoItems} />
          <Route component={NotFound} />
        </Switch>
      </GlobalContext.Provider>
    )
  }
}
export default App
