import React from 'react';
import styles from './Footer.module.css';
import ContactMe from '../ContactMe/ContactMe';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ContactMe />
    </footer>
  )
}
export default Footer;