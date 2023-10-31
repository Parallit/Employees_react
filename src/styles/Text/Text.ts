import { styled } from 'styled-components';

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 5px 0 5px;
  margin: 5px 0 5px 0;
  letter-spacing: 1px;
`;
