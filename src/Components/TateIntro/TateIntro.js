import React from 'react';
import { Container, Icon, Sprite } from "nes-react";
import styles from './TateIntro.module.css';
/** actions */

/** helpers */


export const TateIntro = () => {
  const stars = ['','','','',''].map((item, value) => (<Icon icon="star" key={value} className='star-icon' large />));

  return (
    <section>
     <h1>Tate Shepherd</h1>
     <Container title="Five Star Website">
       <div className={styles.starsContainer}>
         {stars}
       </div>
     </Container>
     <Container >
      <h2>Find me on Github</h2>
      <div className={styles.contentCentered}>
        <Sprite sprite='octocat' />
        <a className={styles.githubLink} href='https://github.com/tateshep' target='_blank'>@tateshep</a>
      </div>
     </Container>
    </section>
  );
};

export default TateIntro;