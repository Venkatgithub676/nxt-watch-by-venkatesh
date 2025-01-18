import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {
  TrendingLiItem,
  TrendingItemThumbnail,
  TrendingItemMatterCon,
  TrendingItemTitle,
  TrendingItemName,
  TrendingItemViewCount,
} from './styledComponents'

const TrendingLiItems = props => {
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
      <TrendingLiItem>
        <TrendingItemThumbnail src={thumbnailUrl} />
        <TrendingItemMatterCon>
          <TrendingItemTitle isDark={isDark}>{title}</TrendingItemTitle>
          <TrendingItemName isDark={isDark}>{name}</TrendingItemName>
          <TrendingItemViewCount isDark={isDark}>
            {viewCount} <BsDot /> {formatDistanceToNow(new Date(publishedAt))}
          </TrendingItemViewCount>
        </TrendingItemMatterCon>
      </TrendingLiItem>
    </Link>
  )
}

export default TrendingLiItems
