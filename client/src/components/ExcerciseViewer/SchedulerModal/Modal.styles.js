import styled from 'styled-components'


export const Container = styled.div`
  height: 25%;
  width: 75%;
  background: lightgrey;
  position: fixed; 
  padding: 0 .5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 45%;
  left: 10%;
  font-family: Lato;
  box-sizing: border-box;
  border-radius: 4px;`
Container.displayName = 'Container'




export const DateInput = styled.input`
  padding: 1rem 0;
  background: none;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;`
DateInput.displayName = 'DateInput'


export const AddButton = styled.button`
  color: white;
  border: none;
  background: #424242;
  margin: 1rem auto;
  text-align: center;
  padding: .5rem 1.5rem;
  font-size: .8rem;
  border-radius: 6px;
  outline: none;`
AddButton.displayName = 'AddButton'