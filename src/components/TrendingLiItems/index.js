import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {
  TrendingLiItem,
  InnerCon,
  TrendingItemThumbnail,
  BioCon,
  TrendingItemMatterConDesktop,
  TrendingItemTitle,
  ChannelNameBio,
  TrendingItemName,
  DotCon,
  TrendingItemViewCount,
  TrendingItemProfileImg,
} from './styledComponents'

const TrendingLiItems = props => {
  const {each, isDark} = props
  //   console.log(each)
  const {id, publishedAt, thumbnailUrl, title, viewCount, channel} = each
  const {name, profileImgUrl} = channel

  return (
    <TrendingLiItem>
      <Link
        to={`/videos/${id}`}
        style={{textDecoration: 'none', color: '#000000'}}
      >
        <InnerCon>
          <TrendingItemThumbnail src={thumbnailUrl} alt="video thumbnail" />
          <BioCon>
            <TrendingItemProfileImg src={profileImgUrl} />
            <TrendingItemMatterConDesktop>
              <TrendingItemTitle isDark={isDark}>{title}</TrendingItemTitle>
              <ChannelNameBio>
                <TrendingItemName isDark={isDark}>{name}</TrendingItemName>
                <DotCon>
                  <BsDot />
                </DotCon>
                <TrendingItemViewCount isDark={isDark}>
                  {viewCount} <BsDot />
                  {formatDistanceToNow(new Date(publishedAt))}
                </TrendingItemViewCount>
              </ChannelNameBio>
            </TrendingItemMatterConDesktop>
          </BioCon>
        </InnerCon>
      </Link>
    </TrendingLiItem>
  )
}

export default TrendingLiItems
