import {Link} from 'react-router-dom'
import {
  GamingItemCon,
  GamingItemThumbnail,
  GamingItemTitle,
  GamingItemViewCount,
} from './styledComponents'

const GamingLiItems = props => {
  const {each, isDark, clickBtn} = props
  const {id, viewCount, title, thumbnailUrl} = each
  const clickBtns = () => {
    clickBtn('')
  }
  return (
    <GamingItemCon>
      <Link
        to={`/videos/${id}`}
        onClick={clickBtns}
        style={{textDecoration: 'none'}}
      >
        <GamingItemThumbnail src={thumbnailUrl} />
        <GamingItemTitle isDark={isDark}>{title}</GamingItemTitle>
        <GamingItemViewCount isDark={isDark}>
          {viewCount} Watching Worldwide
        </GamingItemViewCount>
      </Link>
    </GamingItemCon>
  )
}

export default GamingLiItems
