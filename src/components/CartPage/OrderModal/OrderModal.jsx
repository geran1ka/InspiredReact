import { useDispatch, useSelector } from "react-redux";
import s from './OrderModal.module.scss'
import { API_URL } from "../../../const";
import { clearCart } from "../../../features/cartSlice";

export const OrderModal = () => {
  const {
    order: { values, order, id, totalPrice },
  } = useSelector((state) => state.cart);
  console.log('order: ', order);
  console.log('values: ', values);
  console.log('id: ', id);
  console.log('totalPrice: ', totalPrice);





  const {goodsList} = useSelector(state => state.goods);
  const dispatch = useDispatch();

  const handleClouseModal = () => {
    dispatch(clearCart());
  }

  const hadleModalClick = (e) => {
    e.stopPropagation();
  }
  return (
    <div className={s.modal} onClick={handleClouseModal}>
      <div className={s.body} onClick={hadleModalClick}>
        <h2 className={s.title}>Заказ оформлен №{id}</h2>

        <div className={s.description}>
          <p>Спасибо за выбор нашего магазина!</p>
          <p>Здесь вы можете посмотреть все детали вашего заказа.</p>
        </div>

        <ul className={s.customer}>
          <li className={s.customerItem}>
            <span className={s.customerTitle}>Получатель</span>
            <span className={s.custometData}>{values.fio}</span>
          </li>

          {
            values.delivery === 'delivery' &&
          <li className={s.customerItem}>
            <span className={s.customerTitle}>Адрес доставки</span>
            <span className={s.custometData}>{values.address}</span>
          </li>
          }

          <li className={s.customerItem}>
            <span className={s.customerTitle}>Телефон</span>
            <span className={s.custometData}>{values.phone}</span>
          </li>

          <li className={s.customerItem}>
            <span className={s.customerTitle}>E-mail</span>
            <span className={s.custometData}>{values.email}</span>
          </li>

          <li className={s.customerItem}>
            <span className={s.customerTitle}>Способ получения</span>
            <span className={s.custometData}>
              {values.delivery === 'delivery' ? 'Доставка' : 'Самовывоз'}
              </span>
          </li>
        </ul>

        <ul className={s.goods}>
          {order.map((item) => {
            const product = goodsList.find(product => product.id === item.id);
            return (
            <li className={s.goodsItem} key={`${item.id}${item.color}${item.size}`}>
              <img className={s.goodsImg} src={`${API_URL}${product.pic}`} alt={product.title} />
              <p className={s.goodsCount}>X{item.count}</p>
            </li>
          )
          })}
        </ul>

        <div className={s.total}>
          <p>Итого:</p>
          <p>руб {totalPrice}</p>
        </div>

        <button className={s.close} onClick={handleClouseModal}></button>
      </div>
    </div>
  )
}