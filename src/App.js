import {Route, Switch} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import Login from './components/Login'
// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </>
)
export default App
