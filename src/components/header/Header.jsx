import {Top} from './Top/Top.jsx';
import {Navigation} from './Navigation/Navigation.jsx';
import s from './Header.module.scss';
import {Search} from '../Search/Search.jsx';
import {useState} from 'react';

export const Header = () => (
  <header className={s.header}>
    <Top />
    <Search />
    <Navigation />
  </header>
);
