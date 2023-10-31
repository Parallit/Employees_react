import { CustomInput } from 'src/components/Custom/CustomInput';
import { styled } from 'styled-components';

export const InputForm = styled(CustomInput)<{
  $width?: string;
}>`
  position: relative;
  width: ${({ $width }) => $width || '100%'};
  margin-bottom: 40px;
  display: flex;

  & input {
    width: 100%;
    padding: 20px 0;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-bottom: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    outline: none;
    background: transparent;
  }

  & label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.white};
    pointer-events: none;
    transition: 0.5s;
  }

  & input:focus {
    outline: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neonBlue};
  }

  & input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    left: 0;
    color: ${({ theme }) => theme.colors.neonBlue};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
