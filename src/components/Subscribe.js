import React, { useState, useRef } from "react";
import styled from 'styled-components';
import "../Styles/subscribe.css";
import { Form, Space, Button, Input } from 'antd';
import 'antd/dist/antd.min.css';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("WU8q5kD9NS6_3Nolw");


const SendContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width:900px){
    margin-top: 20px;
  }
`

const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

  h2 {
      color: white;
      text-align: center;
      font-size: 80px;
  }


  form {
      display: flex;
      flex-direction: column;
      width: 100%;
  }

  input {
      display: flex;
      width: 100%;
      justify-content: center;
      margin-bottom: 5px;
      border-radius: 5px;
      border: 1px solid black;
      height: 40px;
  }

  span {
      color: white;
      display: flex;
      justify-content: center;
  }

  textarea {
    height: 90px;
    margin-bottom: 5px;
  }

  #send {
    width: 200px;
    display: flex;
    margin-top: 10px;
    justify-content: center;
  }

  @media (max-width: 900px){
    width: 100%;

    h2 {
      font-size: 70px;
    }
  }
`


export default function Subscribe() {
  const [message, setMessage] = useState(false)
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true)

    emailjs.sendForm(
      'service_tlu1qji',
      'template_56yum9e',
      form.current
      // 'WU8q5kD9NS6_3Nolw',
    )
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
      }, (err) => {
        console.log('FAILED...', err.text);
      });
    e.target.reset();
  }
  return (
    <ContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <h3>Name</h3>
        <input type="text" name="user_name" />
        <h3>Email</h3>
        <input type="email" name="user_email" />
        <SendContainer><input id="send" type="submit" value="Send" /></SendContainer>
        {message && <span>Thanks, please check your inbox for your bingo card</span>}
      </form>
    </ContactForm> 
    );
  };
  
  
  