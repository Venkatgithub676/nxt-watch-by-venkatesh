import GlobalContext from '../../context/GlobalContext'
import {SideNavBar, SideBarUlCon} from './styledComponents'
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
        </SideNavBar>
      )
    }}
  </GlobalContext.Consumer>
)

export default SideBarCom
