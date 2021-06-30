/** @format */

import { EmployeeActionTypes } from './employee.type';

export const setEmployees = (employees) => ({
  type: EmployeeActionTypes.ALL_EMPLOYEES,
  employees,
});
