import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import { BOOK } from 'book';
import NavBar from 'components/NavBar';
import Button from 'components/Button';
import Filters from 'containers/Filters';
import { MODALS_NAMES } from 'constants/index';
import { modalsActions } from 'bus/modals/actions';
import { selectTotalPrice } from 'bus/cart/selectors';

import styles from './styles.module.scss';

const Header: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const total: number = useSelector(selectTotalPrice);

  const addProduct = () =>
    dispatch(modalsActions.openModal(MODALS_NAMES.ADD_PRODUCT));

  return (
    <div className={styles.header}>
      <div className={styles.products}>
        <NavBar />
        <Button
          onClick={addProduct}
          extraClass={styles.extraClass}
          title="+ Add"
        />
      </div>

      <Filters />

      <div className={styles.cart}>
        <span className={styles.total}>Total $: {total}</span>
        <Link to={BOOK.CART}>
          <Button extraClass={styles.extraClass}>
            <BiCart size={32} className={styles.icon} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
