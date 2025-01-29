import styled from 'styled-components'

export const SavedSideBarCon = styled.div`
  display: flex;
  width: 100%;
`
export const SavedCon = styled.div`
  width: 100%;
  overflow: scroll;
  max-height: 90vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const SavedTopEmojiHeadingCon = styled.div`
  padding: 40px 100px 40px 100px;
  background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
  @media screen and (max-width: 576px) {
    padding: 20px 50px 20px 50px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding: 15px 30px 15px 30px;
  }
`

export const SavedHeadingCon = styled.div`
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
export const SavedHeading = styled.h1`
  font-family: Roboto;
  margin-left: 20px;
  color: ${props => props.isDark && '#ffffff'};
`
export const SavedBelowCon = styled.div`
  padding: 0.1px 100px 40px 100px;
  background-color: #f4f4f4;
  min-height: 90vh;
  background-color: ${props => (props.isDark ? '#000000' : '#f4f4f4')};
  @media screen and (max-width: 576px) {
    padding: 0.1px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding: 15px 30px 15px 30px;
  }
`
export const SavedUlCon = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const NoSavedVideosCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const NoSavedVideosImg = styled.img`
  width: 50%;
  max-width: 500px;
  margin-bottom: 30px;
`
export const NoSavedVideosHeading = styled.h1`
  font-size: 30px;
  font-family: Roboto;
  margin-bottom: 10px;
  color: ${props => props.isDark && '#ffffff'};
`
export const NoSavedVideosPara = styled.p`
  font-size: 20px;
  font-family: Roboto;
  margin-top: 10px;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
`
