import { BOOK } from 'book';

import styles from './styles.module.scss';

const NavBar = () => {
  // eslint-disable-next-line no-undef
  const { pathname } = window.location;
  return (
    <nav>
      <a
        href={BOOK.PRODUCT_LIST}
        className={pathname === BOOK.PRODUCT_LIST ? styles.isActive : ''}
      >
        All products
      </a>
      <a
        href={BOOK.MY_PRODUCT_LIST}
        className={pathname === BOOK.MY_PRODUCT_LIST ? styles.isActive : ''}
      >
        My products
      </a>
    </nav>
  );
};

export default NavBar;