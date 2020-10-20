import React from 'react';
import { Container, Icon } from "nes-react";
import styles from './ContactMe.module.css';
/** actions */

/** helpers */


export const ContactMe  = () => {


  return (
    <div className={`contact-me ${styles.contactDiv}`}>
     <Container className={styles.linkContainer}>
      <div>
        <a href='https://github.com/tateshep' target='_blank' rel='noopener noreferrer'>
          <Icon icon='github' large/>
        </a>
      </div>
      <a href='https://www.linkedin.com/in/tate-shepherd' target='_blank' rel='noopener noreferrer'>
        <Icon icon='linkedin'  large/>
      </a>
      <a href='https://www.facebook.com/tate.shepherd' target='_blank' rel='noopener noreferrer'>
        <Icon icon='facebook' large/>
      </a>
      <a href='mailto:tateshep@gmail.com'>
        <Icon icon='gmail' large/>
      </a>
     </Container>
    </div>
  );
};

/* istanbul ignore next */
export default ContactMe;