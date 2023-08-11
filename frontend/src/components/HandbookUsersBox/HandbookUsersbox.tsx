import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "src/store/types.common";
import { NavigateLink } from "src/styles/NavigateLink";
import { StyledUsersBox } from "./StyledUsersBox";
import { SearchBox } from "src/components/SearchBox";
import { AppDispatch } from "src/store";
import { fetchUsers } from "src/store/users/usersSlice";
import { selectIsLoadingUsers, selectUsers } from "src/store/users/selectors";
import { Spinner } from "../Spinner";
import { AvatarIcon } from "../AvatarIcon";

interface inputData {
    id: string,
    value: string
}

interface HandbookUsersBoxProps {
    titles: string[]
    className?: string
}

export const HandbookUsersBox: FC<HandbookUsersBoxProps> = ({ titles, className }) => {
    const [inputSearchData, setInputSearchData] = useState<inputData>({ id: 'First Name', value: '' });
    const users = useSelector(selectUsers);
    const isLoading = useSelector(selectIsLoadingUsers);
    const dispatch = useDispatch<AppDispatch>();

    const getInputData = (data: inputData) => {
        setInputSearchData({
            id: data.id,
            value: data.value
        });
    }

    const handleInputData = (unit: User, inputData: inputData) => {
        if (inputData.value.toLowerCase() === ('')) {
            return unit
        }
        // Тут массив а не значение
        // if (inputData.id === 'Subordinates') {
        //     return (unit.employeesId).toLowerCase().includes(inputData.value)
        // }
        const unspacedData = inputData.id.split(' ').join('')
        const noLowerCaseData = unspacedData.charAt(0).toLowerCase() + unspacedData.slice(1)
        //@ts-ignore
        return unit[noLowerCaseData].toLowerCase().includes(inputData.value)
    }

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <>  
            <SearchBox titles={titles} getInputData={getInputData} />
            <StyledUsersBox className={className}>
            {isLoading ? <Spinner /> 
                :
                users
                    .filter(unit => handleInputData(unit, inputSearchData))
                    .map((unit) => (
                        <ul key={unit._id}>
                            <li>
                                <AvatarIcon name={unit.avatar} width={"50px"} height={"50px"} />
                            </li>
                            <li>{unit.firstName}</li>
                            <li>{unit.lastName}</li>
                            <li>{unit.position}</li>
                            <li>{unit.department}</li>
                            <li>{unit.room}</li>
                            <li>{unit.telephone}</li>
                            <li>{unit.employeesId.length} persons</li>
                            <li>
                                { unit.employeesId.map((employee, idx) => (
                                    <NavigateLink key={idx} to={`user/${employee._id}`} $fontSize='15px' $textTransform='capitalize'>
                                        {employee.firstName} {employee.lastName}
                                    </NavigateLink>
                                ))}
                            </li>
                        </ul> 
                    ))}
            </StyledUsersBox>
        </>
    );
}