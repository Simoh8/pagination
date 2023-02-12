"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
const html = `<hi> hello simon</h>

<p> You can make it if you just push harder</p>
`;
const transporter = nodemailer_1.default.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 587,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
const message = {
    from: 'simon@gmail.com',
    to: 'oumaj202@gmail.com',
    subject: 'Hello',
    text: " hello motherfucker ",
    html: html
};
transporter.sendMail(message, (error, info) => {
    if (error) {
        console.log(error);
    }
    console.log(info.response);
});
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
