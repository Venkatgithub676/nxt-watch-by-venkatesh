import styled from 'styled-components'

export const TrendingLiItem = styled.li`
  margin-bottom: 50px;
  margin-top: 50px;
  display: flex;
`

export const TrendingItemThumbnail = styled.img`
  max-width: 400px;

  margin-right: 20px;
`
export const TrendingItemMatterCon = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendingItemTitle = styled.h1`
  margin-top: 10px;
  font-size: 22px;
  font-family: Roboto;
  margin-bottom: 10px;
  color: ${props => props.isDark && '#ffffff'};
`
export const TrendingItemName = styled.p`
  font-size: 18px;
  font-family: Roboto;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${props => (props.isDark ? '#7e858e' : '#616e7c')};
`
export const TrendingItemViewCount = styled.p`
  display: flex;
  height: 20px;
  align-items: center;
  font-size: 18px;
  margin-top: 10px;
  font-family: Roboto;
  color: ${props => (props.isDark ? '#7e858e' : '#616e7c')};
`
