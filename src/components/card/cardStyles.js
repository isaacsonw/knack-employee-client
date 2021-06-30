/** @format */

import styled from 'styled-components';

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff59;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  padding-bottom: 1rem;
  box-shadow: ${({ theme }) => theme.bs};
  .base-img {
    .overlay {
      width: 100vw;
      height: 85px;
      background-color: rgb(0, 0, 0, 0.7);
      position: absolute;
    }
    img {
      width: 100vw;
      height: 85px;
      object-fit: cover;
    }
  }
  .avarta {
    position: absolute;
    border: 6px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5rem;
    .status {
      height: 18px;
      width: 18px;

      position: absolute;
      right: -5px;
      border-radius: 50px;
      border: 2px solid white;
      bottom: 10px;
    }
    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  h1,
  h3,
  h4 {
    margin: 0;
  }
  h1.employee_name {
    margin-top: 5rem;
  }
  h3 {
    font-weight: 400;
    margin: 1rem;
    color: ${({ theme }) => theme.black};
  }
  h4 {
    background-color: #d1f1fa;
    padding: 0.2rem 1.5rem;
    border-radius: 5px;
    color: #3e97b2;
  }
  .action {
    height: 6rem;
    margin-top: 2rem;
    background-color: white;
    width: 93%;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.bs};
    display: flex;
    align-items: center;
    .survey {
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffe9d0;
      border-radius: 8px;
      margin-right: 1rem;
      box-shadow: ${({ theme }) => theme.bs};
      cursor: pointer;
      transition: 0.3s ease-in-out;
      :hover {
        box-shadow: none;
      }
      svg {
        font-size: 20px;
        color: #f39931;
      }
    }
    button {
      flex: 1;
      border: none;
      height: 40px;
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.blue}55;
      color: ${({ theme }) => theme.blue};
      background: ${({ available }) =>
        available === 'available' ? 'white' : 'rgb(238, 238, 238)'};
      box-shadow: ${({ theme, available }) =>
        available === 'available' ? theme.bs : null};
      cursor: pointer;
      cursor: ${({ available }) =>
        available === 'available' ? 'pointer' : 'not-allowed'};
      transition: 0.3s ease-in-out;
      :hover {
        box-shadow: none;
      }
    }
  }
`;
