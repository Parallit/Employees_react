import { baseTheme } from 'src/styles/theme';
import { styled } from 'styled-components';

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.9);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);
  color: #fff;
  outline: none;
  border: none;
  border-bottom: 1px solid #03e9f4;
  border-top: 1px solid #e55455;
  border-radius: 10px;
  height: 80%;
  width: 100%;
  text-align: center;

  @media ${baseTheme.media.laptop} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
