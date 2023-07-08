import { Container } from '../Layout/Container/Container.jsx';
import s from './Footer.module.scss';
import { Category } from './Categoty/Category.jsx';
import { Social } from './Social/Social.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
import { Copyright } from './Copyright/Copyright.jsx';
import { Development } from './Development/Devolopment.jsx';

export const Footer = () => (
  <footer>
    <Container>
      <div className={s.container}>
        <Category />
        
        <Social />
        
        <Contacts />

        <Copyright />

        <Development />
        
      </div>
    </Container>
  </footer>
);