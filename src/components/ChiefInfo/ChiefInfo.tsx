import { FC } from 'react';
import { User } from 'src/store/types.common';
import { AvatarIcon } from 'src/components/AvatarIcon';
import {
  ContainerBox,
  ContainerInfo,
  DepartmentBox,
  MainBox,
  NameBox,
} from './StyledChiefInfo';

interface ChiefInfoProps {
  user: User;
  $width?: string;
}

export const ChiefInfo: FC<ChiefInfoProps> = ({ user, $width }) => {
  return (
    <>
      <ContainerInfo $width={$width}>
        <MainBox>
          <li>
            <AvatarIcon name={user.avatar} width="120px" height="120px" />
          </li>
          <ContainerBox>
            <NameBox>
              <li>
                <h4>First Name: </h4>
                <p>{user.firstName}</p>
              </li>
              <li>
                <h4>Last Name: </h4>
                <p>{user.lastName}</p>
              </li>
            </NameBox>
          </ContainerBox>
          <ContainerBox>
            <DepartmentBox>
              <li>
                <h4>Department: </h4>
                <p>{user.department}</p>
              </li>
              <li>
                <h4>Position: </h4>
                <p>{user.position}</p>
              </li>
              <li>
                <h4>Room: </h4>
                <p>{user.room}</p>
              </li>
            </DepartmentBox>
          </ContainerBox>
          <li>
            <h4>Tel: </h4>
            <p>{user.telephone}</p>
          </li>
          <li>
            <h4>About: </h4>
            <p>{user.about}</p>
          </li>
        </MainBox>
      </ContainerInfo>
    </>
  );
};
