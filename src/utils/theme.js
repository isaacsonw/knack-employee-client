/** @format */

import { createGlobalStyle } from 'styled-components';

export const themes = {
  orange: '#F39931',
  blue: '#222647',
  white: '#ffffff',
  red: '#ff0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#e1e1e1',
  offWhite: '#ededed',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  boxSizing: 'border-box',
  fontSize: '10px',
};

export const Globalstyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,700;1,900&display=swap');

    html {
    box-sizing: border-box;
    font-size: 10px;

  }
    *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: ${themes.black};
  }
  body{
    margin: 0;
    padding: 0;
    ${'' /* line-height: 2; */}
    font-family: 'Poppins' -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    background-color: #f2f7ff;
  }
`;
