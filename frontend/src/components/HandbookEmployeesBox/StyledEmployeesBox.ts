import { baseTheme } from "src/styles/theme";
import { styled } from "styled-components";

export const StyledEmployeesBox = styled.div`
  color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.9);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);
  padding: 5px 20px;
  min-height: 150px;
  position: relative;

  & ul {
    position: relative;
    display: grid;
    grid-template-columns: repeat(7, 150px);
    justify-content: center;
    align-items: center;
    text-align: center;
    column-gap: 15px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    min-height: 70px;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    overflow: hidden;
    transition: all 0.5s ease-in-out;

    @media ${baseTheme.media.laptopL} {
      grid-template-columns: repeat(7, 110px);
      min-height: 110px;
      align-items: end;
      padding-bottom: 30px;
    }

    @media ${baseTheme.media.laptop} {
      grid-template-columns: repeat(7, 90px);
      column-gap: 10px;
    }
  }

  & ul:hover {
    background: linear-gradient(
      90deg,
      rgba(12, 6, 15, 1) 5%,
      rgba(43, 3, 35, 1) 50%,
      rgba(20, 10, 25, 1) 100%
    );
    transform: scale(1.2);

    @media ${baseTheme.media.laptopL} {
      transform: none;
    }
  }

  & li {
    list-style-type: none;
    letter-spacing: 2px;
    overflow: hidden;

    @media ${baseTheme.media.laptopL} {
      letter-spacing: 0;
      font-size: 16px;
    }

    @media ${baseTheme.media.laptop} {
      font-size: 14px;
    }
  }

  & li:first-child {
    position: absolute;
    left: -130px;
    opacity: 0;
    transition: all 0.8s ease;
    @media ${baseTheme.media.laptopL} {
      top: 15px;
    }
  }

  & ul:hover li:first-child {
    opacity: 1;
    left: 20px;
    @media ${baseTheme.media.laptopL} {
      top: 15px;
      left: 80px;
    }
  }

  & li:last-child {
    position: absolute;
    right: -130px;
    opacity: 0;
    transition: all 0.8s ease;
    @media ${baseTheme.media.laptopL} {
      top: 15px;
    }
  }

  & ul:hover li:last-child {
    right: 10px;
    opacity: 1;
    @media ${baseTheme.media.laptopL} {
      top: 15px;
      right: 50px;
    }
  }

  & li:first-child:hover {
    transform: scale(1.3);
  }
`

