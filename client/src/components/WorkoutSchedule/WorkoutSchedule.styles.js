import styled from 'styled-components'

export const Container = styled.div`
  background: #424242;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  color: lightgray;
  font-family: Lato;
  padding: 0 1rem;
  box-sizing: border-box;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: .5rem 0;
`

export const DayContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: content-box;
`

export const Day = styled.p`
  border-bottom: 1px solid lightgrey;
  padding: 0 .7rem 1.5rem .7rem;
`

export const WorkoutContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #CCCCCC;
`

export const CheckBox = styled.button`
  border-radius: 50%;
  height: 1rem;
  color: #783AAA;
  border: 1px solid #783AAA;
  background: none;
  font-size: .6rem;
  align-self: center;
  outline: none;
`

export const WorkoutDetails = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  height: 100%;
  margin: 0;
  padding: 0 .5rem;
  gap: .4rem;
`

export const WorkoutName = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  padding: 0 .3rem;
`

export const WorkoutTime = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: .6rem;
  padding: 0 .3rem;
`

export const ViewButton = styled.button`
  color: white; 
  border: none;
  align-self: center;
  background: #783AAA;
  border-radius: 4px;
  font-size: .6rem;
  height: 1.2rem;
  padding: 0 .6rem;
  outline: none;
`