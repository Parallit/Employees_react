import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { fetchEmployees } from 'src/store/employees/employeesSlice';
import { selectEmployees } from 'src/store/employees/selectors';

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
