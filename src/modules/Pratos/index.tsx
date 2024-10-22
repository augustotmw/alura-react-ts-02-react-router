import {Route, Routes, useNavigate, useParams} from 'react-router-dom';
import tema from 'styles/Tema.module.scss';
import styles from './Pratos.module.scss';
import classNames from 'classnames';
import cardapio from 'shared/json/cardapio.json';
import {ICardapio} from '../Cardapio/Cardapio.interface';
import Tags from '../../shared/components/Tags';
import NotFound from '../Error/NotFound';
import Structure from '../../shared/components/Structure';

export default function Pratos() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const prato = cardapio.filter((p: ICardapio) => p.id === Number(id))[0] || null;

  if (!prato) {
    return <NotFound />;
  }

  const {category, size, serving, price} = prato;
  const buttonClick = () => {
    navigate(-1);
  };

  return (
    <Routes>
      <Route path={'*'} element={<Structure/>}>
        <Route index element={
          <section className={tema.container}>
            <button className={styles.voltar} onClick={buttonClick}>
              {'< Voltar'}
            </button>
            <h1 className={styles.titulo}>
              {prato.title}
            </h1>
            <div className={styles.imagem}>
              <img src={prato.photo} alt={prato.title}/>
            </div>
            <div className={styles.conteudo}>
              <p className={styles.conteudo__descricao}>
                {prato.description}
              </p>
              <Tags {...{category, size, serving, price}}/>
            </div>
          </section>
        }/>
      </Route>
    </Routes>
  );
}
