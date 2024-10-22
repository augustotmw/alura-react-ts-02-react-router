import cardapio from '../../shared/json/cardapio.json';
import styles from './Home.module.scss';
import tema from '../../styles/Tema.module.scss';
import imgNossaCasa from 'assets/imgs/nossa_casa.png';
import {ICardapio} from '../Cardapio/Cardapio.interface';
import {useNavigate} from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const pratosRecomendados = () => ([ ...cardapio ].sort(() => (0.5 - Math.random())).splice(0,3));
  const pratos: ICardapio[] = pratosRecomendados();

  const onButtonClick = (prato: ICardapio) => {
    navigate(`/prato/${prato.id}`);
  };

  const homeTmpl = () => (
    <section className={tema.container}>
      <h3 className={tema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratos.map(item => (<div key={item.id} className={styles.recomendado}>
          <div className={styles.recomendado__imagem}>
            <img src={item.photo} alt={item.title}/>
          </div>
          <button className={styles.recomendado__botao}
            onClick={() => { onButtonClick(item); }}>Ver mais</button>
        </div>))}
      </div>

      <h3 className={tema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={imgNossaCasa} alt="Sobre"/>
        <p className={styles.nossaCasa__endereco}>
          Endereço fake, 1234 <br/> <br/> Municipio Fake - FK
        </p>
      </div>
    </section>
  );


  return homeTmpl();
}
