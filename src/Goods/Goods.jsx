import { Container } from '../components/Layout/Container/Container';
import { Product } from '../components/Product/Product';
import s from './Goods.module.scss';

import { useSelector } from 'react-redux';


export const Goods = ({categoryData}) => {
  const {goodsList} = useSelector(state => state.goods);

  const title = categoryData?.title ?? 'Новинки';
    
  return (
    <section >
    <Container>
      <h2 className={s.title}>{title}</h2>
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