import styled from 'styled-components'

export const SideNavBar = styled.div`
  width: 25%;
  padding: 0.1px;
  height: 90vh;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const SideBarUlCon = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`
