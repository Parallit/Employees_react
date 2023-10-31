import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsBox } from 'src/components/ActionsBox';
import { selectAuthUser } from 'src/store/auth/selectors';
import { NavigateLink } from 'src/styles/NavigateLink';
import {
  selectEmployees,
  selectIsLoadingEmployees,
} from 'src/store/employees/selectors';
import { fetchEmployees } from 'src/store/employees/employeesSlice';
import { AppDispatch } from 'src/store';
import { SearchBox } from 'src/components/SearchBox';
import { StyledEmployeesBox } from './StyledEmployeesBox';
import { Employee, ITitle } from 'src/store/types.common';
import { Spinner } from 'src/components/Spinner';
import { AvatarIcon } from 'src/components/AvatarIcon';
import { useSearchContext } from 'src/components/Hook/useSearchContext';

interface inputData {
  id: ITitle;
  value: string;
}

interface HandbookEmployeesBoxProps {
  className?: string;
  titles: string[];
}

export const HandbookEmployeesBox: FC<HandbookEmployeesBoxProps> = ({
  titles,
  className,
}) => {
  const employees = useSelector(selectEmployees);
  const currentUser = useSelector(selectAuthUser);
  const isLoading = useSelector(selectIsLoadingEmployees);
  const dispatch = useDispatch<AppDispatch>();
  const { inputSearchData } = useSearchContext();

  const handleInputData = (unit: Employee, inputData: inputData) => {
    const lowerCaseValue = inputData.value.toLowerCase();
    if (lowerCaseValue === '') {
      return unit;
    }
    if (inputData.id === 'Chief') {
      const fullName = [
        unit.userId.firstName.toLowerCase(),
        unit.userId.lastName.toLowerCase(),
      ].join(' ');
      return fullName.includes(lowerCaseValue);
    }

    const unspacedData = inputData.id.split(' ').join('');
    const noLowerCaseData =
      unspacedData.charAt(0).toLowerCase() + unspacedData.slice(1);
    const property = unit[noLowerCaseData as keyof Employee];

    if (typeof property === 'string') {
      return property.toLowerCase().includes(lowerCaseValue);
    }
  };

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <>
      <SearchBox titles={titles} />
      <StyledEmployeesBox className={className}>
        {isLoading ? (
          <Spinner />
        ) : (
          employees
            .filter((unit) => handleInputData(unit, inputSearchData))
            .map((unit) => (
              <ul key={unit._id}>
                <li>
                  <AvatarIcon name={unit.avatar} width="50px" height="50px" />
                </li>
                <li>{unit.firstName}</li>
                <li>{unit.lastName}</li>
                <li>{unit.position}</li>
                <li>{unit.department}</li>
                <li>{unit.room}</li>
                <li>{unit.telephone}</li>
                <li>
                  <NavigateLink
                    to={`user/${unit.userId._id}`}
                    $fontSize="15px"
                    $textTransform="capitalize"
                  >
                    {unit.userId.firstName} {unit.userId.lastName}
                  </NavigateLink>
                </li>
                <li>
                  {unit.userId._id === currentUser._id && (
                    <ActionsBox employee={unit} />
                  )}
                </li>
              </ul>
            ))
        )}
      </StyledEmployeesBox>
    </>
  );
};
