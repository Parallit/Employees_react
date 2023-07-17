import { FC, ReactNode } from 'react';
import style from './ButtonModal.module.scss';

interface ButtonModalProps {
  children: ReactNode;
  content: string;
  handleClickModal: (children: ReactNode) => void
};

export const ButtonModal: FC<ButtonModalProps> = ({
  children, 
  content,
  handleClickModal,
}) => {
  return (
    <>
      <button onClick={() => handleClickModal(children)} className={style.btn}>
        {content}
      </button>
    </>
  );
};
