import {
  GamingItemCon,
  GamingItemThumbnail,
  GamingItemTitle,
  GamingItemViewCount,
} from './styledComponents'

const GamingLiItems = props => {
  const {each, isDark} = props
  const {viewCount, title, thumbnailUrl} = each

  return (
    <GamingItemCon>
      <GamingItemThumbnail src={thumbnailUrl} />
      <GamingItemTitle isDark={isDark}>{title}</GamingItemTitle>
      <GamingItemViewCount isDark={isDark}>
        {viewCount} Watching Worldwide
      </GamingItemViewCount>
    </GamingItemCon>
  )
}

export default GamingLiItems
