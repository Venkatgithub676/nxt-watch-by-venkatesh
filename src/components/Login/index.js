import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', passwordShow: false}

  onSubmitForm = async event => {
    event.preventDefault()

    const api = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    console.log(userDetails)
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const apiCall = await fetch(api, options)
    if (apiCall.ok) {
      const {history} = this.props
      const response = await apiCall.json()
      //   console.log(response)
      Cookies.set('jwt_token', response.jwt_token, {expires: 20})
      history.replace('/')
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckbox = event => {
    this.setState({passwordShow: event.target.checked})
  }

  render() {
    const {username, password, passwordShow} = this.state
    return (
      <div className="login-con">
        <form className="form-con" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt=""
            className="nxt-watch-img"
          />
          <br />
          <label htmlFor="username" className="input-label">
            USERNAME
          </label>

          <input
            type="text"
            id="username"
            className="input-el"
            placeholder="Username"
            value={username}
            onChange={this.onChangeUsername}
          />

          <label htmlFor="password" className="input-label">
            PASSWORD
          </label>

          <input
            type={passwordShow ? 'text' : 'password'}
            className="input-el"
            placeholder="Password"
            id="password"
            onChange={this.onChangePassword}
            value={password}
          />
          <div className="checkbox-password">
            <input
              onClick={this.onClickCheckbox}
              type="checkbox"
              id="checkbox"
              className="checkbox"
            />
            <label htmlFor="checkbox" className="show-password">
              Show Password
            </label>
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
