import styles from './Tags.module.scss';
import classNames from 'classnames';
import {ICardapioCategory} from '../../../modules/Cardapio/Cardapio.interface';

export default function Tags({category, size, serving, price}:{category: ICardapioCategory, size: number, serving: number, price: number}) {
  return (
    <div className={styles.item__tags}>
      <div className={classNames({
        [styles.item__tipo]: true,
        [styles[`item__tipo__${category.label.toLowerCase()}`]]: true
      })}>{category.label}</div>
      <div className={styles.item__porcao}>{size}g</div>
      <div className={styles.item__qtdpessoas}>{serving} 2 pessoa{serving === 1 ? '' : 's'}</div>
      <div className={styles.item__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}
