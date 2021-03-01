import styled from 'styled-components'

export const Container = styled.div`
  background: #333333;
  display: flex;
  flex-direction: column;
  padding: .5rem 0 1.2rem 1.3rem;
  box-sizing: border-box;
  margin: .3rem 0;
  gap: 1rem;
  height: 50%;
  width: 45%;
`

export const Icon = styled.img`
  margin: 1rem 0 .5rem;
  height: 20%;
  width: 20%;
`

export const CardTitle = styled.h4`
  font-weight: 400;
  font-size: 1.1rem;
  margin: 0; 
`

export const Subtext = styled.p`
  margin: 0;
  font-size: .6rem;
`