import {useSelector} from 'react-redux';
import s from './Cart.module.scss';
import {Container} from '../../Layout/Container/Container.jsx';
import {CartItem} from './CartItem/CartItem.jsx';

export const Cart = ({cartItems, goodsList}) => {
  const totlaPrice = 0;


  return (
    <section>
      <Container>
        <h2 className={s.title}>Корзина</h2>

        {goodsList.length ?
          <ul className={s.list}>
            {cartItems.map(item => (
              <li key={`${item.id}-${item.color}-${item.size}`} className={s.item}>
                <CartItem {...item} goodsList={goodsList}/>
              </li>
            ))}
          </ul> :
          <h3>В корзине пусто</h3>
        }

        <div className={s.total}>
          <p>Итого:</p>
          <p>руб {totlaPrice}</p>
        </div>
      </Container>
    </section>
  );
};
