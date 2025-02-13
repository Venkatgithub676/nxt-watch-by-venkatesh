import styled from 'styled-components'

export const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  width: 100%;
  height: 10vh;
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 100px;
  height: 30px;
`

export const MobileButtonContainer = styled.ul`
  width: 40%;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  max-width: 130px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LiBtn = styled.li``
export const Buttons = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  font-size: 25px;
  height: 30px;
`

export const DesktopButtonContainer = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
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

export const PopupMainCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
`
export const PopupMsg = styled.p`
  font-family: Roboto;
  color: ${props => (props.isDark ? '#ffffff' : '#00306e')};
  font-size: 20px;
  margin-bottom: 30px;
`
export const PopupBtnsCon = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`
export const CancelBtn = styled.button`
  width: 80px;
  height: 35px;
  color: #7e858e;
  font-family: Roboto;
  background-color: transparent;
  border: 1px solid #7e858e;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
`
export const ConfirmBtn = styled(CancelBtn)`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
`
