/** @format */

import styled from 'styled-components';

/** @format */

export const StyledBurger = styled.button`
  background-color: ${({ theme }) => theme.blue};
  height: 60px;
  width: 55px;
  position: absolute;
  border-radius: 0 8px 8px 0;
  z-index: 22222;
  left: 34vh;
  top: 2.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s linear;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-35vh)')};

  section {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    transition: all 0.5s linear;
    &:focus {
      outline: none;
    }

    div {
      width: 2.2rem;
      height: 0.25rem;
      background: white;
      border-radius: 10px;
      transition: all 0.5s linear;
      position: relative;
      transform-origin: 2px;

      :first-child {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? '0' : '1')};
        transform: ${({ open }) =>
          open ? 'translateX(20px)' : 'translateX(0)'};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
  @media (max-width: 920px) {
    transform: ${({ open }) =>
      !open ? 'translateX(-35vh)' : 'translateX(-2vh)'};
  }
  /* @media (min-width: 1520px) {
    transform: ${({ open }) =>
    open ? 'translateX(-35vh)' : 'translateX(-2vh)'};
  } */
`;
