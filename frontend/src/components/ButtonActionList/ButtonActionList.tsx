import { FC, ReactNode } from 'react';

interface ButtonActionProps {
  imgPath: string;
  children: ReactNode;
  btnAlt: string;
  onClick: () => void;
}

export const ButtonActionList: FC<ButtonActionProps> = ({
  imgPath,
  onClick,
  btnAlt,
  children,
}) => {
  return (
    <>
      <button>
        <img src={imgPath} alt={btnAlt} />
      </button>
    </>
  );
};
