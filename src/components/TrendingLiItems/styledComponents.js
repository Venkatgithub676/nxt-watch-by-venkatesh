import styled from 'styled-components'

export const TrendingLiItem = styled.li`
  margin-bottom: 50px;
  margin-top: 50px;
  display: flex;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
  }
`
export const InnerCon = styled.div`
  display: flex;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const TrendingItemThumbnail = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 200px;
    margin-right: 20px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 300px;
    height: 200px;
    margin-right: 20px;
  }
`

export const BioCon = styled.div`
  display: flex;
  margin-top: 20px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    margin-top: 0;
  }
`
export const TrendingItemMatterConDesktop = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendingItemTitle = styled.p`
  margin-top: 0px;
  font-size: 22px;
  font-family: Roboto;
  margin-bottom: 10px;
  color: ${props => props.isDark && '#ffffff'};
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 18px;
  }
`

export const ChannelNameBio = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
  height: 30px;
`
export const TrendingItemName = styled.p`
  font-size: 18px;
  font-family: Roboto;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${props => (props.isDark ? '#7e858e' : '#616e7c')};
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
`

export const DotCon = styled.div`
  color: ${props => (props.isDark ? '#7e858e' : '#616e7c')};
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const TrendingItemViewCount = styled.p`
  display: flex;
  height: 20px;
  align-items: center;
  font-size: 18px;

  font-family: Roboto;
  color: ${props => (props.isDark ? '#7e858e' : '#616e7c')};
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
`

export const TrendingProfMatterConMob = styled.div`
  display: flex;
  margin-top: 20px;

  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const TrendingItemsMatterConMobile = styled.div`
  display: flex;
  flex-direction: column;
`

export const TrendingItemProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: 20px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const TrendingItemViewCountMobile = styled(TrendingItemViewCount)`
  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`
