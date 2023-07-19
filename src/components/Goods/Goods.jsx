
import { Container } from '../Layout/Container/Container';
import { Product } from '../Product/Product';
import s from './Goods.module.scss';

import { useSelector } from 'react-redux';


export const Goods = ({title}) => {
  const {goodsList} = useSelector(state => state.goods);
    
  return (
    <section >
    <Container>
      <h2 className={s.title}>{title ?? "Новинки"}</h2>
      <ul className={s.list}>
        {goodsList.map(item =>
          <li key={item.id}>
            <Product  {...item}/>
          </li>)}
      </ul>
      {categoryData?.category && <p>Категория: {categoryData?.category}</p>} 
    </Container>
  </section>
  )
}