import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import GlobalContext from '../../context/GlobalContext'

import {
  LoginCon,
  FormCon,
  FormImg,
  FormUsername,
  FormUserInput,
  FormPassLabel,
  FormPasswordInput,
  FormCheckBoxCon,
  FormCheckBoxInput,
  FormCheckBoxLabel,
  FormLoginBtn,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    passwordShow: false,
    err: false,
    errMsg: '',
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const api = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}

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
      this.setState({err: false, errMsg: ''})
      history.replace('/')
      //   console.log(1)
    } else {
      const response = await apiCall.json()
      this.setState({err: true, errMsg: response.error_msg})
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
    const {username, password, passwordShow, err, errMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    // console.log(err)
    return (
      <GlobalContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginCon className="login-con" isDark={isDark}>
              <FormCon
                className="form-con"
                isDark={isDark}
                onSubmit={this.onSubmitForm}
              >
                <FormImg
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                  className="nxt-watch-img"
                />

                <FormUsername
                  isDark={isDark}
                  htmlFor="username"
                  className="input-label"
                >
                  USERNAME
                </FormUsername>

                <FormUserInput
                  type="text"
                  id="username"
                  className="input-el"
                  placeholder="Username"
                  value={username}
                  onChange={this.onChangeUsername}
                  isDark={isDark}
                />

                <FormPassLabel
                  isDark={isDark}
                  htmlFor="password"
                  className="input-label"
                >
                  PASSWORD
                </FormPassLabel>

                <FormPasswordInput
                  type={passwordShow ? 'text' : 'password'}
                  className="input-el"
                  placeholder="Password"
                  id="password"
                  onChange={this.onChangePassword}
                  value={password}
                  isDark={isDark}
                />
                <FormCheckBoxCon className="checkbox-password">
                  <FormCheckBoxInput
                    onClick={this.onClickCheckbox}
                    type="checkbox"
                    id="checkbox"
                    className="checkbox"
                  />
                  <FormCheckBoxLabel
                    htmlFor="checkbox"
                    className="show-password"
                    isDark={isDark}
                  >
                    Show Password
                  </FormCheckBoxLabel>
                </FormCheckBoxCon>

                <FormLoginBtn className="login-btn" type="submit">
                  Login
                </FormLoginBtn>
                {err && <ErrorMsg>*{errMsg}</ErrorMsg>}
              </FormCon>
            </LoginCon>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}

export default Login
