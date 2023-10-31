import { styled } from 'styled-components';

export const ContainerFlexAround = styled.div<{
  $padding?: string;
  $margin?: string;
}>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${({ $padding }) => $padding || '0'};
  margin: ${({ $margin }) => $margin || '0'};
`;
