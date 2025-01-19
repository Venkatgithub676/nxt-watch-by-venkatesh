import styled from 'styled-components'

export const VideoItemsSideBarCon = styled.div`
  display: flex;
`
export const VideoItemsCon = styled.div`
  width: 100%;
  padding: 50px 30px 30px 30px;
  background-color: ${props => props.isDark && '#000000'};
  color: ${props => props.isDark && '#ffffff'};
`
export const LoadingCon = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const VideoItemTitle = styled.p`
  font-family: Roboto;
  font-size: 20px;
  margin-bottom: 10px;
`

export const ViewsLikesCon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
`
export const Views = styled.p`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-size: 15px;
  color: ${props => (props.isDark ? ' #94a3b8' : '#616e7c')};
`
export const LikesSaveCon = styled.div`
  display: flex;
`
export const LikeCon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`
export const LikeButton = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 4px;
  cursor: pointer;
  color: ${props => {
    if (props.isDark && props.liked) {
      return '#ffffff'
    }
    if (!props.isDark && props.liked) {
      return 'blue'
    }
    return '#616e7c'
  }};
  height: 30px;
  cursor: pointer;
`
export const LikeLabel = styled.label`
  font-family: Roboto;
  font-size: 17px;
  color: ${props => {
    if (props.isDark && props.liked) {
      return '#ffffff'
    }
    if (!props.isDark && props.liked) {
      return 'blue'
    }
    return '#616e7c'
  }};
  height: 30px;
`

export const DislikeCon = styled(LikeCon)``
export const DislikeButton = styled(LikeButton)`
  color: ${props => {
    if (props.isDark && props.disliked) {
      return '#ffffff'
    }
    if (!props.isDark && props.disliked) {
      return 'blue'
    }
    return '#616e7c'
  }};
`

export const DisikeLabel = styled(LikeLabel)`
  color: ${props => {
    if (props.isDark && props.disliked) {
      return '#ffffff'
    }
    if (!props.isDark && props.disliked) {
      return 'blue'
    }
    return '#616e7c'
  }};
`

export const MediaCon = styled(LikeCon)``
export const MediaButton = styled(LikeButton)`
  color: ${props => {
    if (props.isDark && props.saved) {
      return '#ffffff'
    }
    if (!props.isDark && props.saved) {
      return 'blue'
    }
    return '#616e7c'
  }};
`
export const MediaLabel = styled(LikeLabel)`
  color: ${props => {
    if (props.isDark && props.saved) {
      return '#ffffff'
    }
    if (!props.isDark && props.saved) {
      return 'blue'
    }
    return '#616e7c'
  }};
`

export const HorizantalLine = styled.hr`
  border-color: #f1f1f1;
`

export const ChannelDetailsCon = styled.div`
  display: flex;
  margin-top: 30px;
`

export const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`
export const ChannelDetails = styled.div``
export const ChannelName = styled.p`
  font-family: Roboto;
  margin-top: 0;
  margin-bottom: 10px;
`
export const ChannelSubs = styled.p`
  font-family: Roboto;
  font-size: 15px;
  margin-top: 0px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
`
export const ChannelDesc = styled(ChannelSubs)`
  font-size: 16px;
  margin-top: 40px;
  color: ${props => (props.isDark ? ' #ebebeb' : '#616e7c')};
`
