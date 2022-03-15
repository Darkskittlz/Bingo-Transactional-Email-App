import React, { useState, useRef } from "react";
import styled from 'styled-components';
import { locations, genres } from "../constants/constants";
import "../Styles/subscribe.css";
import 'antd/dist/antd.min.css';
import { Select } from 'antd';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("WU8q5kD9NS6_3Nolw");


const SendContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;

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
    border: 0px solid black;
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

const Container1 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media screen and (max-width:900px){
    margin-top: 20px;
  }
`

const Container2 = styled.div`
  width: 50%;
  margin-left: 5px;
  display: flex;
  justify-content: center;

  @media screen and (max-width:900px){
    margin-top: 20px;
  }
`

const GridContainer = styled.div`
  display: flex;
  width: 100%;
`

const DropdownContainer = styled.div`
  width: 100%;
  height: 40px;

  span.ant-select-selection-placeholder {
    color: lightgrey;
  }

  span.ant-select-selection-item {
    color: black;
  }
`




export default function Subscribe() {
  const [message, setMessage] = useState(false)
  const [onChange, handleOnChange] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true)

    emailjs.sendForm(
      'service_tlu1qji',
      'template_56yum9e',
      form.current
    )
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
      }, (err) => {
        console.log('FAILED...', err.text);
      });
    e.target.reset();
  }

  // handleOnChange = (value,event) => {
  //   console.log(value);
  // }

  return (
    <ContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <GridContainer>
          <Container1><h1>Location</h1></Container1>
          <Container2><h1>Genre</h1></Container2>
        </GridContainer>
        <GridContainer>
          <Container1>
            <DropdownContainer>
              <Select 
                allowClear
                showSearch
                placeholder='Select Location'
                style={{width:'100%'}}
                // onSelect={(value,event) => this.handleOnChange(value,event)}
              >
                {locations.map(({ id, text }) => {
                  return <Select.Option 
                      onChange={(value, options)=>handleOnChange(value,options,id)}
                      key={id} 
                      value={text}
                      name="user_location"
                    >{text} 
                  </Select.Option>
                })}
              </Select>
            </DropdownContainer>
          </Container1>
          <Container2>
            <DropdownContainer>
                <Select 
                  allowClear
                  showSearch
                  placeholder='Select Genre' 
                  style={{width:'100%'}}
                  // onSelect={(value,event) => this.handleOnChange(value,event)}
                >
                  {genres.map(({ id, text }) => {
                    return <Select.Option 
                        onChange={(value, options)=>handleOnChange(value,options,id)}
                        key={id} 
                        value={text}
                        name="user_genre {text}"
                      >{text}
                    </Select.Option>
                  })}
                </Select>
              </DropdownContainer> 
          </Container2>
        </GridContainer>
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
  
  
  