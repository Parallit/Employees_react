import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import { fetchEmployees } from '../../store/employees/employeesSlice';
import { selectEmployees } from '../../store/employees/selectors';

export const EmployeeList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const employees = useSelector(selectEmployees);

  const handleEmployeeList = () => {
    dispatch(fetchEmployees());
  };

  useEffect(() => {
    handleEmployeeList();
  }, []);

  return (
    <>
      <ul>
        {employees &&
          employees.map((employee) => (
            <li key={employee._id}> Работники: {employee.name}</li>
          ))}
      </ul>
    </>
  );
};
