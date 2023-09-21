import { TitlePage } from 'src/styles/TitlePage';
import style from './About.module.scss';

export const About = () => {
  return (
    <>
      <TitlePage>About this project</TitlePage>
      <div className={style.content_wrp}>
        <div className={style.description_wrp}>
          <p className={style.description}>
            This project was created by using React and ExpressJS for the
            backend, includes JWT Tokens authentication and MongoDB database
          </p>
          <title className={style.title}>Frontend:</title>
          <title className={style.title}>Backend:</title>
        </div>
        <div>
          <img src="" alt="image" />
        </div>
      </div>
    </>
  );
};
