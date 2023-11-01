import { NavigateLink } from 'src/styles/NavigateLink';
import { AvatarIcon } from 'src/components/AvatarIcon';
import { Employees } from 'src/store/types.common';
import { FC } from 'react';
import {
  ContainerInfo,
  SubordinateBox,
  SubordinateLink,
  SuborditanesContainer,
  TitleContainer,
} from './StyledSubordinatesLinkBox';
import { Text } from 'src/styles/Text/Text';

interface SubordinatesLinkBoxProps {
  subordinates: Employees;
  $width?: string;
  $maxHeight?: string;
  className?: string;
}

export const SubordinatesLinkBox: FC<SubordinatesLinkBoxProps> = ({
  subordinates,
  $width,
  $maxHeight,
  className,
}) => {
  return (
    <ContainerInfo
      className={className}
      $width={$width}
      $maxHeight={$maxHeight}
    >
      <TitleContainer>
        <h3>Subordinates:</h3>
      </TitleContainer>
      <SuborditanesContainer>
        {subordinates ? (
          subordinates.map((employee) => (
            <SubordinateBox key={employee._id}>
              <AvatarIcon
                name={employee.avatar}
                width={'60px'}
                height={'60px'}
              />
              <SubordinateLink>
                <NavigateLink
                  to={`employee/${employee._id}`}
                  $fontSize="18px"
                  $textTransform="capitalize"
                >
                  {employee.firstName} {employee.lastName}
                </NavigateLink>
              </SubordinateLink>
            </SubordinateBox>
          ))
        ) : (
          <Text>Empty list</Text>
        )}
      </SuborditanesContainer>
    </ContainerInfo>
  );
};
