import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import {withRouter, Link} from 'react-router-dom'
import GlobalContext from '../../context/GlobalContext'

import {
  NavContainer,
  Logo,
  MobileButtonContainer,
  Buttons,
  DesktopButtonContainer,
  ProfileImg,
  LogoutBtn,
} from './styledComponents'

const Header = props => (
  <GlobalContext.Consumer>
    {value => {
      const {isDark, changeTheme, clickBtn, values} = value

      const clickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      const clickLogo = () => {
        clickBtn(values[0].id)
      }
      return (
        <NavContainer isDark={isDark}>
          <Link to="/" onClick={clickLogo}>
            <Logo
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
            />
          </Link>
          <DesktopButtonContainer>
            <Buttons onClick={changeTheme} isDark={isDark}>
              {isDark ? <IoSunnyOutline /> : <FaMoon />}
            </Buttons>
            <Buttons>
              <ProfileImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
            </Buttons>
            <LogoutBtn onClick={clickLogout} isDark={isDark}>
              Logout
            </LogoutBtn>
          </DesktopButtonContainer>

          <MobileButtonContainer>
            <Buttons onClick={changeTheme} isDark={isDark}>
              {isDark ? <IoSunnyOutline /> : <FaMoon />}
            </Buttons>
            <Buttons isDark={isDark}>
              <GiHamburgerMenu />
            </Buttons>
            <Buttons onClick={clickLogout} isDark={isDark}>
              <FiLogOut />
            </Buttons>
          </MobileButtonContainer>
        </NavContainer>
      )
    }}
  </GlobalContext.Consumer>
)

export default withRouter(Header)
