import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  background: linear-gradient(to right, red, white);
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: black;
`
export const HeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
`
export const Headeritems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const HeaderItem = styled.div`
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    margin-right: 40px;
  }
`
