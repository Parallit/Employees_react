import { FC } from "react";
import { useSelector } from "react-redux";
import { selectAuthUser } from "src/store/auth/selectors";
import { Users } from "src/store/types.common";
import { NavigateLink } from "src/styles/NavigateLink";

interface CustomUsersBoxProps {
    users: Users;
    className?: string
}

export const CustomUsersBox: FC<CustomUsersBoxProps> = ({ users, className }) => {
    const currentUser = useSelector(selectAuthUser);

    return (
        <>
            <div className={className}>
                {users.map((unit) => (
                    <ul key={unit._id}>
                        <li>{unit.firstName}</li>
                        <li>{unit.lastName}</li>
                        <li>{unit.position}</li>
                        <li>{unit.department}</li>
                        <li>{unit.room}</li>
                        <li>{unit.telephone}</li>
                        <li>
                            {/* <NavigateLink to={`user/${unit.userId._id}`} $fontSize='15px' $textTransform='capitalize'>
                                {unit.userId.firstName} {unit.userId.lastName}
                            </NavigateLink> */}
                        </li>
                        <li>
                            {/* {unit.userId._id === currentUser._id &&
                                <ActionsBox employee={unit} />
                            } */}
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
}