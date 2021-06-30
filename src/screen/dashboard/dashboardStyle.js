/** @format */

import styled from 'styled-components';

export const DashboardStyle = styled.div`
  background-color: #ebf4fd;
  position: relative;
  section {
    display: flex;
    height: 100vh;

    .side-bar {
      background-color: ${({ theme }) => theme.blue};
      box-shadow: ${({ theme }) => theme.bs};
      width: ${({ open }) => (open ? '35vh' : 0)};
      position: relative;
      transform: ${({ open }) =>
        open ? 'translateX(0)' : 'translateX(-400px)'};
      height: 95vh;
      margin-right: ${({ open }) => (open ? '1vh' : '0')};
      margin-left: ${({ open }) => (open ? '2vh' : '0')};
      align-self: center;
      transition: 0.5s;
      z-index: 1;
      border-radius: 20px;
      padding: ${({ open }) => (open ? '3vh 3vh' : null)};
      display: flex;
      flex-direction: column;
      align-items: start;

      .logo {
        background-color: ${({ theme }) => theme.orange};
        padding: 1vh 7vh;
        color: white;
        font-size: 2vh;
        transform: skew(-10deg);

        display: block;
        border-radius: 10px;
        margin-left: 2vh;
      }
      .profile {
        display: flex;
        align-self: start;
        justify-content: space-between;
        align-items: center;

        .avatar {
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: center;
          height: 6vh;
          width: 6vh;
          border-radius: 100%;
          background-color: #08d4fb;
          margin-right: 2rem;
          margin-left: 2vh;

          h1 {
            color: ${({ theme }) => theme.blue};
            margin: 0;
            padding: 0;
            font-size: 1.8vh;
          }
        }
        .profile-name {
          color: white;
          font-size: 1.3vh;
          h2 {
            margin: 0;
          }
          p {
            margin: 0;
          }
        }
      }
      .line {
        height: 1px;
        width: 100%;
        background-color: #ffffff22;
        margin: 3vh 0;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 100%;
        display: flex;
        flex-direction: column;

        li {
          margin: 2vh 0;
          a {
            font-size: 2vh;
            padding: 1vh 3vh;
            position: relative;
            width: 100%;
            z-index: 555555;
            color: white;
            border-radius: 10px;
            svg {
              top: 3px;
              right: 10px;

              position: relative;
            }
            .bg {
              position: absolute;
              display: none;
            }
            :focus {
              outline: none;
              background-color: none;
            }
            :hover {
              background: #e6e9ff38;
            }
          }

          a.selected {
            color: ${({ theme }) => theme.blue};

            .bg {
              display: flex;
              height: 4.5vh;
              width: 25vh;
              background: #e6e9ff88;
              position: absolute;
              transition: 0.3s ease-in;
              top: 0.2vh;
              border-radius: 10px;
              z-index: -1;
            }
            transition: 0.5s;
          }
        }
        li:last-child {
          margin-top: auto;
          margin-bottom: 5vh;
          font-size: 2vh;
          padding: 1vh 3vh;
          position: relative;
          width: 100%;
          z-index: 555555;
          color: white;
          cursor: pointer;
          border-radius: 10px;
          :hover {
            background: #e6e9ff38;
          }
          svg {
            top: 3px;
            right: 10px;

            position: relative;
          }
        }
      }
    }

    .main-view {
      flex: 1;
      padding: 3rem;
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: end;
      flex-direction: column;
      transition: 0.5s;
      overflow-y: hidden;
      height: 100vh;
      .header {
        width: ${({ open }) => (open ? '78%' : '94%')};
        height: 6.7vh;
        border-radius: 10px;
        background-color: white;
        position: fixed;
        z-index: 22222;
        padding: 1em;
        top: 23px;
        transition: 0.5s;
        box-shadow: ${({ theme }) => theme.bs};
        display: flex;
        justify-content: center;
        align-items: center;
        select {
          padding: 15px;
          background: white;
          border: none;
          box-shadow: ${({ theme }) => theme.bs};
          border-radius: 10px;
          width: 50vh;
          align-self: center;
        }
        .avarter {
          margin-left: auto;
        }
      }
    }
  }
  @media (max-width: 920px) {
    section {
      .side-bar {
        transform: ${({ open }) =>
          open ? 'translateX(-400px)' : 'translateX(0)'};
        width: ${({ open }) => (open ? '0' : '35vh')};
        padding: ${({ open }) => (!open ? null : '0')};
        margin-right: ${({ open }) => (!open ? null : '0')};
        position: ${({ open }) => (open ? 'relative' : 'fixed')};
      }
      .main-view {
        padding: 0;
        .header {
          display: none;
        }
      }
    }
  }
  @media (max-width: 1520px) {
    section {
      .side-bar {
        transform: ${({ open }) =>
          open ? 'translateX(-400px)' : 'translateX(0)'};
        width: ${({ open }) => (open ? '0' : '35vh')};
        padding: ${({ open }) => (!open ? null : '0')};
      }
      /* .main-view {
        .header {
          display: flex;
          width: 92%;
        }
      } */
    }
  }
`;
