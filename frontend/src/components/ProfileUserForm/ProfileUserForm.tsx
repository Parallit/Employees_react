import { FC, useState } from 'react';
import style from './ProfileUserForm.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { editedUserInfo } from 'src/store/user/types';
import { deleteUserProfile, updateUserInfo } from 'src/store/user/userSlice';
import { User } from 'src/store/types.common';
import { InputForm } from 'src/styles/Inputs/InputForm';
import { AvatarFormBox } from '../AvatarFormBox';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { DangerButton } from 'src/styles/Buttons/DangerButton';
import { AvatarIcon } from '../AvatarIcon';
import { styled } from 'styled-components';
import { useInput } from '../Hook/useInput';
import { useArea } from '../Hook/useArea';
import { TextAreaForm } from 'src/styles/TextArea/TextArea';

interface ProfileUserProps {
  user: User;
}

export const ProfileUserForm: FC<ProfileUserProps> = ({ user }) => {
  const firstNameInput = useInput('');
  const lastNameInput = useInput('');
  const positionInput = useInput('');
  const roomInput = useInput('');
  const departmentInput = useInput('');
  const telephoneInput = useInput('');
  const aboutArea = useArea('');
  const [avatarId, setAvatarId] = useState<string>(user.avatar);

  const dispatch = useDispatch<AppDispatch>();

  const updateProfile = (editedUserInfo: editedUserInfo) => {
    dispatch(updateUserInfo(editedUserInfo));
  };

  const handleDeleteProfile = () => {
    dispatch(deleteUserProfile(user));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    updateProfile(editedUserInfo);
  };

  const getAvatarId = (radioId: string) => {
    setAvatarId(radioId)
  }

  return (
    <>
      <div className={style.container}>
        <h3 className={style.form_heading}>Edit your information</h3>
        <AvatarIcon width={'120px'} height={'120px'} name={avatarId} />
        <form onSubmit={handleSubmit} className={style.form_info}>
          <InputBox>
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
          </InputBox>
          <TextAreaForm
            cols={14}
            rows={5}
            maxLength={300}
            {...aboutArea}
            name={'about'}
            labelName={'About'}
          />
          <div>
            <h4>Shoose an Avatar:</h4>
            <AvatarFormBox getAvatarId={getAvatarId} />
          </div>
          <PrimaryButton $margin='40px 0 0 0' $padding='25px 20px'>
            Click to update profile
          </PrimaryButton>
        </form>
        <DangerButton onClick={handleDeleteProfile} $outline='none' $margin="100px 0 30px 0" $padding='25px 20px'>
          Delete your profile
        </DangerButton>
      </div>
    </>
  );
};

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
`