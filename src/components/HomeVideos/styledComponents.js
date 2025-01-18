import styled from 'styled-components'

export const LiCon = styled.li`
  width: 100%;
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const HomeVideosDtlsCon = styled.div`
  display: flex;

  padding: 20px;
`
export const HomeVideosProfileImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 100%;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`
export const HomeVideosTitleCon = styled.div``
export const HomeVideosTitle = styled.p`
  font-size: 18px;
  font-family: Roboto;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const HomeVideosViewPara = styled.p`
  font-family: Roboto;
  display: flex;
  font-size: 15px;
  align-items: center;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`
