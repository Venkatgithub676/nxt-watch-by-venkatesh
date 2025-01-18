import styled from 'styled-components'

export const GamingItemCon = styled.div``

export const GamingItemThumbnail = styled.img`
  margin-top: 40px;
  width: 300px;
`
export const GamingItemTitle = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  margin-bottom: 8px;
  color: ${props => props.isDark && '#ffffff'};
`
export const GamingItemViewCount = styled.p`
  font-family: Roboto;
  font-size: 18px;
  margin-top: 8px;
  color: ${props => (props.isDark ? '#7e858e' : '#616e7c')};
`
