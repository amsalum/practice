const express=require('express')
const app=express()
const mongoose =require('mongoose')
const UserModel = require('./models/Users.js')
const port=5001
app.listen(port,()=>{
    console.log(`server is running...${port}`)
})
app.get('/getUsers', (req, res) => {
    UserModel.find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  mongoose
  .connect('mongodb://localhost:27017/mongo-tutorial')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });