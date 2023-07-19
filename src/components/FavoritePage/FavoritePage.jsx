import { useDispatch, useSelector } from 'react-redux';
import { Goods } from '../Goods/Goods.jsx';
import { fetchCategory } from '../../features/goodsSlice.js';
import { useEffect } from 'react';


export const FavoritePage = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    if (favorites) {
      dispatch(fetchCategory({list: favorites}))
    }
  }, [favorites, dispatch]);


  return (
    <Goods title="Избранное" />
  )
}