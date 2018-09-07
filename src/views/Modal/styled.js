import styled from 'styled-components'

export const ModalWrapper = styled.div` 
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(190, 190, 190, 0.88);
  z-index: 3;
  flex-direction: column;
`

export const CloseButton = styled.button `
  background-color: transparent;
  border: solid 3px white;
  color: white;
  font-size: 22px;
  width: 200px;
  height: 50px;
  transition: all 300ms ease-in-out;
  &:hover {
    background-color: white;
    border: solid 3px white;
    color: rgba(190, 190, 190, 0.88);
    font-size: 22px;
  }
`
