import styled from 'styled-components'

export const TopCon = styled.div``

export const SideBarHomeCon = styled.div`
  display: flex;
`

export const HomeCon = styled.div`
  width: 100%;
  max-height: 90vh;
  overflow: scroll;
`

export const HomePopupCon = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;

  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const TempPopupSection = styled.div`
  width: 100%;
`

export const TempPopupSectionImg = styled.img`
  width: 150px;
`
export const TempPopupSectionHeading = styled.p`
  font-family: Roboto;
  font-size: 20px;
  line-height: 1.5;
`
export const TempPopupSectionBtn = styled.button`
  width: 100px;
  height: 40px;
  border-style: solid;
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  margin-top: 20px;
`

export const CloseButton = styled.button`
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 18px;
`
export const SearchVideosCon = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const SearchCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 30px;
  border-radius: 3px;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const InputSearch = styled.input`
  width: 80%;
  height: 40px;
  font-family: Roboto;
  font-size: 20px;
  padding-left: 20px;

  border-radius: 2px;
  border: 1px solid ${props => (props.isDark ? '#383838' : '#94a3b8')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const SearchLabel = styled.label`
  height: 40px;
  background-color: ${props => (props.isDark ? '#313131' : '#f9f9f9')};
  font-size: 20px;
  width: 20%;
  display: flex;

  justify-content: center;
  align-items: center;
  border: 1px solid ${props => (props.isDark ? '#383838' : '#94a3b8')};
  color: #94a3b8;
  border-radius: 2px;
  @media screen and (min-width: 768px) {
    width: 80px;
  }
`

export const UlCon = styled.ul`
  width: 100%;
  overflow: auto;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  padding: 0px 30px;
  justify-content: space-between;
`
export const LoadingCon = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
