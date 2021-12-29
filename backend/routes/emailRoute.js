var express=require('express');
var bodyParser = require('body-parser')// importing body parser middleware to parse form content from HTML
var cors = require('./../cors');
const emailRouter = express.Router();
var nodemailer = require('nodemailer');//importing node mailer

emailRouter.route('/')
.options(cors.cors,(req,res)=>{
    console.log("Coming email here");
    res.sendStatus(200);
})

// route which captures form details and sends it to your personal mail
.post(cors.cors,(req,res,next)=>{
  
  console.log("oooo",req.body.email)
  /*Transport service is used by node mailer to send emails, it takes service and auth object as parameters.
    here we are using gmail as our service 
    In Auth object , we specify our email and password
  */
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'im.hydrocare@gmail.com',//replace with your email
      pass: 'islemmed123'//replace with your password
    }
  }); 

  /*
    In mail options we specify from and to address, subject and HTML content.
    In our case , we use our personal email as from and to address,
    Subject is Contact name and 
    html is our form details which we parsed using bodyParser.
  */
  var mailOptions = {
    from: 'im.hydrocare@gmail.com',//replace with your email
    to: req.body.email,//replace with your email
    subject: `Confirmation Demande`,
    html:`Votre demande a été prise en compte, nous vous contacterons très prochainemet`
  };
  
  /* Here comes the important part, sendMail is the method which actually sends email, it takes mail options and
   call back as parameter 
  */

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send('error') // if error occurs send error as response to client
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Sent Successfully')//if mail is sent successfully send Sent successfully as response
    }
  });
})


module.exports = emailRouter;