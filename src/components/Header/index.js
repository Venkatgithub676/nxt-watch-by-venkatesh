import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {Component} from 'react'
import {
  NavContainer,
  NavImgContainer,
  Logo,
  MobileButtonContainer,
  Buttons,
} from './styledComponents'

class Header extends Component {
  state = {}

  render() {
    return (
      <NavContainer>
        <NavImgContainer>
          <Logo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
        </NavImgContainer>
        <MobileButtonContainer>
          <Buttons>
            <FaMoon />
          </Buttons>
          <Buttons>
            <GiHamburgerMenu />
          </Buttons>
          <Buttons>
            <FiLogOut />
          </Buttons>
        </MobileButtonContainer>
      </NavContainer>
    )
  }
}

export default Header
