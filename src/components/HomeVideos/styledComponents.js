import styled from 'styled-components'

export const LiCon = styled.li`
  width: 100%;
  @media screen and (max-width: 768px) and (min-width: 576px) {
    width: 48%;
  }
  @media screen and (min-width: 768px) {
    width: 32%;
  }
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  margin-bottom: 20px;
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const HomeVideosDtlsCon = styled.div`
  display: flex;
  padding: 20px;
  @media screen and (max-width: 768px) and (min-width: 576px) {
    padding: 10px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
  }
`
export const HomeVideosProfileImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 100%;
  @media screen and (min-width: 576px) {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`
export const HomeVideosTitleCon = styled.div``
export const HomeVideosTitle = styled.p`
  font-size: 18px;
  font-family: Roboto;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (min-width: 576px) {
    font-size: 15px;
    line-height: 1.5;
  }
`
export const HomeVideosChannelName = styled.p`
  font-family: Roboto;
  display: flex;
  font-size: 15px;
  align-items: center;
  color: #606060;
  margin-top: 8px;
  margin-bottom: 8px;
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`

export const HomeVideosChannelDtls = styled(HomeVideosChannelName)``
