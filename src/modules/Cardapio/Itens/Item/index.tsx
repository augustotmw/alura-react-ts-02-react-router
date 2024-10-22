import styles from './Item.module.scss';
import Tags from '../../../../shared/components/Tags';
import {useNavigate} from 'react-router-dom';
import {ICardapio} from '../../Cardapio.interface';

export default function Item(props: ICardapio) {
  const { title, description, category, size, serving, price, photo, id } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <Tags {...{category, size, serving, price}}/>
      </div>
    </div>
  );
}
