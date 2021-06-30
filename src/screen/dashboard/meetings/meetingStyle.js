/** @format */

import styled from 'styled-components';

export const MeetingStyles = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 8rem;
  border-radius: 20px;
  overflow: hidden;
  padding: 2rem 1rem;
  color: ${({ theme }) => theme.black};
  font-size: 1.5rem !important;
  .table-head {
    padding: 2rem 3rem;
    h1 {
      font-size: 2.5rem;
      font-weight: 400;
      margin: 0;
    }
  }
  button {
    border: none;
  }
`;
