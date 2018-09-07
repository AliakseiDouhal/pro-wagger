import styled from 'styled-components'

export const PlusWrapper = styled.div`
  border-radius: 50%;
  background-color: crimson;
  border: 1px dotted black;
  width: 75px;
  height: 75px;
  position: relative;
  display: flex;
`;

export const Horizontal = styled.div`
  width: 35px;
  height: 5px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: aqua;
  margin: auto;
`;

export const Vertical = styled.div`
  height: 35px;
  margin: auto;
  width: 5px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: aqua;
`;

export const AddWrapper = styled.div `
  width: 200px;
  height: 200px;
  background-color: beige;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover ${Vertical},
  &:hover ${Horizontal}{
    background-color: rebeccapurple;
  }
`;

