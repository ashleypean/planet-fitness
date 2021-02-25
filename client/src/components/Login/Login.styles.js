import styled from 'styled-components'

export const LoginContainer = styled.div`
  font-family: Arial;
  background: #999999;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 5rem 1.5rem; 
  box-sizing: border-box;
`

export const Title = styled.h1`
  font-family: Arial;
  font-weight: 400;
  font-size: 2rem;
  margin: 2rem 0 4rem;
`

export const FormContainer = styled.form`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  gap: 2rem 0;
`
export const LoginRegisterSwitch = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 25%;
`

export const Switch = styled.button`
  width: 50%;
  height: 3rem;
  color: white;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.2rem;
  outline: none;
`
export const InputField = styled.input`
  border: none;
  border-bottom: 1px solid white;
  padding-bottom: .8rem;
  background: none;
  height: 25%;
  
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: white;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: white;
  }
`

export const SignInButton = styled.button`
  color: white;
  font-size: 1rem;
  background: #5D2D84;
  border: none;
  padding: .8rem 0;
  align-self: center;
  width: 80%;
  outline: none;
`

export const Text = styled.a`
  align-self: center;
  font-size: .8rem;
  cursor: pointer;
  outline: none;
`

