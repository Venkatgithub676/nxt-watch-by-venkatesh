import {Link} from 'react-router-dom'
import {HiFire, HiOutlineSaveAs} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {IoMdHome} from 'react-icons/io'
import {Component} from 'react'
import GlobalContext from '../../context/GlobalContext'
import {
  SideNavBar,
  SideBarUlCon,
  SideBarLiItem,
  SideBarLiItemLabels,
  SideBarLiBtn,
} from './styledComponents'

const optionConstants = {
  homeBtn: 'HomeBtn',
  trendingBtn: 'TrendingBtn',
  saveBtn: 'SaveBtn',
  gamingBtn: 'GamingBtn',
}
class SideBarCom extends Component {
  state = {isSelected: 'HomeBtn'}

  clickBtn = event => {
    console.log(event.target.id)
    this.setState({isSelected: event.target.id})
  }

  render() {
    return (
      <GlobalContext.Consumer>
        {value => {
          const {isDark} = value
          const {isSelected} = this.state
          return (
            <SideNavBar isDark={isDark}>
              <SideBarUlCon>
                <SideBarLiItem
                  selected={isSelected === optionConstants.homeBtn}
                  isDark={isDark}
                >
                  <Link to="/" style={{textDecoration: 'none'}}>
                    <SideBarLiItemLabels
                      selected={isSelected === optionConstants.homeBtn}
                      isDark={isDark}
                    >
                      <IoMdHome size={20} />
                    </SideBarLiItemLabels>
                    <SideBarLiBtn
                      id={optionConstants.homeBtn}
                      onClick={this.clickBtn}
                      isDark={isDark}
                      selected={isSelected === optionConstants.homeBtn}
                    >
                      Home
                    </SideBarLiBtn>
                  </Link>
                </SideBarLiItem>

                <SideBarLiItem
                  isDark={isDark}
                  selected={isSelected === optionConstants.trendingBtn}
                >
                  <Link to="/trending" style={{textDecoration: 'none'}}>
                    <SideBarLiItemLabels
                      selected={isSelected === optionConstants.trendingBtn}
                      isDark={isDark}
                    >
                      <HiFire size={20} />
                    </SideBarLiItemLabels>
                    <SideBarLiBtn
                      id={optionConstants.trendingBtn}
                      onClick={this.clickBtn}
                      selected={isSelected === optionConstants.trendingBtn}
                      isDark={isDark}
                    >
                      Trending
                    </SideBarLiBtn>
                  </Link>
                </SideBarLiItem>

                <SideBarLiItem
                  isDark={isDark}
                  selected={isSelected === optionConstants.gamingBtn}
                >
                  <Link to="/gaming" style={{textDecoration: 'none'}}>
                    <SideBarLiItemLabels
                      selected={isSelected === optionConstants.gamingBtn}
                      isDark={isDark}
                    >
                      <SiYoutubegaming size={20} />
                    </SideBarLiItemLabels>
                    <SideBarLiBtn
                      onClick={this.clickBtn}
                      id="GamingBtn"
                      selected={isSelected === optionConstants.gamingBtn}
                      isDark={isDark}
                    >
                      Gaming
                    </SideBarLiBtn>
                  </Link>
                </SideBarLiItem>

                <SideBarLiItem
                  selected={isSelected === optionConstants.saveBtn}
                  isDark={isDark}
                >
                  <Link to="/saved" style={{textDecoration: 'none'}}>
                    <SideBarLiItemLabels
                      selected={isSelected === optionConstants.saveBtn}
                      isDark={isDark}
                    >
                      <HiOutlineSaveAs size={20} />
                    </SideBarLiItemLabels>
                    <SideBarLiBtn
                      onClick={this.clickBtn}
                      id="SaveBtn"
                      selected={isSelected === optionConstants.saveBtn}
                      isDark={isDark}
                    >
                      Saved Videos
                    </SideBarLiBtn>
                  </Link>
                </SideBarLiItem>
              </SideBarUlCon>
            </SideNavBar>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}
export default SideBarCom
