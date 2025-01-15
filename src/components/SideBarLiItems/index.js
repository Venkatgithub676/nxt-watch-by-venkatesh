import {HiFire, HiOutlineSaveAs} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import GlobalContext from '../../context/GlobalContext'

import {
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
  const {each, isSelected, clickBtn, isDark} = props
  const {category, id, type, text} = each

  const onClickBtn = () => {
    clickBtn(id)
  }

  return (
    <SideBarLiItem selected={isSelected === id} isDark={isDark}>
      <SideBarLiItemLabels selected={isSelected === id} isDark={isDark}>
        <Logos logo={type} />
      </SideBarLiItemLabels>
      <Link to={`/${category}`} style={{textDecoration: 'none'}}>
        <SideBarLiBtn
          isDark={isDark}
          onClick={onClickBtn}
          selected={isSelected === type}
        >
          {text}
        </SideBarLiBtn>
      </Link>
    </SideBarLiItem>
  )
}

export default SideBarLiItems
