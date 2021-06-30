/** @format */

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';

import store from '../redux/store';
import { LayoutStyles } from './layoutStyles';
import { Globalstyle, themes } from '../utils/theme';

export const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes}>
        <Globalstyle />
        <LayoutStyles>{children}</LayoutStyles>
      </ThemeProvider>
    </Provider>
  );
};
