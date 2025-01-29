import {Route, Switch, Redirect} from 'react-router-dom'
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
    category: '',
    type: optionConstants.homeBtn,
    text: 'Home',
  },
  {
    id: uuidv4(),
    category: 'trending',
    type: optionConstants.trendingBtn,
    text: 'Trending',
  },
  {
    id: uuidv4(),
    category: 'gaming',
    type: optionConstants.gamingBtn,
    text: 'Gaming',
  },
  {
    id: uuidv4(),
    category: 'saved',
    type: optionConstants.saveBtn,
    text: 'Saved Videos',
  },
]

class App extends Component {
  state = {isDark: false, isSelected: values[0].id, savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  clickBtn = id => {
    this.setState({isSelected: id})
  }

  saveVideoBtn = (videoItems, saved) => {
    const {id} = videoItems
    const {savedVideos} = this.state
    // console.log(videoItems, saved)
    let filteredValues
    if (!saved) {
      filteredValues = [...savedVideos, videoItems]
    } else {
      filteredValues = savedVideos.filter(each => each.id !== id)
    }
    console.log(filteredValues, saved, videoItems)
    this.setState({savedVideos: filteredValues})
  }

  render() {
    const {isDark, isSelected, savedVideos} = this.state
    return (
      <GlobalContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          values,
          isSelected,
          clickBtn: this.clickBtn,
          savedVideos,
          saveVideoBtn: this.saveVideoBtn,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/videos/:id" component={VideoItems} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </GlobalContext.Provider>
    )
  }
}
export default App
