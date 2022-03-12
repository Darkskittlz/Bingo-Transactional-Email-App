import React, { useState } from "react";
import styled from 'styled-components';
import "../Styles/subscribe.css";
import { Form, Space, Button, Input } from 'antd';
import 'antd/dist/antd.min.css';



// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const Container = styled.div`
    padding: 20px;
    margin-left: 126%;
    width: 213px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 80px 80px;
    border-radius: 10px;
    background-color: #ffffff6a;

    button {
        text-align: center;
    }
`


export default function Subscribe() {
  const [form] = Form.useForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
  }

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input style={{borderRadius: "7px"}}/>
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input style={{borderRadius: "7px"}}/>
      </Form.Item>
      <Form.Item>
        <Space> 
          <Container>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button type="secondary" htmlType="submit" onClick={(e) => form.resetFields()}>Clear</Button>
          </Container>
        </Space>
      </Form.Item>  
    </Form>

  );
};



