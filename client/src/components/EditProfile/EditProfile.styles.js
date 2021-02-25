import styled from 'styled-components'

export const Container = styled.div`
  background: #999;
  height: 100%;
  width: 100%;
  color: lightgray;
  font-familY: Lato;
  padding: 0 1rem;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: .5rem 0;
`

export const FormContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: lightgray;
`

export const Input = styled.input`
  border: none;
  border-bottom: .5px solid #757575;
  padding-bottom: .8rem;
  background: none;
  height: 7%;
  color: lightgray;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: lightgray;
    opacity: 1; /* Firefox */
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: lightgray;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: lightgray;
  }
`

export const RegisterButton = styled.button`
  color: white;
  font-family: Arial;
  font-size: .8rem;
  background: #5D2D84;
  border: none;
  padding: .8rem 0;
  align-self: center;
  width: 80%;
  outline: none;
  margin: 1rem 0;
`