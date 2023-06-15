import { FC } from 'react';
import style from './ButtonModal.module.scss';

export const ButtonModal: FC = () => {
    return (
        <>
            <button className={style.btn}>Edit</button>
        </>
    );
}