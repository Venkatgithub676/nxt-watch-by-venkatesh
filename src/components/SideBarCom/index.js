import GlobalContext from '../../context/GlobalContext'
import {
  SideNavBar,
  SideBarUlCon,
  ContactUsSection,
  ContactHeading,
  ContactsCon,
  Message,
  FbLogo,
  TwitterLogo,
  LinkedInLogo,
} from './styledComponents'
import SideBarLiItems from '../SideBarLiItems'

const SideBarCom = () => (
  <GlobalContext.Consumer>
    {value => {
      const {isDark, values, isSelected, clickBtn} = value

      return (
        <SideNavBar isDark={isDark}>
          <SideBarUlCon>
            {values.map(each => (
              <SideBarLiItems
                key={each.id}
                each={each}
                isSelected={isSelected}
                isDark={isDark}
                clickBtn={clickBtn}
              />
            ))}
          </SideBarUlCon>

          <ContactUsSection isDark={isDark}>
            <ContactHeading>CONTACT US</ContactHeading>
            <ContactsCon>
              <FbLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png " />
              <TwitterLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" />
              <LinkedInLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png " />
            </ContactsCon>
            <Message>
              Enjoy! Now to see your channels and recommendations!
            </Message>
          </ContactUsSection>
        </SideNavBar>
      )
    }}
  </GlobalContext.Consumer>
)

export default SideBarCom
