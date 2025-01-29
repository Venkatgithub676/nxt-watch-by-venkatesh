import styled from 'styled-components'

export const SavedLiItem = styled.li`
  margin-bottom: 50px;
  margin-top: 50px;
  display: flex;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const SavedItemThumbnail = styled.img`
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
export const SavedItemMatterConDesktop = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const SavedItemTitle = styled.p`
  margin-top: 10px;
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
export const SavedItemName = styled.p`
  font-size: 18px;
  font-family: Roboto;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${props => (props.isDark ? '#7e858e' : '#616e7c')};
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
`
export const SavedItemViewCount = styled.p`
  display: flex;
  height: 20px;
  align-items: center;
  font-size: 18px;
  margin-top: 10px;
  font-family: Roboto;
  color: ${props => (props.isDark ? '#7e858e' : '#616e7c')};
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
`

export const SavedProfMatterConMob = styled.div`
  display: flex;
  margin-top: 20px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const SavedItemsMatterConMobile = styled.div`
  display: flex;
  flex-direction: column;
`

export const SavedItemProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: 20px;
`

export const SavedItemViewCountMobile = styled(SavedItemViewCount)`
  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`
