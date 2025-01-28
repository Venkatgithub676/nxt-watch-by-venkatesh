import styled from 'styled-components'

export const LoginCon = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
`
export const FormCon = styled.form`
  padding: 40px;
  box-shadow: ${props => (props.isDark ? '' : '0px 5px 10px 5px #d7dfe9')};
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const FormImg = styled.img`
  width: 200px;
  margin-bottom: 50px;
`
export const FormUsername = styled.label`
  align-self: flex-start;
  font-family: 'Roboto';
  color: #424242;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 12px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`

export const FormUserInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-family: 'Roboto';
  border: 1px solid ${props => (props.isDark ? '#64748b' : '#cccccc')};
  outline: none;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const FormPassLabel = styled(FormUsername)``
export const FormPasswordInput = styled(FormUserInput)``
export const FormCheckBoxCon = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
`
export const FormCheckBoxInput = styled.input`
  margin-right: 10px;
  width: 15px;
  height: 15px;
`
export const FormCheckBoxLabel = styled.label`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
export const FormLoginBtn = styled.button`
  width: 100%;
  background-color: #3b82f6;
  color: #ffffff;
  height: 40px;
  border-radius: 8px;
  border: none;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: red;
  align-self: flex-start;
`
