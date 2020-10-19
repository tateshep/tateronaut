import React from 'react';
import { Container, Icon } from "nes-react";

/** actions */

/** helpers */


export const TateIntro = () => {
  const stars = ['','','','',''].map((item, value) => (<Icon icon="star" key={value} className='star-icon' large />));
  return (
    <section>
     <h1>Tate Shepherd</h1>
     <Container title="Five Star Website">
       {stars}
     </Container>
    </section>
  );
};

export default TateIntro;