import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionsBox } from "src/components/ActionsBox";
import { selectAuthUser } from "src/store/auth/selectors";
import { NavigateLink } from "src/styles/NavigateLink";
import { selectEmployees, selectIsLoadingEmployees } from "src/store/employees/selectors";
import { fetchEmployees } from "src/store/employees/employeesSlice";
import { AppDispatch } from "src/store";
import { SearchBox } from "src/components/SearchBox";
import { StyledWrapper } from "./StyledEmployeesBox";
import { Employee, ITitle } from "src/store/types.common";
import { Spinner } from "../Spinner";
import { AvatarIcon } from "../AvatarIcon";

interface inputData {
    id: ITitle,
    value: string
}

interface HandbookEmployeesBoxProps {
    className?: string,
    titles: string[]
}

export const HandbookEmployeesBox: FC<HandbookEmployeesBoxProps> = ({ titles, className }) => {
    const [inputSearchData, setInputSearchData] = useState<inputData>({ id: 'First Name', value: '' });
    const currentUser = useSelector(selectAuthUser);
    const employees = useSelector(selectEmployees);
    const isLoading = useSelector(selectIsLoadingEmployees);
    const dispatch = useDispatch<AppDispatch>();
    const getInputData = (data: inputData) => {
        setInputSearchData({
            id: data.id,
            value: data.value
        });
    }
    const handleInputData = (unit: Employee, inputData: inputData) => {
        if (inputData.value.toLowerCase() === ('')) {
            return unit
        }
        if (inputData.id === 'Chief') {
            return (unit.userId.firstName).toLowerCase().includes(inputData.value)
        }
        const unspacedData = inputData.id.split(' ').join('')
        const noLowerCaseData = unspacedData.charAt(0).toLowerCase() + unspacedData.slice(1)

        // const ts: {[key in Employee]: string} = 'lastName'
        //@ts-ignore
        return unit[noLowerCaseData].toLowerCase().includes(inputData.value)
    }

    useEffect(() => {
            dispatch(fetchEmployees());
    }, []);

    return (
        <>
            <SearchBox titles={titles} getInputData={getInputData} />
            <StyledWrapper className={className}>
                {isLoading ? <Spinner />
                    :
                    employees
                        .filter(unit => handleInputData(unit, inputSearchData))
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
                                    <NavigateLink to={`user/${unit.userId._id}`} $fontSize='15px' $textTransform='capitalize'>
                                        {unit.userId.firstName} {unit.userId.lastName}
                                    </NavigateLink>
                                </li>
                                <li>
                                    {unit.userId._id === currentUser._id &&
                                        <ActionsBox employee={unit} />
                                    }
                                </li>
                            </ul>
                        ))}
            </StyledWrapper>
        </>
    );
}
