import React from 'react';
import { Container, Icon } from "nes-react";
import styles from './TateIntro.module.css';
/** actions */

/** helpers */


export const TateIntro = () => {
  const stars = ['','','','',''].map((item, value) => (<Icon icon="star" key={value} className='star-icon' large />));

  return (
    <section>
     <h1>Tate Shepherd</h1>
     <Container className={styles.contentContainer} title="Five Star Website">
       <p>Hello,</p>
       <p>This is a fantastic website is it not? I would absolutely give it five stars. If you think it is not worth all those stars take it up with me directly. I won't have you chicken-hearted laggards talking ill about my website behind my back. If you think it <em>is</em> as great as I do, then I'd like to say to you from the bottom of my heart, I feel you are a superb judge of websites. Please reach out to me via one of the contact methods listed on this page.</p>
       <div className={styles.starsContainer}>
         {stars}
       </div>
     </Container>
    </section>
  );
};

export default TateIntro;