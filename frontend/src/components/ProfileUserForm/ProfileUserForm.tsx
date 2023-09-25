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

interface ProfileUserProps {
  user: User;
}

export const ProfileUserForm: FC<ProfileUserProps> = ({ user }) => {

  const [avatarId, setAvatarId] = useState<string>(user.avatar);
  const [fieldState, setFieldState] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    position: user.position,
    room: user.room,
    department: user.department,
    telephone: user.telephone,
    about: user.about
  });

  const {
    firstName,
    lastName,
    position,
    room,
    department,
    telephone,
    about
  } = fieldState;

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
      avatar: avatarId,
      firstName: firstName,
      lastName: lastName,
      position: position,
      room: room,
      department: department,
      telephone: telephone,
      about: about
    };
    updateProfile(editedUserInfo);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFieldState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleChangeArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFieldState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

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
              value={fieldState.firstName}
              name={'firstName'}
              id={'firstName'}
              labelName={'First Name'}
              type={'text'}
              onChange={handleChange} 
              $width='45%'/>
            <InputForm
              required
              value={fieldState.lastName}
              name={'lastName'}
              id={'lastName'}
              labelName={'Last Name'}
              type={'text'}
              onChange={handleChange} 
              $width='45%'/>
          </InputBox>
          <InputBox>
            <InputForm
              required
              value={fieldState.department}
              name={'department'}
              id={'department'}
              labelName={'Department'}
              type={'text'}
              onChange={handleChange} 
              $width='45%'/>
            <InputForm
              required
              value={fieldState.position}
              name={'position'}
              id={'position'}
              labelName={'Position'}
              type={'text'}
              onChange={handleChange} 
              $width='45%'/>
          </InputBox>
          <InputBox>
            <InputForm
              required
              value={fieldState.room}
              name={'room'}
              id={'room'}
              labelName={'Room'}
              type={'text'}
              onChange={handleChange} 
              $width='45%'/>
            <InputForm
              required
              value={fieldState.telephone}
              name={'telephone'}
              id={'telephone'}
              labelName={'Tel.'}
              type={'text'}
              onChange={handleChange} 
              $width='45%'/>
          </InputBox>
          <div className={style.textbox_wrp}>
            <textarea
              onChange={handleChangeArea}
              value={fieldState.about}
              className={style.form_textbox}
              rows={10}
              cols={45}
              name={'about'}
              maxLength={300}
              id="about"
            ></textarea>
            <label htmlFor="about" className={style.form_label}>
              About:
            </label>
          </div>
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