/** @format */

import styled from 'styled-components';

export const Signuptyles = styled.div`
  .main-form-body {
    display: flex;
    width: 100%;
    justify-content: center;
    height: 100vh;
    aside {
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    aside:nth-child(1) {
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme.blue};
      background-size: cover;
      background-repeat: no-repeat;
      align-items: flex-start;
      padding: 8vh;

      span {
        color: ${({ theme }) => theme.blue};
        background: white;
        padding: 2px 1.5rem;
        font-size: 1.1vh;
        font-weight: 600;
        text-transform: uppercase;
        border-radius: 50px;
        letter-spacing: 1px;
        margin-bottom: 2vh;
      }

      h1 {
        font-size: 5vh;
        line-height: 1.1;
        font-weight: 200;
        margin: 2% 0;
        span {
          color: ${({ theme }) => theme.orange};
          background: none;
          font-size: 6vh;
          font-weight: 800;
          padding: 0;
        }
      }
      p {
        font-size: 1.6vh;
        line-height: 1.5;
        font-weight: 300;
        opacity: 0.9;
      }
      img {
        width: 100%;
        margin-top: 5rem;
        transform: rotateY(180deg);
      }

      h5 {
        font-size: 1.6vh;
        line-height: 1.5;
        font-weight: 300;
        opacity: 0.5;
      }
    }
    aside:nth-child(2) {
      width: 70%;
      .container {
        width: 40%;
        h1 {
          margin: 0;
          font-size: 5vh;
          font-weight: 500;
          color: ${({ theme }) => theme.black};
        }
        .forgot-password {
          color: ${({ theme }) => theme.black};
          font-size: 1.3vh;
          margin: 0;
          margin-bottom: 2rem;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          :hover {
            opacity: 0.7;
          }
        }
        .no-account {
          font-size: 1.5vh;
          color: ${({ theme }) => theme.black};
          span {
            font-weight: 700;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            :hover {
              opacity: 0.7;
            }
          }
        }
      }
    }
  }

  @media (max-width: 950px) {
    section {
      display: flex;
      flex-direction: column-reverse;
      height: 100% !important;
      aside {
        width: 100%;
      }
      aside:nth-child(1) {
        width: 100%;
        padding: 5rem !important;
        img {
          width: 100%;
        }
      }
      aside:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100% !important;
        padding: 5rem 1rem !important;

        .container {
          width: 80% !important;
          section {
            flex-direction: row;
          }
        }
      }
    }
  }
`;
