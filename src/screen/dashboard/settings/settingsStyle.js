/** @format */

import styled from 'styled-components';

export const SettingsStyle = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.black};
  margin-top: 5rem;

  div {
    background-color: white;
  }

  .avarta {
    img {
      height: 10rem;
      width: 10rem;
    }
  }
  .action {
    display: none;
  }
  h1.employee_name {
    margin-top: 10rem;
    font-size: 3rem;
  }
  h3 {
    font-size: 2rem;
    font-style: italic;
  }
  h4 {
    margin-bottom: 5rem;
  }
  h1.page-title {
    margin: 2rem 0;
    font-size: 3rem;
    font-weight: 300;
  }
  .more {
    border-top: 1px solid #44444455;
    margin-bottom: 3rem;
    div {
      display: flex;
      align-items: center;
      width: 50rem;
      justify-content: space-between;
      h1 {
        font-weight: 300;
        margin: 1rem 0;
        font-size: 1.7rem;
      }
      span {
        font-weight: 500;
        text-align: right;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.blue};
      }
    }
  }
`;
