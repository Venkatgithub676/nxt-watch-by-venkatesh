import styled from 'styled-components'

export const SideNavBar = styled.div`
  width: 20%;
  flex-shrink: 0;
  padding: 0.1px;
  min-height: 90vh;
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SideBarUlCon = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
`
