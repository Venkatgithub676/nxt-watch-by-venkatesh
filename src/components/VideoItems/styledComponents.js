import styled from 'styled-components'

export const VideoDtlsCon = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const VideoItemsSideBarCon = styled.div`
  display: flex;
`
export const VideoItemsCon = styled.div`
  width: 100%;
  padding: 50px 30px 30px 30px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => props.isDark && '#ffffff'};

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

export const VideoPlayer = styled.div`
  width: 100%;
  height: 80vh;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
    height: 250px;
  }
`
export const VideoItemsMatterCon = styled.div`
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`

export const LoadingCon = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const VideoItemTitle = styled.p`
  font-family: Roboto;
  font-size: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const ViewsLikesCon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const Views = styled.p`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-size: 15px;
  color: ${props => (props.isDark ? ' #94a3b8' : '#616e7c')};
  @media screen and (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 20px;
  }
`
export const LikesSaveCon = styled.div`
  display: flex;
`
export const LikeCon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  width: 80px;
  justify-content: center;
`
export const LikeButton = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 15px;
  height: 20px;

  color: ${props => (props.liked ? '#2563eb' : '#64748b')};
  @media screen and (max-width: 768px) {
    margin-right: 2px;
  }
`
export const LikeLabel = styled.div`
  font-family: Roboto;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  color: ${props => (props.liked ? '#2563eb' : '#64748b')};

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const DislikeCon = styled(LikeCon)``
export const DislikeButton = styled(LikeButton)`
  color: ${props => (props.disliked ? '#2563eb' : '#64748b')};
`

export const DisikeLabel = styled(LikeLabel)`
  color: ${props => (props.disliked ? '#2563eb' : '#64748b')};
`

export const MediaCon = styled(LikeCon)`
  width: 90px;
`
export const MediaButton = styled(LikeButton)`
  color: ${props => (props.saved ? '#2563eb' : '#64748b')};
  width: 40px;
`
export const MediaLabel = styled(LikeLabel)`
  color: ${props => (props.saved ? '#2563eb' : '#64748b')};
  }};
`

export const HorizantalLine = styled.hr`
  border-color: #f1f1f1;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`

export const ChannelDetailsCon = styled.div`
  display: flex;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
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
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const ChannelSubs = styled.p`
  font-family: Roboto;
  font-size: 15px;
  margin-top: 0px;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  @media screen and (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 0;
  }
`
export const ChannelDesc = styled(ChannelSubs)`
  font-size: 16px;
  margin-top: 20px;
  margin-left: 80px;
  color: ${props => (props.isDark ? ' #ebebeb' : '#616e7c')};
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-left: 0;
  }
`
