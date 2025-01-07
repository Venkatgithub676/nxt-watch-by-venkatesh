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
  const {each, isDark} = props

  const {thumbnailUrl, publishedAt, viewCount, title, channel} = each
  const {name, profileImgUrl} = channel

  return (
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
  )
}

export default HomeVideos
