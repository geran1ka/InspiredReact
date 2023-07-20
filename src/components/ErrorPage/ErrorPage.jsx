import { useLocation, useNavigate, useRouteError } from "react-router-dom"
import s from './ErrorPage.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchColors } from "../../features/colorSlice.js";
import { fetchNavigation } from "../../features/navigationSlice.js";
export const ErrorPage = () => {
  const routeError = useRouteError();
  const {status} = useSelector(state => state.statusServer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const timeIdRef = useRef(null);


  useEffect(() => {
    if (status && location.pathname === '/404') {
      navigate('/')
    }
  }, [navigate, status, location]);

  
  useEffect(() => {
    if (!status && location.pathname === '/404') {
      clearInterval(timeIdRef.current);

      timeIdRef.current = setInterval(() => {
        dispatch(fetchNavigation());
        dispatch(fetchColors());
      }, 3000);
    }
    return () => {
      clearInterval(timeIdRef.current);
    }
  }, [dispatch, status, location])

  return (
  <div className={s.error}>
    <h2 className={s.title}>Произошла ошибка, попробуйте зайти попозже!</h2>
    <p className={s.message}> {routeError?.message ?? 'Неизвестная ошибка'}</p>
  </div>
)};