import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {withRouter, Link} from 'react-router-dom'
import GlobalContext from '../../context/GlobalContext'
import './index.css'
import {
  NavContainer,
  Logo,
  MobileButtonContainer,
  Buttons,
  DesktopButtonContainer,
  LiBtn,
  ProfileImg,
  LogoutBtn,
  PopupMainCon,
  PopupMsg,
  PopupBtnsCon,
  CancelBtn,
  ConfirmBtn,
} from './styledComponents'

const overlayStyles = {
  width: '100%',
}

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
              alt="website logo"
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
            />
          </Link>
          <DesktopButtonContainer>
            <LiBtn key="theme">
              <Buttons
                onClick={changeTheme}
                data-testid="theme"
                isDark={isDark}
              >
                {isDark ? <IoSunnyOutline /> : <FaMoon />}
              </Buttons>
            </LiBtn>
            <LiBtn key="profile">
              <Buttons>
                <ProfileImg
                  alt="profile"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                />
              </Buttons>
            </LiBtn>
            <LiBtn key="popup">
              <Popup
                trigger={<LogoutBtn isDark={isDark}>Logout</LogoutBtn>}
                modal
                className="popup-content"
                overlayStyle={overlayStyles}
              >
                {clickBack => (
                  <PopupMainCon isDark={isDark}>
                    <PopupMsg isDark={isDark}>
                      Are you sure, you want to logout
                    </PopupMsg>
                    <PopupBtnsCon>
                      <CancelBtn onClick={clickBack}>Cancel</CancelBtn>
                      <ConfirmBtn onClick={clickLogout}>Confirm</ConfirmBtn>
                    </PopupBtnsCon>
                  </PopupMainCon>
                )}
              </Popup>
            </LiBtn>
          </DesktopButtonContainer>

          <MobileButtonContainer>
            <LiBtn key="theme">
              <Buttons onClick={changeTheme} isDark={isDark}>
                {isDark ? <IoSunnyOutline /> : <FaMoon />}
              </Buttons>
            </LiBtn>
            <LiBtn key="menu">
              <Buttons isDark={isDark}>
                <GiHamburgerMenu />
              </Buttons>
            </LiBtn>
            <LiBtn key="popup">
              <Popup
                trigger={
                  <Buttons onClick={clickLogout} isDark={isDark}>
                    <FiLogOut />
                  </Buttons>
                }
                modal
                className="popup-content"
                overlayStyle={overlayStyles}
              >
                {clickBack => (
                  <PopupMainCon>
                    <PopupMsg>Are you want to logout? </PopupMsg>
                    <PopupBtnsCon>
                      <CancelBtn onClick={clickBack}>Cancel</CancelBtn>
                      <ConfirmBtn onClick={clickLogout}>Confirm</ConfirmBtn>
                    </PopupBtnsCon>
                  </PopupMainCon>
                )}
              </Popup>
            </LiBtn>
          </MobileButtonContainer>
        </NavContainer>
      )
    }}
  </GlobalContext.Consumer>
)

export default withRouter(Header)
