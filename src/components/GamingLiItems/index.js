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
    <Link
      to={`/videos/${id}`}
      onClick={clickBtns}
      style={{textDecoration: 'none', color: '#000000'}}
    >
      <GamingItemCon>
        <GamingItemThumbnail src={thumbnailUrl} />
        <GamingItemTitle isDark={isDark}>{title}</GamingItemTitle>
        <GamingItemViewCount isDark={isDark}>
          {viewCount} Watching Worldwide
        </GamingItemViewCount>
      </GamingItemCon>
    </Link>
  )
}

export default GamingLiItems
