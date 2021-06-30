/** @format */

import { EmployeeActionTypes } from './employee.type';

const INITIAL_STATE = [];

const employeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EmployeeActionTypes.ALL_EMPLOYEES:
      return [...action.employees];
    default:
      return state;
  }
};

export default employeeReducer;
