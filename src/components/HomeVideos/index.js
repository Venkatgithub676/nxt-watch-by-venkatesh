import {Link} from 'react-router-dom'

import {
  Thumbnail,
  LiCon,
  HomeVideosDtlsCon,
  HomeVideosProfileImg,
  HomeVideosTitleCon,
  HomeVideosTitle,
  HomeVideosViewPara,
} from './styledComponents'

const HomeVideos = props => {
  const {each, isDark, clickBtn} = props

  const {id, thumbnailUrl, publishedAt, viewCount, title, channel} = each
  const {name, profileImgUrl} = channel

  const clickBtns = () => {
    clickBtn('')
  }
  return (
    <Link
      to={`/videos/${id}`}
      style={{
        textDecoration: 'none',
        marginTop: '10px',
        width: '32%',
      }}
      onClick={clickBtns}
    >
      <LiCon isDark={isDark}>
        <Thumbnail src={thumbnailUrl} />
        <HomeVideosDtlsCon>
          <HomeVideosProfileImg src={profileImgUrl} />
          <HomeVideosTitleCon>
            <HomeVideosTitle>{title}</HomeVideosTitle>
            <HomeVideosViewPara>
              {name} . {viewCount} . {publishedAt}{' '}
            </HomeVideosViewPara>
          </HomeVideosTitleCon>
        </HomeVideosDtlsCon>
      </LiCon>
    </Link>
  )
}

export default HomeVideos
