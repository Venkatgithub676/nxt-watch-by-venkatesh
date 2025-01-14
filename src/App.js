import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import GlobalContext from './context/GlobalContext'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
// Replace your code here
class App extends Component {
  state = {isDark: false}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <GlobalContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/trending" component={Trending} />
        </Switch>
      </GlobalContext.Provider>
    )
  }
}
export default App
