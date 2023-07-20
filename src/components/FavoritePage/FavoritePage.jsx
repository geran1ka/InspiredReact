import {useDispatch, useSelector} from 'react-redux';
import {Goods} from '../Goods/Goods.jsx';
import {fetchCategory} from '../../features/goodsSlice.js';
import {useEffect} from 'react';
import {usePageFromSearchParams} from '../../hooks/usePageFromSearchParams.js';
import s from './FavoritePage.module.scss';


export const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const page = usePageFromSearchParams(dispatch);


  useEffect(() => {
    if (favorites) {
      const param = {list: favorites};
      if (page) param.page = page;
      dispatch(fetchCategory(param));
    }
  }, [favorites, page, dispatch]);


  return (
    favorites.length ?
    <Goods title="Избранное" /> :
    <h3 className={s.empty}>Вы ничего не добавили в избранное</h3>
  );
};
