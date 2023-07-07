import s from './Development.module.scss';

export const Development = () => (
  <div className={s.development}>
    <ul className={s.developmenttList}>
      <li className={s.developmentItem}>
        Desinger:
        <a className={s.link} href='https://t.me/Mrshmallowww'>Anastasia Ilina</a>
      </li>

      <li className={s.developmentItem}>
        Developer:
        <a className={s.link} href='#'>Roman Khoruzhy</a>
      </li>
    </ul>
  </div>
)