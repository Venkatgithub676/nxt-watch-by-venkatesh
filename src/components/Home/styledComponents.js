import styled from 'styled-components'

export const SideBarHomeCon = styled.div`
  display: flex;
`
export const SideNavBar = styled.div`
  width: 25%;
`

export const SideBarUlCon = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`

export const SideBarLiItem = styled.li`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 5px 10px 5px;
  font-family: Roboto;
  background-color: ${props => props.selected && '#f4f4f4'};
`

export const SideBarLiBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.selected ? '#ff0000' : '#000000')};
`
export const SideBarLiItemLabels = styled.label`
  margin-left: 20px;
  font-family: Roboto;
  font-size: 17px;
  cursor: pointer;
  font-weight: ${props => (props.selected ? 'bold' : '')};
`

export const HomeCon = styled.div`
  width: 100%;
`

export const HomePopupCon = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
`
export const TempPopupSection = styled.div`
  width: 70%;
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
`

export const UlCon = styled.ul`
  width: 100%;

  list-style-type: none;
  padding: 0;
`
export const LoadingCon = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
