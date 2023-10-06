import { FC } from 'react';
import { Employee } from 'src/store/types.common';
import { AvatarIcon } from '../AvatarIcon';
import { ContainerInfo, DepartmentBox, MainBox, NameBox } from './StyledSubordinateInfo';

interface SubordinateInfoProps {
    subordinate: Employee | null;
}

export const SubordinateInfo: FC<SubordinateInfoProps> = ({ subordinate }) => {
    return (
        <>
                <ContainerInfo>
                    <MainBox>
                        <li>
                            <AvatarIcon name={subordinate?.avatar} width="120px" height="120px" />
                        </li>
                        <li>
                            <NameBox>
                                <li>
                                    <h4>First Name: </h4>
                                    <p>{subordinate?.firstName}</p>
                                </li>
                                <li>
                                    <h4>Last Name: </h4>
                                    <p>{subordinate?.lastName}</p>
                                </li>
                            </NameBox>
                        </li>
                        <li>
                            <DepartmentBox>
                                <li>
                                    <h4>Department: </h4>
                                    <p>{subordinate?.department}</p>
                                </li>
                                <li>
                                    <h4>Position: </h4>
                                    <p>{subordinate?.position}</p>
                                </li>
                                <li>
                                    <h4>Room: </h4>
                                    <p>{subordinate?.room}</p>
                                </li>
                            </DepartmentBox>
                        </li>
                        <li>
                            <h4>Tel: </h4>
                            <p>{subordinate?.telephone}</p>
                        </li>
                    </MainBox>
                </ContainerInfo>
        </>
    );
};