/** @format */

import styled from 'styled-components';

export const ModalStyles = styled.div`
  position: fixed;
  background-color: #00000088;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 8888888;
  display: ${({ openModal }) => (openModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  .close {
    position: absolute;
    right: 10rem;
    top: 10rem;
    height: 60px;
    width: 60px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 50rem;
    cursor: pointer;
    h1 {
      color: salmon;
      font-size: 4rem;
      font-weight: 200;
      margin: 0;
      padding: 0;
      transform: rotateX(-45deg);
      transition: 0.3s;
      :hover {
        transform: rotate(180deg) rotateX(-45deg);
      }
    }
  }
`;
