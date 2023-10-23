import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "src/store/types.common";
import { StyledUsersBox } from "./StyledUsersBox";
import { SearchBox } from "src/components/SearchBox";
import { AppDispatch } from "src/store";
import { fetchUsers } from "src/store/users/usersSlice";
import { selectIsLoadingUsers, selectUsers } from "src/store/users/selectors";
import { Spinner } from "../Spinner";
import { AvatarIcon } from "../AvatarIcon";
import { useSearchContext } from "src/components/Hook/useSearchContext";
import { ModalButtonBox } from "../ModalButtonBox";

interface inputData {
    id: string,
    value: string
}

interface HandbookUsersBoxProps {
    titles: string[]
    className?: string
}

export const HandbookUsersBox: FC<HandbookUsersBoxProps> = ({ titles, className }) => {
    const users = useSelector(selectUsers);
    const isLoading = useSelector(selectIsLoadingUsers);
    const dispatch = useDispatch<AppDispatch>();
    const { inputSearchData } = useSearchContext()

    const handleInputData = (unit: User, inputData: inputData) => {
        const lowerCaseValue = inputData.value.toLowerCase();

        if (lowerCaseValue === ('')) {
            return unit
        }

        if (inputData.id === 'Subordinates') {
            const employeeList = unit.employeesId;
            const isFindValue = employeeList.find(employee => {
                const fullName = [employee.firstName.toLowerCase(), employee.lastName.toLowerCase()].join(" ");
                return fullName.includes(lowerCaseValue);
            })
            return isFindValue
        }

        const unspacedData = inputData.id.split(' ').join('');
        const noLowerCaseData = unspacedData.charAt(0).toLowerCase() + unspacedData.slice(1)
        const property = unit[noLowerCaseData as keyof User];

        if (typeof property === "string") {
            return property.toLowerCase().includes(lowerCaseValue)
        }
    }

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <>
            <SearchBox titles={titles} />
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
                                <li>
                                    <ModalButtonBox
                                        user={unit}
                                        buttonContent={unit.employeesId.length}
                                        modalContentType={"subordinates"}
                                        $secondaryButton />
                                </li>
                                <li></li>
                            </ul>
                        ))}
            </StyledUsersBox>
        </>
    );
}