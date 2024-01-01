const express = require("express");
const cors = require('cors'); 
const { default: mongoose } = require("mongoose");
//Importo models schema
const User = require('./models/User.js');
const cookieParser = require('cookie-parser');
//Crypt psw in chiaro
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bcryptsalt = bcrypt.genSaltSync(8);
const jwtsecret = 'stringarandom';
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

console.log(process.env.MONGO_URL)
//await ???
mongoose.connect(process.env.MONGO_URL);

app.get("/test" , (req,res) => {
    res.json("test okkkk");
} );

app.post("/register" , async (req,res) => {
    const {name,email,password} = req.body;
    
    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptsalt),
        });
        res.json(userDoc);
    } catch (error) {
        res.status(422).json(error);
    }

} );

app.post("/login" , async (req,res) => {
    const {email,password} = req.body;
    const userDoc = await User.findOne({email});
    if (userDoc){
        const checkPassword = bcrypt.compareSync(password, userDoc.password);
        if (checkPassword){
            jwt.sign({

                email:userDoc.email,
                id:userDoc._id
            },jwtsecret , {} , (err,token) => {
                if  (err) throw err;
                res.cookie('token' , token).json(userDoc);
            });
        }
        else{
            res.status(422).json('Password errata!');
        }
    } else {
        res.json('UserDoc non trovato!');
    }
} );

app.get('/profile' , (req, res) => {
    const {token} = req.cookies;
    if (token) {
        jwt.verify(token, jwtsecret,  {} , async (err, user) => {
            if (err) throw  err;
            const userDoc = await User.findById(user.id);
            //const {name,email,id}
            res.json(userDoc);
        })
    } else {
        res.json(null);
    }
} )


app.listen(4000);