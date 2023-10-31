import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 10px 0;
  min-height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  li {
    color: white;
  }
`;
