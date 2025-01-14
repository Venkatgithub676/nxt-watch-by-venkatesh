import Header from '../Header'
import GlobalContext from '../../context/GlobalContext'
import SideBarCom from '../SideBarCom'
import {TrendingCon} from './styledComponents'

const Trending = () => (
  <GlobalContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <>
          <Header />

          <SideBarCom />
        </>
      )
    }}
  </GlobalContext.Consumer>
)
export default Trending
