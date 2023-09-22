import { FC } from 'react';
import { User } from 'src/store/types.common';
import { AvatarIcon } from '../AvatarIcon';
import { ContainerInfo } from './StyledChiefInfo';

interface ChiefInfoProps {
    user: User | null;
}

export const ChiefInfo: FC<ChiefInfoProps> = ({ user }) => {
    return (
        <>
            {user &&
                <ContainerInfo>
                    <ul>
                        <li>
                            <AvatarIcon name={user.avatar} width="80px" height="80px" />
                        </li>
                        <li><span>First Name: </span>{user.firstName}</li>
                        <li><span>Last Name: </span>{user.lastName}</li>
                        <li><span>Subordinates: </span>{user.employeesId.length}</li>
                        <li><span>Department: </span>{user.department}</li>
                        <li><span>Position: </span>{user.position}</li>
                        <li><span>Room: </span>{user.room}</li>
                        <li><span>Tel: </span>{user.telephone}</li>
                        <li><span>About: </span>{user.about}</li>
                    </ul>
                </ContainerInfo>
            }
        </>
    );
};