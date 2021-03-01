import styled from 'styled-components'

export const Container = styled.div`
  height: 50%;
  width: 75%;
  background: lightgrey;
  position: fixed; 
  padding: 0 .5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 30%;
  left: 10%;
  font-family: Lato;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: scroll;`
Container.displayName = 'Container'


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1rem 0;`
Form.displayName = 'Form'


export const GoalInput = styled.input`
  border-radius: 4px;
  border: 1px solid lightgrey;
  margin: .2rem 0 1rem;
  padding: .5rem .8rem;
  outline: none;`
GoalInput.displayName = 'Input'


export const GoalDescription = styled.textarea`
  border-radius: 4px;
  border: 1px solid lightgrey;
  margin: .2rem 0 1rem
  padding: 1rem 0;
  outline: none;
  max-width: 165px;
  max-height: 120px;`
GoalDescription.displayName = 'GoalDescription'


export const Label = styled.label`
  display: block;
  align-self: start;
`
Label.displayName = 'Label'


export const SubmitButton = styled.button`
  color: white;
  border: none;
  background: #424242;
  margin: 1rem auto;
  text-align: center;
  padding: .5rem 1.5rem;
  font-size: .8rem;
  border-radius: 6px;
  outline: none;`
SubmitButton.displayName = 'Submitbutton'
