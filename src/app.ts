import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.resolve(__dirname,'../.env')})


const html= `<hi> hello simon</h>

<p> You can make it if you just push harder</p>
`


const transporter= nodemailer.createTransport({
    host:'smtp.gmail.com',
    service:'gmail',
    port: 587,
    secure: true,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const message= {
    from: 'simon@gmail.com',
        to: 'oumaj202@gmail.com',
        subject: 'Hello',
        text:" hello motherfucker ",
        html: html

}

transporter.sendMail(message, (error,info)=>{

    if(error){  console.log(error);}
    console.log(info.response);
    
  

})


//  const info = await transporter.sendMail({
//     from: 'simon@gmail.com',
//     to: 'oumaj202@gmail.com',
//     subject: 'Hello',
//     html: html
//  })
// console.log("message back "+info);
// }
// main()
// .catch(e=>{console.log((e));})