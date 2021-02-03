
import express from 'express'
import bcrypt from 'bcrypt-nodejs'
import cors from 'cors'
import knex from 'knex'
import {handleRegister} from './controls/register.js';
import {handleSignup} from './controls/signup.js'
import {handlerProfile} from './controls/profile.js'
import {handlerImage,imageApiCall} from './controls/image.js'
const db=knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '4890341404',
      database : 'brainface'
}
});
db.select('*').from('users').then(data=>{
    console.log("data:",data);
});
const app=express();
import bodyParser from 'body-parser'
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.json(database.users);
})
app.post('/imageUrl',(req,res)=>{imageApiCall(req,res)});

app.get('/profile/:ID',(req,res)=>{handlerProfile(req,res,db)})


app.post('/signup',handleSignup(bcrypt,db))
  
  app.post('/register',(req,res)=>{handleRegister(req,res,bcrypt,db)})
  
  app.put('/image',(req,res)=>{handlerImage(req,res,db) 
  })

 

app.listen(3000,()=>{
    console.log('app is running')
})
