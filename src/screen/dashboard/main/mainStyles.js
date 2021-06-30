/** @format */

import styled from 'styled-components';

export const MainStyle = styled.div`
  margin-top: 2vh;
  position: relative;
  h1.page-title {
    font-size: 2.5rem;
    font-weight: 400;
    margin-top: 5rem;
    margin-bottom: 0;
  }
  h1 {
    color: ${({ theme }) => theme.black};
  }
  .book-meeting {
    background-color: white;
    border-radius: 20px;
    z-index: 9999999999;
    padding-bottom: 3rem;
    overflow: hidden;
    .header-section {
      padding: 1rem;
      background-color: #44444448;
      display: flex;
      justify-content: center;
      h1 {
        font-size: 1.8rem;
        font-weight: 300;
      }
    }
    .meeting {
      /* overflow: scroll; */
      height: auto;
      padding: 0 5rem;
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      section {
        height: 60px;
        input {
          width: 100%;
        }
      }
    }
  }
  .data-wrapper {
    overflow-y: scroll;
    height: 100vh;
    padding-bottom: 20rem;
    padding-top: 2rem;
    .data {
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-gap: 30px;
      width: 100%;
      align-items: start;
      max-width: 1800px;
      overflow-y: scroll;

      @media (min-width: 50px), (min-width: 200px) {
        grid-template-columns: repeat(1, 1fr);
      }

      @media (min-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width: 1300px) {
        grid-template-columns: repeat(4, 1fr);
      }
      @media (min-width: 1800px) {
        grid-template-columns: repeat(5, 1fr);
      }
    }
  }
`;
