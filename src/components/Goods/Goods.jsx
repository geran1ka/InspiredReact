
import {Container} from '../Layout/Container/Container.jsx';
import {Pagination} from '../Pagination/Pagination.jsx';
import { Preloader } from '../Preloader/Preloader.jsx';
import {Product} from '../Product/Product.jsx';
import s from './Goods.module.scss';

import {useSelector} from 'react-redux';


export const Goods = ({title}) => {
  const {goodsList, totalCount, status} = useSelector(state => state.goods);

  return (
    <section >
      <Container>
        <h2 className={s.title}>
          {title ?? 'Новинки'}
          {totalCount && totalCount > 0 ? <sup>&nbsp;({totalCount})</sup> : ''}
        </h2>
        {status == 'loading' ? ( <Preloader /> ) : (
        <>
          <ul className={s.list}>
            {goodsList.map(item =>
              <li key={item.id}>
                <Product
                  {...item}/>
              </li>)}
          </ul>
          <Pagination />
        </>
        )}

      </Container>
    </section>
  );
};
