import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {
  TrendingLiItem,
  TrendingItemThumbnail,
  TrendingItemMatterCon,
  TrendingItemTitle,
  TrendingItemName,
  TrendingItemViewCount,
} from './styledComponents'

const TrendingLiItems = props => {
  const {each, isDark} = props
  const {publishedAt, thumbnailUrl, title, viewCount, channel} = each
  const {name} = channel

  return (
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
  )
}

export default TrendingLiItems
