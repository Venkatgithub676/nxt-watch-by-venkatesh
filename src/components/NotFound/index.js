import {
  NotFoundCon,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
  NotFoundSideBarCon,
} from './styledComponents'

import SideBarCom from '../SideBarCom'
import GlobalContext from '../../context/GlobalContext'

const NotFound = () => (
  <GlobalContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <NotFoundSideBarCon>
          <SideBarCom />
          <NotFoundCon isDark={isDark}>
            <NotFoundImg
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
            />
            <NotFoundHeading isDark={isDark}>Page Not Found</NotFoundHeading>
            <NotFoundPara isDark={isDark}>
              we are sorry, the page you requested could not be found.
            </NotFoundPara>
          </NotFoundCon>
        </NotFoundSideBarCon>
      )
    }}
  </GlobalContext.Consumer>
)
export default NotFound
