import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  console.log(props)
  return <Route {...props} />
}

export default ProtectedRoute
