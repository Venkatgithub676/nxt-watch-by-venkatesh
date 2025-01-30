import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import {
  SavedLiItem,
  SavedInternalCon,
  SavedItemThumbnail,
  SavedItemMatterConDesktop,
  SavedItemTitle,
  SavedItemName,
  SavedItemViewCount,
  SavedProfMatterConMob,
  SavedItemsMatterConMobile,
  SavedItemViewCountMobile,
  SavedItemProfileImg,
} from './styledComponents'

const SavedLiItems = props => {
  const {each, isDark, clickBtn} = props
  const {id, publishedAt, thumbnailUrl, title, viewCount, channel} = each
  const {name, profileImgUrl} = channel

  const clickBtns = () => {
    clickBtn('')
  }

  return (
    <SavedLiItem>
      <Link
        to={`/videos/${id}`}
        onClick={clickBtns}
        style={{textDecoration: 'none', color: '#000000'}}
      >
        <SavedInternalCon>
          <SavedItemThumbnail src={thumbnailUrl} alt="video thumbnail" />
          <SavedItemMatterConDesktop>
            <SavedItemTitle isDark={isDark}>{title}</SavedItemTitle>
            <SavedItemName isDark={isDark}>{name}</SavedItemName>
            <SavedItemViewCount isDark={isDark}>
              {viewCount} <BsDot /> {formatDistanceToNow(new Date(publishedAt))}
            </SavedItemViewCount>
          </SavedItemMatterConDesktop>
          <SavedProfMatterConMob>
            <SavedItemProfileImg src={profileImgUrl} />
            <SavedItemsMatterConMobile>
              <SavedItemTitle isDark={isDark}>{title}</SavedItemTitle>
              <SavedItemViewCountMobile>
                {name} <BsDot /> {viewCount} <BsDot />
                {formatDistanceToNow(new Date(publishedAt))}
              </SavedItemViewCountMobile>
            </SavedItemsMatterConMobile>
          </SavedProfMatterConMob>
        </SavedInternalCon>
      </Link>
    </SavedLiItem>
  )
}

export default SavedLiItems
