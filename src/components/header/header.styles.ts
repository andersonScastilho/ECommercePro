import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  background: linear-gradient(to right, red, white);
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: black;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const HeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`
export const Headeritems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
  } 
  &:hover {
      cursor: pointer;
    }
    ;
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
    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
`
