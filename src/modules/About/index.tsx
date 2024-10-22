import tema from 'styles/Tema.module.scss';
import styles from './About.module.scss';
import imgCasa from 'assets/imgs/casa.png';
import imgMassa1 from 'assets/imgs/massa1.png';
import imgMassa2 from 'assets/imgs/massa2.png';

const imgs = [ imgMassa1, imgMassa2 ];

export default function About() {
  return(
    <section className={tema.container}>
      <h3 className={tema.titulo}>About</h3>
      <div className={styles.sobreNos}>
        <img src={imgCasa} alt="Sobre nós"/>
        <div className={styles.sobreNos__texto}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e
            sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente
            qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam
            perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {
          imgs.map((img, i) => (
            <img src={img} key={i} alt={`Massa ${i+1}`} className={styles.imagens__imagem}/>
          ))
        }
      </div>
    </section>
  );
}
