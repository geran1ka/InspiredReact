import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer.jsx";
import { Main } from "../components/Layout/Main/Main.jsx";
import { Header } from "../components/header/Header.jsx";



const list = [
  {link: 'women', title: 'Женщины', categories: [
    {link: 'bras', title: 'Бюстгальтеры'},
    {link: 'panties', title: 'Трусы'},
    {link: 'socks', title: 'Носки'},
    {link: 'bathrobes', title: 'Халаты'},
    {link: 'thermal', title: 'Термобелье'},
    {link: 'pijamas', title: 'Пижамы'},
  ]},
  {link: 'men', title: 'Мужчины', categories: [
    {link: 'panties', title: 'Трусы'},
    {link: 'socks', title: 'Носки'},
    {link: 'bathrobes', title: 'Халаты'},
    {link: 'thermal', title: 'Термобелье'},
  ]}
];


export const Root = () => (
  <>
    <Header list={list} />
    <Main>
      <Outlet />
    </Main>
    <Footer list={list} />
  </>
)