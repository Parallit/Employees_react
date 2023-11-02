import { baseTheme } from 'src/styles/theme';
import { styled } from 'styled-components';

export const TitleForm = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.XXL};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 30px;
  padding: 0;
  text-align: center;
  position: relative;
  top: -60px;
  letter-spacing: 1px;

    @media ${baseTheme.media.laptop} {
    font-size: ${({ theme }) => theme.fontSize.extraLarge};
  }

  &:before {
    position: absolute;
    content: '';
    left: 25%;
    bottom: -12px;
    border-radius: 4px;
    height: 3px;
    width: 50%;
    background: ${({ theme }) => theme.bg.linear};
  }
`;
