import {HiFire, HiOutlineSaveAs} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'

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
  const {path, id, type, text} = each

  const onClickBtn = () => {
    clickBtn(id)
  }
  console.log(path)

  return (
    <Link to={path} style={{textDecoration: 'none'}} margin={{top: 5}}>
      <SideBarLiItem selected={isSelected === id} isDark={isDark}>
        <SideBarLiItemLabels selected={isSelected === id} isDark={isDark}>
          <Logos logo={type} />
        </SideBarLiItemLabels>

        <SideBarLiBtn
          isDark={isDark}
          onClick={onClickBtn}
          selected={isSelected === id}
        >
          {text}
        </SideBarLiBtn>
      </SideBarLiItem>
    </Link>
  )
}

export default SideBarLiItems
