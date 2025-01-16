import {TrendingLiItem, TrendingItemThumbnail} from './styledComponents'

const TrendingLiItems = props => {
  const {each} = props
  const {id, publishedAt, thumbnailUrl, title, viewCount, channel} = each
  const {name, profileImgUrl} = channel

  return (
    <TrendingLiItem>
      <TrendingItemThumbnail src={thumbnailUrl} />
    </TrendingLiItem>
  )
}

export default TrendingLiItems
