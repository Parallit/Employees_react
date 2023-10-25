import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { updateUserInfo } from 'src/store/user/userSlice';
import { User } from 'src/store/types.common';
import { InputForm } from 'src/styles/Inputs/InputForm';
import { AvatarFormBox } from 'src/components/AvatarFormBox';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { AvatarIcon } from 'src/components/AvatarIcon';
import { useInput } from 'src/components/Hook/useInput';
import { useArea } from 'src/components/Hook/useArea';
import { TextAreaForm } from 'src/styles/TextArea/TextArea';
import { BadRequestError } from 'src/styles/Errors/BadRequestError';
import { SubTitleForm } from 'src/styles/SubTitles/SubTitleForm';
import { selectIsLoadingUser, selectUserReqErr } from 'src/store/user/selectors';
import { ContainerFlexCenter } from 'src/styles/Containers/ContainerFlexCenter';
import { styled } from 'styled-components';

interface UpdateUserFormProps {
  user: User;
}

export const UpdateUserForm: FC<UpdateUserFormProps> = ({ user }) => {
  const firstNameInput = useInput(user.firstName);
  const lastNameInput = useInput(user.lastName);
  const positionInput = useInput(user.position);
  const roomInput = useInput(user.room);
  const departmentInput = useInput(user.department);
  const telephoneInput = useInput(user.telephone);
  const aboutArea = useArea(user.about);
  const [avatarId, setAvatarId] = useState<string>(user.avatar);

  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectIsLoadingUser);
  const er = useSelector(selectUserReqErr)

  const isValid = (input: { value: string, error: string }): boolean => {
    if (input.value && input.error) {
      return false
    } else {
      return true
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      isValid(firstNameInput) &&
      isValid(lastNameInput) &&
      isValid(positionInput) &&
      isValid(roomInput) &&
      isValid(departmentInput) &&
      isValid(telephoneInput)
    ) {
      try {
        const editedUserInfo = {
          userId: user._id,
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          position: positionInput.value,
          room: roomInput.value,
          department: departmentInput.value,
          telephone: telephoneInput.value,
          about: aboutArea.value,
          avatar: avatarId,
        };
        await dispatch(updateUserInfo(editedUserInfo)).unwrap();
      } catch (error) {
        const requestErr = error as string
        console.log(requestErr);
      }
    }
  };

  const getAvatarId = (radioId: string) => {
    setAvatarId(radioId)
  }
  
  return (
    <>
      <ContainerFlexCenter>
        <AvatarIcon width={'120px'} height={'120px'} name={avatarId} />
      </ContainerFlexCenter>
      <form onSubmit={handleSubmit}>
        <FieldContainer>
          <InputForm
            required
            type={'text'}
            name={'firstName'}
            labelName={'First Name'}
            {...firstNameInput}
          />
          <InputForm
            required
            type={'text'}
            name={'lastName'}
            labelName={'Last Name'}
            {...lastNameInput}
          />
        </FieldContainer>
        <FieldContainer>
          <InputForm
            required
            type={'text'}
            name={'position'}
            labelName={'Position'}
            {...positionInput}
          />
          <InputForm
            required
            type={'text'}
            name={'room'}
            labelName={'Room'}
            {...roomInput}
          />
        </FieldContainer>
        <FieldContainer>
          <InputForm
            required
            type={'text'}
            name={'department'}
            labelName={'Department'}
            {...departmentInput}
          />
          <InputForm
            required
            type={'text'}
            name={'telephone'}
            labelName={'Telephone'}
            {...telephoneInput}
          />
        </FieldContainer>
        <FieldContainer>
          <TextAreaForm
            cols={14}
            rows={5}
            maxLength={300}
            {...aboutArea}
            name={'about'}
            labelName={'About'}
          />
        </FieldContainer>
        <BadRequestError>{er}</BadRequestError>
        <SubTitleForm>Shoose an Avatar:</SubTitleForm>
        <AvatarFormBox getAvatarId={getAvatarId} />
        <PrimaryButton
          $margin='40px 0 0 0'
          $padding='25px 20px'
          disabled={(
            !firstNameInput.value ||
            !lastNameInput.value ||
            !positionInput.value ||
            !roomInput.value ||
            !departmentInput.value ||
            !telephoneInput.value
          )}
        >
          {isLoading ? 'Loading...' : 'Click to update profile'}
        </PrimaryButton>
      </form>
    </>
  );
};

const FieldContainer = styled.div`
    display: flex;
    padding: 10px 10px;
    margin: 10px 10px;
    gap: 10%;
`