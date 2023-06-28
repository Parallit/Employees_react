import { RootState } from '..';

export const selectEmployees = (state: RootState) => state.employees.employees;
export const selectNewEmployee = (state: RootState) => state.employees.newEmployee;
// export const selectFilteredEmployees = (state: RootState) => state.employees.filteredEmployees;
