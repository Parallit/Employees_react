import { ChangeEvent, FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { fetchAvatars } from 'src/store/avatars/avatarsSlice';
import { selectAvatars } from 'src/store/avatars/selectors';
import { AvatarIcon } from '../AvatarIcon';
import { AvatarFormBoxContainer } from './StyledAvatarFormBox';

export interface AvatarFormBoxProps {
  getAvatarId: (radioId: string) => void;
}

export const AvatarFormBox: FC<AvatarFormBoxProps> = ({ getAvatarId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const avatars = useSelector(selectAvatars);

  const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    getAvatarId(e.target.id);
  };

  useEffect(() => {
    dispatch(fetchAvatars());
  }, []);

  return (
    <>
      <AvatarFormBoxContainer>
        {avatars.map((avatar) => (
          <li key={avatar._id}>
            <label htmlFor={avatar.name}>
              <input
                type="radio"
                id={avatar.name}
                name="avatar"
                onChange={handleChangeRadio}
              />
              <AvatarIcon name={avatar.name} width="62px" height="62px" />
            </label>
          </li>
        ))}
      </AvatarFormBoxContainer>
    </>
  );
};
