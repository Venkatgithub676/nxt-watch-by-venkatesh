import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import GlobalContext from '../../context/GlobalContext'
import {SideNavBar, SideBarUlCon} from './styledComponents'
import SideBarLiItems from '../SideBarLiItems'

const optionConstants = {
  homeBtn: 'HomeBtn',
  trendingBtn: 'TrendingBtn',
  saveBtn: 'SaveBtn',
  gamingBtn: 'GamingBtn',
}

const values = [
  {
    id: uuidv4(),
    category: '',
    type: optionConstants.homeBtn,
    text: 'Home',
  },
  {
    id: uuidv4(),
    category: 'trending',
    type: optionConstants.trendingBtn,
    text: 'Trending',
  },
  {
    id: uuidv4(),
    category: 'gaming',
    type: optionConstants.gamingBtn,
    text: 'Gaming',
  },
  {
    id: uuidv4(),
    category: 'saved',
    type: optionConstants.saveBtn,
    text: 'Saved Videos',
  },
]
class SideBarCom extends Component {
  state = {isSelected: values[0].id}

  clickBtn = id => {
    this.setState({isSelected: id})
  }

  render() {
    return (
      <GlobalContext.Consumer>
        {value => {
          const {isDark} = value
          const {isSelected} = this.state
          console.log(isSelected)
          /* console.log(1) */
          return (
            <SideNavBar isDark={isDark}>
              <SideBarUlCon>
                {values.map(each => (
                  <SideBarLiItems
                    key={each.id}
                    each={each}
                    isSelected={isSelected}
                    isDark={isDark}
                    clickBtn={this.clickBtn}
                  />
                ))}
              </SideBarUlCon>
            </SideNavBar>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}
export default SideBarCom
