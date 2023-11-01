import { baseTheme } from 'src/styles/theme';
import { styled } from 'styled-components';

export const BurgerContainer = styled.div`
  display: none;
  @media ${baseTheme.media.laptop} {
    display: block;
    position: absolute;
    top: 5px;
    left: 25px;
  }
`;

export const NavigateContainer = styled.nav`
  display: none;
  @media ${baseTheme.media.laptop} {
    display: block;
  }

  & div {
    @media ${baseTheme.media.laptop} {
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      width: 100vh;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 9999;
    }
  }

  & ul {
    @media ${baseTheme.media.laptop} {
      position: absolute;
      left: 0;
      top: 0;
      margin: 0;
      height: 100vh;
      min-width: 50vw;
      display: flex;
      justify-content: center;
      align-items: start;
      padding-left: 80px;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.9);
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);

      &::before {
        position: absolute;
        content: '';
        left: 70px;
        width: 3px;
        height: 50%;
        border-radius: 4px;
        background: linear-gradient(
          166deg,
          rgba(249, 123, 30, 1) 25%,
          rgba(205, 40, 149, 1) 81%
        );
      }
    }
  }

  & li {
    list-style-type: none;
    margin: 40px;
    padding: 0 20px 0 20px;
    width: 50%;
    position: relative;

    & a::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: -15px;
      left: 20;
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
  }
`;
