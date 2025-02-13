import {HiFire, HiOutlineSaveAs} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'

import {SideBarLiItem, SideBarLiItemLabels, SideBarLi} from './styledComponents'

const optionConstants = {
  homeBtn: 'HomeBtn',
  trendingBtn: 'TrendingBtn',
  saveBtn: 'SaveBtn',
  gamingBtn: 'GamingBtn',
}

const Logos = props => {
  const {logo} = props
  switch (logo) {
    case optionConstants.homeBtn:
      return <IoMdHome size={20} />
    case optionConstants.trendingBtn:
      return <HiFire size={20} />
    case optionConstants.gamingBtn:
      return <SiYoutubegaming size={20} />
    case optionConstants.saveBtn:
      return <HiOutlineSaveAs size={20} />
    default:
      return null
  }
}

const SideBarLiItems = props => {
  const {each, isDark, originalPath} = props
  const {path, type, text} = each

  console.log(path, originalPath)

  return (
    <Link to={path} style={{textDecoration: 'none', color: '#212121'}}>
      <SideBarLiItem selected={path === originalPath} isDark={isDark}>
        <SideBarLiItemLabels selected={path === originalPath} isDark={isDark}>
          <Logos logo={type} />
        </SideBarLiItemLabels>
        <SideBarLi selected={path === originalPath} isDark={isDark}>
          {text}
        </SideBarLi>
      </SideBarLiItem>
    </Link>
  )
}

export default SideBarLiItems
