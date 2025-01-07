import styled from 'styled-components'

export const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
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
`
export const Buttons = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  font-size: 25px;
  width: 33%;
`
