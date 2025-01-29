import styled from 'styled-components'

export const GamingItemCon = styled.div`
  width: 30%;

  @media screen and (max-width: 576px) {
    width: 46%;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 30%;
  }
`

export const GamingItemThumbnail = styled.img`
  margin-top: 20px;
  width: 100%;
  @media screen and (max-width: 576px) {
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
  }
`
export const GamingItemTitle = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  margin-bottom: 8px;
  color: ${props => props.isDark && '#ffffff'};
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 16px;
  }
`
export const GamingItemViewCount = styled.p`
  font-family: Roboto;
  font-size: 18px;
  margin-top: 8px;
  color: ${props => (props.isDark ? '#7e858e' : '#616e7c')};
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 16px;
  }
`
