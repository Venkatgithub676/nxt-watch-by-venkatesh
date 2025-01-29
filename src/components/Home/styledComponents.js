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
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
`
export const SearchVideosCon = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  min-height: 90vh;
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
  font-size: 15px;
  padding-left: 20px;
  padding-right: 20px;
  outline: none;
  border-radius: 2px;
  color: ${props => props.isDark && '#ffffff'};
  border: 1px solid ${props => (props.isDark ? '#383838' : '#94a3b8')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const SearchBtn = styled.button`
  height: 40px;
  background-color: ${props => (props.isDark ? '#313131' : '#f9f9f9')};
  font-size: 20px;
  width: 20%;
  display: flex;
  cursor: pointer;
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
  justify-content: space-between;
  padding: 0px 30px;
  @media screen and (max-width: 576px) {
    padding: 0;
  }
`
export const NoVideosCon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
export const NoVideosImg = styled.img`
  width: 50%;
  max-width: 500px;
`
export const NoVideosHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  margin-bottom: 10px;
  color: ${props => props.isDark && '#ffffff'};
`
export const NoVideosPara = styled.p`
  color: #7e858e;
  font-size: 18px;
  font-family: Roboto;
  margin-top: 10px;
`
export const NoVideosRetryBtn = styled.button`
  width: 100px;
  height: 40px;
  font-family: Roboto;
  font-size: 15px;
  background-color: #4f46e5;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  border: none;
`

export const LoadingCon = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`
