import cardapio from '../../shared/json/cardapio.json';
import styles from './Home.module.scss';
import tema from '../../styles/Tema.module.scss';
import imgNossaCasa from 'assets/home/nossa_casa.png';
import {ICardapio} from '../Cardapio/Cardapio.interface';

const pratosRecomendados = () => ([ ...cardapio ].sort(() => (0.5 - Math.random())).splice(0,3));

const homeTmpl = (pratos: ICardapio[] = []) => (
  <section className={tema.container}>
    <h3 className={tema.titulo}>Recomendações da cozinha</h3>
    <div className={styles.recomendados}>
      {pratos.map(item => (<div key={item.id} className={styles.recomendado}>
        <div className={styles.recomendado__imagem}>
          <img src={item.photo} alt={item.title}/>
        </div>
        <button className={styles.recomendado__botao}>Ver mais</button>
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


export default function Home() {
  const pratos: ICardapio[] = pratosRecomendados();
  return homeTmpl(pratos);
}
