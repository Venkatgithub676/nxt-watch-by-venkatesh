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
  state = {isDark: false, isSelected: values[0].id}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  clickBtn = id => {
    this.setState({isSelected: id})
  }

  render() {
    const {isDark, isSelected} = this.state
    return (
      <GlobalContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          values,
          isSelected,
          clickBtn: this.clickBtn,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </GlobalContext.Provider>
    )
  }
}
export default App
