import { FC, ReactNode } from 'react';
import style from './Modal.module.scss';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <>
      <div className={style.overlay}>
        <div className={style.modalContainer}>
          <div>
            <p onClick={onClose} className={style.closeBtn}>
              X
            </p>
            <div className="content">{children}</div>
            {/* <div className="container">
                            <button className="btnPrimary">
                                <span className="bold">YES</span>
                            </button>
                            <button className="btnOutline">
                                <span className="bold">NO</span>
                            </button>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
