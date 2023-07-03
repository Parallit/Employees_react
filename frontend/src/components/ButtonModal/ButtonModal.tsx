import { FC, ReactNode } from 'react';
import style from './ButtonModal.module.scss';

type Props = {
  children: ReactNode;
  openModal: () => void;
};

export const ButtonModal: FC<Props> = ({ children, openModal }) => {
  return (
    <>
      <button onClick={openModal} className={style.btn}>
        {children}
      </button>
    </>
  );
};
