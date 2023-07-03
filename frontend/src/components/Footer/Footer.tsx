import { FC } from 'react';
import style from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.footer_info}>
          <h2 className={style.footer_heading}>Employees project</h2>
          <ul className={style.footer_social}>
            <li className={style.footer_animate}>GitHub</li>
            <li className={style.footer_animate}>Telegram</li>
            <li className={style.footer_animate}>FC</li>
          </ul>
        </div>
        <div className={style.footer_copyright}>
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved |
            This project is made with &#10084; by
            <a
              className={style.footer_link}
              href="https://github.com/Parallitik"
            >
              {' '}
              Parallitik
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
