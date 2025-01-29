import styled from 'styled-components'

export const NotFoundCon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  min-height: 90vh;
  justify-content: center;
  background-color: ${props => props.isDark && '#181818'};
`
export const NotFoundImg = styled.img`
  width: 40%;
  max-width: 400px;
  @media screen and (max-width: 768px) {
    width: 70%;
    max-width: 400px;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  margin-bottom: 10px;
  color: ${props => props.isDark && '#ffffff'};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const NotFoundPara = styled.p`
  font-family: Roboto;
  font-size: 16px;
  margin-top: 10px;
  color: ${props => props.isDark && '#ffffff'};
  @media screen and (max-width: 768px) {
    font-size: 15px;
    text-align: center;
  }
`

export const NotFoundSideBarCon = styled.div`
  display: flex;
`
