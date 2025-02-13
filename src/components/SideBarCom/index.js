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

const SideBarCom = props => (
  <GlobalContext.Consumer>
    {value => {
      const {isDark, values, isSelected, clickBtn} = value
      const {originalPath} = props
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
                originalPath={originalPath}
              />
            ))}
          </SideBarUlCon>

          <ContactUsSection isDark={isDark}>
            <ContactHeading>CONTACT US</ContactHeading>
            <ContactsCon>
              <FbLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                alt="facebook logo"
              />
              <TwitterLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <LinkedInLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
              />
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
