import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import {
  SavedLiItem,
  SavedItemThumbnail,
  SavedItemMatterCon,
  SavedItemTitle,
  SavedItemName,
  SavedItemViewCount,
} from './styledComponents'

const SavedLiItems = props => {
  const {each, isDark, clickBtn} = props
  const {id, publishedAt, thumbnailUrl, title, viewCount, channel} = each
  const {name} = channel

  const clickBtns = () => {
    clickBtn('')
  }

  return (
    <Link
      to={`/videos/${id}`}
      onClick={clickBtns}
      style={{textDecoration: 'none', color: '#000000'}}
    >
      <SavedLiItem>
        <SavedItemThumbnail src={thumbnailUrl} />
        <SavedItemMatterCon>
          <SavedItemTitle isDark={isDark}>{title}</SavedItemTitle>
          <SavedItemName isDark={isDark}>{name}</SavedItemName>
          <SavedItemViewCount isDark={isDark}>
            {viewCount} <BsDot /> {formatDistanceToNow(new Date(publishedAt))}
          </SavedItemViewCount>
        </SavedItemMatterCon>
      </SavedLiItem>
    </Link>
  )
}

export default SavedLiItems
