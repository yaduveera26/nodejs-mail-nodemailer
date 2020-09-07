const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.post('/', async(req, res) => {
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'yaduveera26@gmail.com',
                pass: 'Kalayaduveerachowdaiah'
            }
        });
        var mail = req.body.email;
        console.log(mail);
        var mailoptions = {
            from: 'yaduveera26@gmail.com',
            to: mail,
            subject: 'OTP',
            text: 'this is your OTP'
        };
        transporter.sendMail(mailoptions, function(error, info) {
            if (error)
                console.log(error);
            else
                console.log(info.response);
        });
        res.send('email sent');
    } catch (error) {
        console.log(error);
    }
});

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(3000, () => {
    console.log('server started at port 3000');
})