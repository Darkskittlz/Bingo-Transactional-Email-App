const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const functions = require("firebase-functions");
const admin = require('firebase-admin');


initializeApp({
    credential: applicationDefault()
  });
  
  const db = getFirestore();

const SENDGRID_API_KEY = functions.config().sendgrid.key;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

exports.firestoreEmail = functions.firestore
    .document('users/{userId}')
    .onCreate(event => {

        const userId = event.params.userId;
        
        const db = admin.firestore();

        return db.collection('users').doc(userId)
            .get()
            .then(doc => {
                const user = doc.data()

                const msg = {
                    to: "darkskiiittles@gmail.com",
                    from: 'hello@bingotestapp.xyz',
                    subject: "New Bingo Card",

                    //Custom template 
                    template_id: "d-9dc8156df4944440bf69887b73a0aa93",
                    substitutionWrappers: ['{{', '}}'],
                    substitutions: {
                        name: user.displayName
                    }
                };

                return sgMail.send(msg)
            })
            .then(() => console.log('email sent') )
            .catch(err => console.log(err) )
    });








// // Firebase Config
// import * as functions from "firebase-functions";
// // import * as admin from "firebase-admin";
// // const db = admin.firestore();


// // Sendgrid Config
// import * as sgMail from "@sendgrid/mail";

// const API_KEY = functions.config().sendgrid.key;
// const TEMPLATE_ID = functions.config().sendgrid.template;
// sgMail.setApiKey(API_KEY);

// // Functions

// // Sends email to user after signup
// export const welcomeEmail=functions.auth.user().onCreate((user)=>{
//   const msg = {
//     to: user.email,
//     from: "hello@fireship.io",
//     template_id: TEMPLATE_ID,
//     dynamic_template_data: {
//       subject: "Welcome to the Bingo App!",
//       name: user.displayName,
//     },
//   };
//   return sgMail.send(msg);
// });

// // Require gcloud
// // const gcloud = require("google-cloud");

// // Enable Cloud Storage
// // const gcs = gcloud.storage({
// //   projectId: "transactionalapisite",
// //   keyFilename: "/Users/Darkskittlz/documents/googleCredentials.json",
// // });

// // Reference an existing bucket.
// // const bucket = gcs.bucket("bingo_bucket");
