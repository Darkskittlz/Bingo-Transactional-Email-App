require('dotenv').config({ path: __dirname + "/.env"});

// MandrillApp API Test Integration

const mailchimpClient = require("@mailchimp/mailchimp_transactional")(
  process.env.MAILCHIMP_TEST_KEY
);


const message = {
  from_email: "test@bingotestapp.xyz",
  subject: "Test EMAIL",
  text: "This is a Mailchimp Test Transactional Email",
  to: [
    {
      email: "darkskiiittles@bingotestapp.xyz",
      type: "to"
    }
  ]
};


const run = async () => {
  const response = await mailchimpClient.messages.sendTemplate({
    template_name: "Bingo Card",
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












