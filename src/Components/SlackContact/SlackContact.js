import React, { useEffect, useState } from 'react';

import { Container, TextInput, TextArea, Button } from "nes-react";
/** actions */

/** helpers */


export const SlackContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const webhookURL = 'https://hooks.slack.com/services/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';
  const myData = {
    "text": `Name: ${name} \n${email} \n${message}`
  }

  const submitForm = async (url='', data={}) => {

    const res = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    return res.json()
  }

  const handleClick = () => {
    submitForm(webhookURL, myData)
      .then(response => response.json())
      .then(data=>{
        console.log(data);
      })
      .catch(err => {
        console.error('There was an ERROR!!!',err)
      });
  }


  return (
    <Container title="Contact Me" className='slack-contact'>
          <TextInput
            label="Name"
            placeholder="Input Name"
            value={name}
            onChange={e => {setName(e.target.value)}}
          />
          <TextInput
            label="Email"
            placeholder="Input Email"
            value={email}
            onChange={e => {setEmail(e.target.value)}}
          />
          <TextArea
            label="Message"
            placeholder="Start Writing"
            value={message}
            onChange={e => {setMessage(e.target.value)}}
          />
          <Button onClick={handleClick} success>SEND IT!</Button>
    </Container>
  );
};

/* istanbul ignore next */
export default SlackContact;
