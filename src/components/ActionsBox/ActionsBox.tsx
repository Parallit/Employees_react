import { FC } from 'react';
import { ModalButtonBox } from 'src/components/ModalButtonBox';
import { Employee } from 'src/store/types.common';
import { IconComponent } from 'src/components/Icon';
import { ContainerFlexAround } from 'src/styles/Containers/ContainerFlexAround';

interface ActionsBoxProps {
  employee: Employee;
}

export const ActionsBox: FC<ActionsBoxProps> = ({ employee }) => {
  return (
    <>
      <ContainerFlexAround>
        <ModalButtonBox
          $secondaryButton
          $paddingButton="5px 10px"
          modalContentType={'edit'}
          employee={employee}
          buttonContent={<IconComponent type={'edit'} />}
        />
        <ModalButtonBox
          $dangerButton
          $paddingButton="5px 10px"
          modalContentType={'remove'}
          employee={employee}
          buttonContent={<IconComponent type={'remove'} />}
        />
      </ContainerFlexAround>
    </>
  );
};
