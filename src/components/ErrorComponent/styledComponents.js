import styled from 'styled-components'

export const ErrorCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: center;
  background-color: ${props => props.isDark && '#181818'};
`

export const ErrorImg = styled.img`
  width: 30%;
  max-width: 300px;
`
export const ErrorHeading = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  margin-bottom: 10px;
  color: ${props => props.isDark && '#ffffff'};
`
export const ErrorPara = styled.p`
  font-family: Roboto;
  font-size: 20px;
  margin-top: 10px;
  color: #616e7c;
`
export const ErrorRetryBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-family: Roboto;
  cursor: pointer;
  background-color: #4f46e5;
  color: #ffffff;
  font-weight: 500;
`
