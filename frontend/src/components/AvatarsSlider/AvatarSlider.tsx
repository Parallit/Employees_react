import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/store";
import { fetchAvatars } from "src/store/avatars/avatarsSlice";
import { selectAvatars } from "src/store/avatars/selectors";
import { AvatarIcon } from "../AvatarIcon";
import { styled } from "styled-components";

export interface AvatarsSliderProps {
  getAvatarId: (radioId: string) => void;
}

export const AvatarsSlider: FC<AvatarsSliderProps> = ({getAvatarId}) => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();  
  const avatars = useSelector(selectAvatars)

  const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    getAvatarId(e.target.id)
  }

    useEffect(() => {
      dispatch(fetchAvatars())
    }, [])

    return(
      <>
        <AvatarList>{
          avatars.map((avatar) => (
            <AvatarItem key={avatar._id}>
                <label htmlFor={avatar.name}>   
                <input type="radio" id={avatar.name} name='avatar' onChange={handleChangeRadio}/> 
                <AvatarIcon name={avatar.name} width="62px" height="62px"/>
            </label>
            </AvatarItem>
          ))
        }</AvatarList>
      </>
  );
}

const AvatarList = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`

const AvatarItem = styled.li`
    display: flex;
    padding: 10px;
    transition: all 0.2s ease;

    & label {
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
      transform: scale(1.2);
    }
    }

    & input {
      appearance: none;
      position: absolute;
    }
`