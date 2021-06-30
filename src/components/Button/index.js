/** @format */

import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  padding: 1.7vh 10vh;
  border-radius: 12px;
  margin-bottom: 2%;
  font-size: 1.7rem;
  font-family: 'Ubuntu', sans-serif;
  cursor: pointer;
  font-weight: 500;
  -webkit-transition: 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  border: none;
  background: linear-gradient(222.95deg, #ffb905 -1.72%, #f90 81.45%);
  &:disabled {
    background: transparent linear-gradient(180deg, #8a8989 0%, #bfbfbf 100%) 0%
      0% no-repeat padding-box;
    box-shadow: none;
  }
  :hover {
    transition: all 0.3s ease-in-out;
    background: linear-gradient(222.95deg, #f90 -1.72%, #ffb905 81.45%);
  }
`;

export { Button };
