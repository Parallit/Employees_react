import { FC, ReactNode } from 'react';

interface InputErrorProps {
  children?: ReactNode;
  className?: string;
}

export const InputError: FC<InputErrorProps> = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};
