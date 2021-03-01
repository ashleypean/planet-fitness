import styled from 'styled-components'


export const Container = styled.div`
  height: 55%;
  width: 75%;
  background: lightgrey;
  position: fixed; 
  padding: 0 .5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 25%;
  left: 10%;
  font-family: Lato;
  box-sizing: border-box;
  border-radius: 4px;`
Container.displayName = 'Container'



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: .5rem;`
Form.displayName = 'Form'



export const Title = styled.p`
  font-size: 1.2rem;
  color: #424242;`
Title.displayName = 'Title'



export const ExercisePicker = styled.select`
  outline: none;`
ExercisePicker.displayName = 'Input'



export const DateInput = styled.input`
  padding: 1rem 0;
  background: none;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;`
DateInput.displayName = 'DateInput'



export const TimeInput = styled.input`
  padding: 1rem 0;
  background: none;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;`
TimeInput.displayName = 'DateInput'



export const AddButton = styled.button`
  color: white;
  border: none;
  background: #424242;
  margin: 1rem auto;
  text-align: center;
  padding: .8rem 1.5rem;
  font-size: .8rem;
  border-radius: 6px;
  outline: none;`
AddButton.displayName = 'AddButton'