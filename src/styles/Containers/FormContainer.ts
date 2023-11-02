import { styled } from 'styled-components';
import { baseTheme } from '../theme';

export const FormContainer = styled.div<{
  $width?: string;
  $margin?: string;
}>`
  width: ${({ $width }) => $width || '500px'};
  margin: ${({ $margin }) => $margin || '15% auto'};
  padding: 40px 40px;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${({ theme }) => theme.bg.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};

  @media ${baseTheme.media.laptopL} {
    width: 450px;
  }

  @media ${baseTheme.media.laptop} {
    width: 400px;
  }

  @media ${baseTheme.media.mobileL} {
    width: 350px;
  }
`;
