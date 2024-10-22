import styles from './NotFound.module.scss';
import tema from 'styles/Tema.module.scss';
import { ReactComponent as ImgNotFound } from 'assets/imgs/not_found.svg';
import classNames from 'classnames';
import {useNavigate} from 'react-router-dom';

export default function NotFound() {

  const navigate = useNavigate();

  const buttonClick = () => {
    navigate(-1);
  };

  return (
    <section className={classNames({
      [styles.container]: true,
      [tema.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={buttonClick}>{ '< Voltar' }</button>
      </div>
      <ImgNotFound />
    </section>
  );
}
