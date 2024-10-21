import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';
import {Link} from 'react-router-dom';

export default function Menu() {
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/cardapio', label: 'Cardápio' },
    { path: '/sobre', label: 'Sobre' },
  ];

  return (
    <nav className={styles.menu}>
      <Logo/>
      <ul className={styles.menu__list}>
        {routes.map((route, i) => (<li key={i} className={styles.menu__link}>
          <Link to={route.path}>{route.label}</Link>
        </li>))}
      </ul>
    </nav>
  );
}
