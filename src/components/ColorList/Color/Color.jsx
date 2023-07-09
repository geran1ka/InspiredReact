import s from './Color.module.scss';
import cn from 'classnames';

export const Color = ({color, check}) => (
    <li className={cn(s.color, check ? s.colorCheck : "")} style={{"--data-color": color}}></li>
  )
