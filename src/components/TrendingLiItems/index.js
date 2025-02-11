import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {
  TrendingLiItem,
  InnerCon,
  TrendingItemThumbnail,
  TrendingItemMatterConDesktop,
  TrendingItemTitle,
  TrendingItemName,
  TrendingItemViewCount,
  TrendingProfMatterConMob,
  TrendingItemsMatterConMobile,
  TrendingItemViewCountMobile,
  TrendingItemProfileImg,
} from './styledComponents'

const TrendingLiItems = props => {
  const {each, isDark, clickBtn} = props
  //   console.log(each)
  const {id, publishedAt, thumbnailUrl, title, viewCount, channel} = each
  const {name, profileImgUrl} = channel

  const clickBtns = () => {
    clickBtn('')
  }

  return (
    <TrendingLiItem>
      <Link
        to={`/videos/${id}`}
        style={{textDecoration: 'none', color: '#000000'}}
      >
        <InnerCon>
          <TrendingItemThumbnail src={thumbnailUrl} alt="video thumbnail" />
          <TrendingItemMatterConDesktop>
            <TrendingItemTitle isDark={isDark}>{title}</TrendingItemTitle>
            <TrendingItemName isDark={isDark}>{name}</TrendingItemName>
            <TrendingItemViewCount isDark={isDark}>
              {viewCount} <BsDot /> {formatDistanceToNow(new Date(publishedAt))}
            </TrendingItemViewCount>
          </TrendingItemMatterConDesktop>
        </InnerCon>
      </Link>
    </TrendingLiItem>
  )
}

export default TrendingLiItems
