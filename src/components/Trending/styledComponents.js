import styled from 'styled-components'

export const TrendingSideBarCon = styled.div`
  display: flex;
  width: 100%;
`
export const TrendingCon = styled.div`
  width: 100%;
  overflow: scroll;
  max-height: 90vh;
`
export const TrendingTopEmojiHeadingCon = styled.div`
  padding: 40px 100px 40px 100px;
  background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
`

export const TrendingHeadingCon = styled.div`
  display: flex;
  align-items: center;
`

export const EmojiCon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #d7dfe9;
  border-radius: 100%;

  display: flex;
  color: #ff0000;
  align-items: center;
  justify-content: center;
`
export const TrendingHeading = styled.h1`
  font-family: Roboto;
  margin-left: 20px;
  color: ${props => props.isDark && '#ffffff'};
`
export const TrendingBelowCon = styled.div`
  padding: 0.1px 100px 40px 100px;
  background-color: #f4f4f4;
  background-color: ${props => (props.isDark ? '#000000' : '#f4f4f4')};
`
export const TrendingUlCon = styled.ul`
  list-style-type: none;
  padding: 0;
`
