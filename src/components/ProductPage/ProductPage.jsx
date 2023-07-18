import { useEffect } from 'react';
import { Container } from '../Layout/Container/Container';
import s from './ProductPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../features/productSlice';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../const';

export const ProductPage = () => {

  const dispatch = useDispatch();
  const {id} = useParams();

  const { product } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [id, dispatch]);


  return (
    <section className={s.card}>
      <Container className={s.container}>
        <img src={`${API_URL}${product.pic}`} alt={`${product.title} ${product.description}`}></img>
      </Container>
    </section>
  )
}