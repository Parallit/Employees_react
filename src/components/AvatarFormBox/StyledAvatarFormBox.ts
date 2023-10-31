import { styled } from 'styled-components';

export const AvatarFormBoxContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  & li {
    display: flex;
    padding: 10px;
    align-items: center;
  }

  & input {
    display: none;
  }

  & label {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border-radius: 25px;
    background: linear-gradient(
      166deg,
      rgba(249, 123, 30, 1) 25%,
      rgba(205, 40, 149, 1) 81%
    );
    box-shadow: 0 0 10px #e55455, 0 0 10px #e55455, 0 0 5px #e55455,
      0 0 10px #e55455, inset 0 -3px 0 rgba(0, 0, 0, 0.22);
    user-select: none;

    & :hover {
      background: #03e9f4;
      box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
        0 0 100px #03e9f4;
      border-radius: 25px;
      transition: all 0.5s ease-out;
    }
  }
`;
