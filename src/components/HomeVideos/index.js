import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {
  Thumbnail,
  LiCon,
  HomeVideosDtlsCon,
  HomeVideosProfileImg,
  HomeVideosTitleCon,
  HomeVideosTitle,
  HomeVideosChannelName,
  HomeVideosChannelDtls,
} from './styledComponents'

const HomeVideos = props => {
  const {each, isDark, clickBtn} = props

  const {id, thumbnailUrl, publishedAt, viewCount, title, channel} = each
  const {name, profileImgUrl} = channel

  const clickBtns = () => {
    clickBtn('')
  }
  return (
    <LiCon isDark={isDark}>
      <Link
        to={`/videos/${id}`}
        style={{
          textDecoration: 'none',
        }}
      >
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <HomeVideosDtlsCon>
          <HomeVideosProfileImg src={profileImgUrl} alt="channel logo" />
          <HomeVideosTitleCon>
            <HomeVideosTitle isDark={isDark}>{title}</HomeVideosTitle>
            <HomeVideosChannelName>{name}</HomeVideosChannelName>
            <HomeVideosChannelDtls>
              {viewCount} . {formatDistanceToNow(new Date(publishedAt))}
            </HomeVideosChannelDtls>
          </HomeVideosTitleCon>
        </HomeVideosDtlsCon>
      </Link>
    </LiCon>
  )
}

export default HomeVideos
