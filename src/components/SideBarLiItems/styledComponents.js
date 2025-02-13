import styled from 'styled-components'

export const SideBarLiItem = styled.li`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  width: 100%;

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

export const SideBarLiItemLabels = styled.div`
  margin-left: 20px;

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
export const SideBarLi = styled.p`
  margin-left: 20px;
  font-family: Roboto;
  font-size: 17px;
  font-weight: ${props => (props.selected ? 'bold' : '')};
  color: ${props => props.isDark && '#ffffff'}};
  
`
