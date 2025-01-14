import styled from 'styled-components'

export const SideBarLiItem = styled.li`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 10px 5px 10px;
  font-family: Roboto;
  background-color: ${props => {
    if (props.isDark && props.selected) {
      return '#383838'
    }
    if (!props.isDark && props.selected) {
      return '#d7dfe9'
    }
    return ''
  }};
`

export const SideBarLiItemLabels = styled.label`
  color: ${props => {
    if (props.isDark && props.selected) {
      return '#ff0000'
    }
    if (!props.isDark && props.selected) {
      return '#ff0000'
    }
    if (!props.isDark && !props.selected) {
      return '#212121'
    }
    return '#ffffff'
  }};
`
export const SideBarLiBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color:transparent;
  height:40px;
  margin-left: 20px;
  font-family: Roboto;
  font-size: 17px;
  cursor: pointer;
  
  font-weight: ${props => (props.selected ? 'bold' : '')};
  color: ${props => props.isDark && '#ffffff'}};
  
`
