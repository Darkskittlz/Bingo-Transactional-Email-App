const client = require("@sendgrid/mail") // Import sendgrid module

functino sendEmail(client, message, senderEmail, senderName) {
    return new Promise((fulfill, reject) => {
        const data = {
            from: { 
                email: senderEmail,
                name: senderName
            },
            subject: "SendGrid Form",
            to: 'jeremyneal1012@gmail.com',
            html: `New Form Submission<br /> ${message}`
        }

        client
        .send(data)
        .then(([response, body]) => {
            fulfill(response)
        })
        .catch(error => reject(error))
    })
}

// An exported handler needs to contain: 
//  event - an object that contains details about the request
//  context - info about the context the function was called info
//  callback - the functino to return an error/response to

exports.handler = function(event, context, callback) {
    const {
        SENDGRID_API_KEY,
        SENDGRID_SENDER_EMAIL,
        SENGRID_SENDER_NAME
    } = process.env

    const body = JSON.parse(event.body) // The received data is parsed
    const message = body.message        // The message is accessed
    client.setApiKey(SENDGRID_API_KEY)  // The key is set for the SendGrid API 

    sendEmail(                          // sendEmail() is called and the params used
        client,
        message,
        SENDGRID_SENDER_EMAIL,
        SENDGRID_SENDER_NAME
    )
    .then(response => callback(null, { statusCode: response.statusCode }))
    .catch(err => callback(err, null))
}
