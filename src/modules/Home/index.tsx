import cardapio from '../../shared/json/cardapio.json';
import styles from './Inicio.module.scss';
import {ICardapio} from '../Cardapio/Cardapio.interface';

const pratosRecomendados = () => ([ ...cardapio ].sort(() => (0.5 - Math.random())).splice(0,3));

const homeTmpl = (pratos: ICardapio[] = []) => (
  <section>
    <h3 className={styles.titulo}>Recomendações da cozinha</h3>
    <div className={styles.recomendados}>
      {pratos.map(item => (<div key={item.id} className={styles.recomendado}>
        <div className={styles.recomendado__imagem}>
          <img src={item.photo} alt={item.title}/>
        </div>
        <button className={styles.recomendado__botao}>Ver mais</button>
      </div>))}
    </div>
  </section>
);


export default function Home() {
  const pratos: ICardapio[] = pratosRecomendados();
  return homeTmpl(pratos);
}
