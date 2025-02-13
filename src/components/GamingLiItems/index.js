import {Link} from 'react-router-dom'
import {
  GamingItemCon,
  GamingItemThumbnail,
  GamingItemTitle,
  GamingItemViewCount,
} from './styledComponents'

const GamingLiItems = props => {
  const {each, isDark} = props
  const {id, viewCount, title, thumbnailUrl} = each

  return (
    <GamingItemCon>
      <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
        <GamingItemThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <GamingItemTitle isDark={isDark}>{title}</GamingItemTitle>
        <GamingItemViewCount isDark={isDark}>
          {viewCount} Watching Worldwide
        </GamingItemViewCount>
      </Link>
    </GamingItemCon>
  )
}

export default GamingLiItems
