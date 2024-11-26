import {Route, Switch} from 'react-router-dom'

import './App.css'
import Login from './components/Login'
// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
    </Switch>
  </>
)
export default App
