import { FC, useState } from 'react';
import { User } from 'src/store/types.common';
import { Button } from 'src/styles/Buttons/Button';
import { styled } from 'styled-components';
import { IconComponent } from '../Icon';
import { SubordinatesLinkBox } from '../SubordinatesLinkBox';

interface SubordinatesBoxProps {
  user: User;
}

export const SubordinatesBox: FC<SubordinatesBoxProps> = ({ user }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      <Wrapper>
        <Button $secondaryButton onClick={() => setIsVisible(!isVisible)}>
          {user.employeesId.length}
          {isVisible ? (
            <IconComponent type={'close'} />
          ) : (
            <IconComponent type={'open'} />
          )}
        </Button>
        {isVisible && <SubordinatesLinkBox subordinates={user.employeesId} />}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
