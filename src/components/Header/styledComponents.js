import styled from 'styled-components'

export const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  width: 100%;
  height: 10vh;

  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};

  justify-content: space-between;
`

export const Logo = styled.img`
  width: 100px;
  height: 30px;
`

export const MobileButtonContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  max-width: 130px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Buttons = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  font-size: 25px;
  height: 30px;
  width: 33%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`

export const DesktopButtonContainer = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 0;
`

export const LogoutBtn = styled.button`
  width: 80px;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  cursor: pointer;
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  margin-left: 10px;
  font-size: 15px;
  font-family: Roboto;
  height: 30px;
  border-radius: 2px;
`
