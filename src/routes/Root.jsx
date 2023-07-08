import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer.jsx";
import { Main } from "../components/Layout/Main/Main.jsx";
import { Header } from "../components/header/Header.jsx";

export const Root = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
)