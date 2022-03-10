// const express = require('express');
// const path = require('path');
// mailchimp.templates.publish({ name: 'My Template' });
// mailchimp.setDefaultOutputFormat('json');
require('dotenv').config({ path: __dirname + "/.env"});

// const mailchimpTx = require("@mailchimp/mailchimp_transactional")(process.env.MAILCHIMP_API_KEY);

// async function run() {
//   const response = await mailchimpTx.users.ping();
//   console.log(response);
// }

// run();


const mailchimpClient = require("@mailchimp/mailchimp_transactional")(
  process.env.MAILCHIMP_TEST_KEY
);


const message = {
  from_email: "test@example.com",
  subject: "Test EMAIL",
  text: "This is a Mailchimp Test Transactional Email",
  to: [
    {
      email: "test@example.com",
      type: "to"
    }
  ]
};


const run = async () => {
  const response = await mailchimpClient.messages.sendTemplate({
    template_name: "Bingo Card",
    // key: process.env.MAILCHIMP_TEST_KEY,
    template_content: [
      {
        "name": "Bingo Template Content",
        "content": "testing testing 1, 2, 3"     
      }
    ],
    message
  });
  console.log(response);
}
run();










