import { useDispatch, useSelector } from 'react-redux';
import { Goods } from '../Goods/Goods';
import { fetchCategory } from '../../features/goodsSlice';
import { useEffect } from '../../features/goodsSlice';


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