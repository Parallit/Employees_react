import { baseTheme } from 'src/styles/theme';
import { styled } from 'styled-components';

export const NavigateContainer = styled.nav`
  margin: 20px 20px;
  @media ${baseTheme.media.laptopL} {
    margin: 0 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${baseTheme.media.laptop} {
    display: none;
  }

  @media ${baseTheme.media.laptopL} {
    justify-content: center;
  }
`;

export const Item = styled.li`
  list-style-type: none;
  padding: 0 20px 0 20px;
  position: relative;
  text-wrap: nowrap;

  & a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -10px;
    left: 0;
    border-radius: 4px;
    background: rgb(249, 123, 30);
    background: linear-gradient(
      166deg,
      rgba(249, 123, 30, 1) 25%,
      rgba(205, 40, 149, 1) 81%
    );
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  & a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;
