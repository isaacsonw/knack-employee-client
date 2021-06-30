/** @format */

import { combineReducers } from 'redux';
import employeeReducer from './employees/employee.reducer';

export default combineReducers({ employee: employeeReducer });
