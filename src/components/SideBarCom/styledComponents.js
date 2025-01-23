import styled from 'styled-components'

export const SideNavBar = styled.div`
  width: 20%;
  flex-shrink: 0;
  padding: 0.1px;
  min-height: 90vh;
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const ContactUsSection = styled.div`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  padding: 10px 20px 10px 20px;
`
export const ContactHeading = styled.p`
  font-family: Roboto;
  font-size: 18px;
`

export const ContactsCon = styled.div`
  display: flex;
`
export const FbLogo = styled.img`
  width: 30px;
  margin-right: 10px;
`
export const TwitterLogo = styled(FbLogo)``
export const LinkedInLogo = styled(FbLogo)``
export const Message = styled(ContactHeading)``
