import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  children: ReactNode;
}

const modalRootElement = document.querySelector('#portal') as HTMLElement;

export const ModalPortal: FC<ModalPortalProps> = ({ children }) => {
  return modalRootElement ? createPortal(children, modalRootElement) : null;
};
