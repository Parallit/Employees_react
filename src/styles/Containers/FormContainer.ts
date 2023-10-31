import { styled } from 'styled-components';

export const FormContainer = styled.div<{
  $width?: string;
  $margin?: string;
}>`
  width: ${({ $width }) => $width || '500px'};
  margin: ${({ $margin }) => $margin || '15% auto 15% auto'};
  padding: 40px 40px;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${({ theme }) => theme.bg.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
`;
