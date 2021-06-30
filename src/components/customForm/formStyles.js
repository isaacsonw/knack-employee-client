/** @format */

import styled from 'styled-components';

const FormStylesWrapper = styled.div`
  .info_message {
    margin: 60px auto !important;
    font-size: 11px !important;
  }
  display: flex;
  flex-direction: column;
  .main {
    width: 100%;

    h1 {
      font-size: 27px;
      letter-spacing: 0;
      color: #16313c;
    }
    form {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      position: relative;
      width: 100%;
      .p-dropdown {
        width: 100%;
        border-bottom: 1px solid #9ea1ab;
        text-transform: capitalize;
      }
      .p-dropdown-label.p-inputtext.p-placeholder {
        text-transform: capitalize;
        color: #a4a4a4;
      }
      .p-dropdown-items-wrapper {
        background: #fff;
        box-shadow: 0 2px 4px 0 #dfcece;
      }
      .p-dropdown-panel .p-dropdown-item {
        padding: 0.4em 0.25em;
        :hover {
          background: #ece8e8;
        }
      }
      .p-dropdown-trigger {
        span {
          display: none;
        }
      }
      textarea {
        width: 100%;
        height: 73px;
        border: none;
        border-bottom: 1px solid #9ea1ab;
        resize: none;
        font-size: 15px;
        color: #777777;
      }
      .login__section {
        display: flex;
        width: 100%;
        margin-bottom: 1.7em;
        svg {
          border-bottom: 1px solid #9ea1ab;
          height: 29px;
        }
        input {
          width: 100%;
          border: 1px solid #44444438;
          color: #777777;
          border-radius: 12px;
          padding: 1.7vh 4vh;
          font-size: 1.6vh;
          margin-bottom: 0.5em;
          :focus {
            outline: none !important;
          }
        }
        .invalid-feedback {
          color: #ff795e;
          font-weight: 500;
          text-transform: capitalize;
          margin-top: 5.5vh;
          margin-left: 1vh;
          position: absolute;
        }
      }
    }
    p,
    a {
      font: Light 22px/33px Montserrat;
      letter-spacing: 0.55px;
      color: #0b132b52;
      margin-top: 2rem;
      margin-bottom: 2.5rem;

      span,
      a {
        text-decoration: none !important;
        color: #16313c;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        :hover {
          opacity: 0.6;
        }
      }
    }
    .forgot {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-top: 3em;
      p,
      a {
        font: Light 22px/33px Montserrat;
        letter-spacing: 0.55px;
        color: #9f9f9f;
        cursor: pointer;
        border-radius: 4px;
        padding: 10px;
        font-size: 13px;

        transition: 0.3s ease-in-out;
        :hover {
          color: #444;
          background: #44444422;
        }
      }
    }
  }
`;

export { FormStylesWrapper };
